const SnipetFile = require('../classes/snippet');
const sequences = require('../sequences/spgz');
const KPGZ_BLANK = require('../sequences/kpgz').BLANK;

module.exports = function(callback) {
    return new SnipetFile('dist/spgz')
    .domain('.source.feature')
    .comment('новый СПГЗ')
    .add({
        name: `new-spgz`,
        prefix: `new-spgz`,
        description: `Новый СПГЗ`,
        body: sequences.newSpgzSeq(sequences.BLANK_STANDALONE).content()
    })

    .comment('новый СПГЗ (с КПГЗ)')
    .add({
        name: `new-spgz-w-kpgz`,
        prefix: `new-spgz-w-kpgz`,
        description: `Новый СПГЗ(с КПГЗ)`,
        body: sequences.newSpgzWithKpgz({
            kpgz: KPGZ_BLANK,
            spgz: sequences.BLANK
        }).content()
    })

    .finalize(callback);
};
