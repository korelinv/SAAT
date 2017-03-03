const SnipetFile = require('../classes/snippet');
const sequences = require('../sequences/common');

module.exports = function(callback) {
    return new SnipetFile('dist/common')
    .domain('.source.feature')
    .comment('переход к разделу')
    .add({
        name: 'goto-section',
        prefix: 'goto-section',
        description: 'Переход к разделу',
        body: sequences.gotoSection(sequences.GOTO_SECTION_BLANK).content()
    })

    .finalize(callback);
};
