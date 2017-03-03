const {Expression, prime, any, dig, str, exc, exp, present, replace} = require('../classes/expression');
const {
    REXP_ANYTHING,
    REXP_NUM,

    REXP_NAME_CAPTURE,
    BLOCK_TYPE_CAPTURE,
    BLOCK_NAME_CAPTURE,
    BLOCK_OPT,
    MODAL_CAPTURE,MODAL_OPT} = require('../macros/common');

module.exports = {

    //Я логинюсь под(?: (сгенерированным))? пользователем "([^"]*)"
    login: function(args) {

        let {generated, user, mode} = args;

        let groups = [
            present(
                exp(` ${replace(str('сгенерированным').asGroup(), generated).render()}`)
                    .asNonCaptureGroup()
                    .asOptional(),
                !!generated, mode
            ).render(),
            REXP_NAME_CAPTURE(user)
        ];

        return `Я логинюсь под${groups[0]} пользователем "${groups[1]}"`;

    },

    //Я разлогиниваюсь
    logout: function(args) {
        return 'Я разлогиниваюсь';
    },

    //Я перехожу к форме саморегистрации
    selfRegistration: function(args) {
        return 'Я перехожу к форме саморегистрации';
    }

};
