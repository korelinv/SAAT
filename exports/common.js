const SnipetFile = require('../classes/snippet');
const sequences = require('../sequences/common');

module.exports = function(callback) {
    return new SnipetFile('dist/common')
    .domain('.source.feature')
    .comment('переход к разделу')
    .add({
        name: 'goto',
        prefix: 'goto',
        description: 'Переход к разделу',
        body: sequences.goto_blank.content()
    })

    .comment('переход к разделу КПГЗ')
    .add({
        name: 'goto-kpgz',
        prefix: 'goto-kpgz',
        description: 'Переход к разделу КПГЗ',
        body: sequences.goto_blank.content()
    })

    .comment('переход к разделу СПГЗ')
    .add({
        name: 'goto-spgz',
        prefix: 'goto-spgz',
        description: 'Переход к разделу СПГЗ',
        body: sequences.goto_blank.content()
    })

    .comment('переход к разделу Характеристики')
    .add({
        name: 'goto-characteristics',
        prefix: 'goto-characteristics',
        description: 'Переход к разделу Характеристики',
        body: sequences.goto_blank.content()
    })

    .comment('переход к разделу ГРБС')
    .add({
        name: 'goto-grbs',
        prefix: 'goto-grbs',
        description: 'Переход к разделу ГРБС',
        body: sequences.goto_blank.content()
    })

    .finalize(callback);
};
