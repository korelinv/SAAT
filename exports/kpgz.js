const SnipetFile = require('../classes/snippet');
const sequences = require('../sequences/kpgz');

module.exports = function(callback) {
    return new SnipetFile('dist/kpgz')
    .domain('.source.feature')
    .comment('новый КПГЗ')
    .add({
        name: `new-kpgz`,
        prefix: `new-kpgz`,
        description: `Новый КПГЗ`,
        body: sequences.new_blank.content()
    })

    .comment('добавить характеристику к КПГЗ')
    .add({
        name: `kpgz-add-characteristic`,
        prefix: `kpgz-add-characteristic`,
        description: `Добавить характеристику к КПГЗ`,
        body: sequences.add_characteristic_blank.content()
    })

    .finalize(callback);
};
