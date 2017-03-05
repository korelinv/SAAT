const SnipetFile = require('../classes/snippet');
const sequences = require('../sequences/characteristic');

module.exports = function(callback) {
    return new SnipetFile('dist/characteristic')
    .domain('.source.feature')
    .comment('создаем характеристику')
    .add({
        name: `new-characteristic`,
        prefix: `new-characteristic`,
        description: `Новая характеристика`,
        body: sequences.new_blank.content()
    })

    .finalize(callback);
};
