const fs = require('fs');
const pt = require('path');
const indent = (t) => ('\t').repeat(t*2);

class Feature {

    constructor(filename) {
        this.filename = filename;
        this.lines = [];
    };

    Comment(text) {
        this.lines.push(`#${text}`);

        return this;
    };

    Tag(name) {
        this.lines.push(`@${name}`);

        return this;
    };

    Feature(name) {
        this.lines.push(`Feature: ${name}`);

        return this;
    };

    Background(name, sequence) {
        this.lines.push(`${indent(1)}Background: ${name}`);
        this.lines = this.lines.concat(sequence.content().map((line) => `${indent(2)}${line}`));

        return this;
    };

    Scenario(name, sequence) {
        this.lines.push(`${indent(1)}Scenario: ${name}`);
        this.lines = this.lines.concat(sequence.content().map((line) => `${indent(2)}${line}`));

        return this;
    };

    finalize(callback) {

        let path = './';
        this.filename.match(/([^\\\/\.]+)(?=\/|\\)/g).forEach((dir) => {
            path = pt.join(path, dir);
            if (!fs.existsSync(path)) {
                fs.mkdirSync(path)
            }
        });

        fs.writeFile(`./${this.filename}.feature`, this.lines.join('\n'), callback);
    };

};

module.exports = Feature;
