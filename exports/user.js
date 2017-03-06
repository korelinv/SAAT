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
        body: sequences.new_user_blank.content()
    })

    .comment('новый пользователь (саморегистрация)')
    .add({
        name: `new-user-selfregister`,
        prefix: `new-user-selfregister`,
        description: `Новый пользователь(саморегистрация)`,
        body: sequences.new_create_request_blank.content()
    })

    .comment('новая заявка на изменение пользователя')
    .add({
        name: `new-user-update-current`,
        prefix: `new-user-update-current`,
        description: `Новая заявка на изменение пользователя`,
        body: sequences.new_update_request_blank.content()
    })

    .finalize(callback);
};
