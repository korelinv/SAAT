const SnipetFile = require('../classes/snippet');
const sequences = require('../sequences/spgz');

module.exports = function(callback) {
    return new SnipetFile('dist/spgz')
    .domain('.source.feature')
    .comment('новый СПГЗ')
    .add({
        name: `new-spgz`,
        prefix: `new-spgz`,
        description: `Новый СПГЗ`,
        body: sequences.new_blank.content()
    })

    .finalize(callback);
};
