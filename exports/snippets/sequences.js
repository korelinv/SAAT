const SnipetFile = require('../../classes/snippet');
const Sequence = require('../../classes/sequence');

const renders = [
    '../../sequences/common',
    '../../sequences/characteristic',
    '../../sequences/kpgz',
    '../../sequences/normalization',
    '../../sequences/participant',
    '../../sequences/reference',
    '../../sequences/spgz',
    '../../sequences/user',
    '../../sequences/comission'
];

/**
* TODO: promise list
*/
module.exports = function(callback) {

    renders.forEach((file) => {

        let render = require(file).render;
        let filename = `dist/snippets/${file.match(/\/([^\/]*)$/)[1]}`;


        let snipetFile = new SnipetFile(filename).domain('.source.feature');

        for (let sequence in render) {

            if (render[sequence] instanceof Sequence) {

                let name = sequence.replace(/_/g,'-');

                snipetFile.add({
                    name: name,
                    prefix: name,
                    description: render[`__${sequence}`],
                    body: render[sequence].content()
                });

            }

        };

        snipetFile.finalize();

    });

    callback();

};
