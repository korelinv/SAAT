const SnipetFile = require('../classes/snippet');
const sequences = require('../sequences/user');

module.exports = function(callback) {
    return new SnipetFile('dist/user')
    .domain('.source.feature')
    .comment('новый пользователь')
    .add({
        name: `new-user`,
        prefix: `new-user`,
        description: `Новый пользователь`,
        body: sequences.newUserSeq.content()
    })

    .comment('новый пользователь (саморегистрация)')
    .add({
        name: `new-user-selfregister`,
        prefix: `new-user-selfregister`,
        description: `Новый пользователь(саморегистрация)`,
        body: sequences.newSelfRegUserSeq.content()
    })

    .comment('новая заявка на изменение пользователя(существующий пользователь)')
    .add({
        name: `new-user-update-current`,
        prefix: `new-user-update-current`,
        description: `Новая заявка на изменение пользователя(существующий пользователь)`,
        body: sequences.newUserUpdateSeq.content()
    })

    .comment('новая заявка на изменение пользователя(новый пользователь)')
    .add({
        name: `new-user-update-new`,
        prefix: `new-user-update-new`,
        description: `Новая заявка на изменение пользователя(новый пользователь)`,
        body: sequences.newUserUpdateNewSeq.content()
    })

    .finalize(callback);
};
