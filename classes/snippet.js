const fs = require('fs');
const pt = require('path');

const indent = (t) => ('\t').repeat(t*2);

function snippet(args) {
    let {name, prefix, description, body} = args;
    if (Array.isArray(body)) {
        body =`"""\n${indent(3)}${body.join('\n' + indent(3))}\n${indent(2)}"""`;
    } else {
        body = `'${body}'`;
    }

    return `${indent(1)}'${name}':\n${indent(2)}'prefix': '${prefix}'\n${indent(2)}'description': '${description}'\n${indent(2)}'body':${body}`;
};

class SnipetFile {

    constructor(filename) {
        this.filename = filename;
        this.content = [];
    };

    domain(domain) {
        this.content.push(`'${domain}':`);

        return this;
    }

    add(text) {
        this.content.push(snippet(text));

        return this;
    };

    comment(text) {

        let final;

        if (Array.isArray(text)) {
            final = text.map((value) => `${indent(1)}#${value}`).join('\n');
        } else {
            final = `${indent(1)}#${text}`;
        }

        this.content.push(final);

        return this;
    }

    finalize(callback) {

        let path = './';
        this.filename.match(/([^\\\/\.]+)(?=\/|\\)/g).forEach((dir) => {
            path = pt.join(path, dir);
            if (!fs.existsSync(path)) {
                fs.mkdirSync(path)
            }
        });

        fs.writeFile(`./${this.filename}.cson`, this.content.join('\n\n'), callback);
    };

};

module.exports = SnipetFile;
