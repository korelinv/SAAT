const SnipetFile = require('../classes/snippet');
const sequences = require('../sequences/participant');

module.exports = function(callback) {
    return new SnipetFile('dist/participant')
    .domain('.source.feature')
    .comment('визард участинка (тип 1)')
    .add({
        name: 'participant-wizard-type1',
        prefix: 'participant-wizard-type1',
        description: 'Визард участинка (тип 1)',
        body: sequences.wizard1Seq(sequences.WIZARD1_BLANK).content()
    })

    .comment('визард участинка (тип 2)')
    .add({
        name: 'participant-wizard-type2',
        prefix: 'participant-wizard-type2',
        description: 'Визард участинка (тип 2)',
        body: sequences.wizard2Seq(sequences.WIZARD2_BLANK).content()
    })

    .finalize(callback);
}
