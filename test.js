const readdirs = require('read-dirs');
const fs = require('fs');
const pt = require('path');

const Feature = require('./classes/feature');
const Sequence = require('./classes/sequence');

function toComment(line) {
    if (line.match(/#(.*)/g)) {
        return `.Comment('${line.match(/#(.*)/)[1]}')`;
    }

    return undefined;
};

function toTag(line) {
    if (line.match(/^@(.*)/g)) {
        return `.Tag('${line.match(/@(.*)/)[1]}')`;
    }

    return undefined;
};

function toFeature(line) {
    if (line.match(/Feature: ?(.*)?/g)) {
        return `.Feature('${(line.match(/Feature: ?(.*)?/)[1]) ? line.match(/Feature: ?(.*)?/)[1] : ''}')`;
    }

    return undefined;
};

function toBackgroundScenario(line) {
    if (line.match(/(Scenario|Background): ?(.*)?/g)) {
        return `.${line.match(/(Scenario|Background): ?(.*)?/)[1]}('${(line.match(/(Scenario|Background): ?(.*)?/)[2]) ? line.match(/(Scenario|Background): ?(.*)?/)[2] : ''}', new $Sequence()`;
    }

    return undefined;
};

function screen(line) {
    return line.replace(/'/,'\\\'')
};

function toStep(line) {
    if (line.match(/(Given|When|Then|And) (.+)/g)) {
        return `.${line.match(/(Given|When|Then|And) (.+)/)[1]}('${screen(line.match(/(Given|When|Then|And) (.+)/)[2]).trim()}')`;
    }

    return undefined;
};

function transform(line) {

    let result = [
        toComment(line),
        toTag(line),
        toFeature(line),
        toBackgroundScenario(line),
        toStep(line)
    ];

    if (result.every((value) => (undefined === value))) return line;

    return result.filter((value) => (undefined != value))[0];
};


let header = ['const features = ['];

readdirs({
    path: '../eaist-ui-testing/features',
    ext: '.feature',

    on: {
        eof: function(scope) {

            let path = scope.$file.path.replace(/\.\.\\\eaist-ui-testing/,'exports').replace(/\\/g,'/').replace(/\.feature/,'.js');

            let transformed = [
              'module.exports = function(callback) {',
              `new $Feature('${path.replace(/exports/, 'dist').replace(/\.js/,'')}')`
            ];
            let firstSequence = true;

            scope.$file.lines.forEach((line) => {

                if (toBackgroundScenario(line) && !firstSequence) {
                    transformed.push(')');
                }

                transformed.push(transform(line));

                if (toBackgroundScenario(line) && firstSequence) {
                    firstSequence = false;
                }
            });
            transformed.push(')');
            transformed.push('.finalize(callback);');
            transformed.push('};');

            let _path = './';
            path.match(/([^\\\/\.]+)(?=\/|\\)/g).forEach((dir) => {
                _path = pt.join(_path, dir);
                if (!fs.existsSync(_path)) {
                    fs.mkdirSync(_path)
                }
            });

            fs.writeFile(path, transformed.join('\n'));

            header.push(`require('${path.replace(/exports\/features/,'.').replace(/\.js/,'')}'),`);

        }
    }
})
.then((res) => {
    header.push('() => console.log(\'done\')');
    header.push('];');
    header.push('module.exports = function() {');
    header.push('features.forEach((feature) => feature());');
    header.push('};')

    fs.writeFile('./exports/features/index.js', header.join('\n'));
})
.catch((err) => {});
