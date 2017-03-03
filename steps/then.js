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

    //Я ожидаю, что название раздела "([^"]*)"
    checkTitleHtml:  function(args) {

        let {text, mode} = args;
        let groups = [
            REXP_NAME_CAPTURE(text)
        ];

        return `Я ожидаю, что название раздела "${groups[0]}"`;
    },

    //Я ожидаю, что заголовок содержит "([^"]*)"
    checkTitle:  function(args) {

        let {text, mode} = args;
        let groups = [
            REXP_NAME_CAPTURE(text)
        ];

        return `Я ожидаю, что заголовок содержит "${groups[0]}"`;
    },

    //Я ожидаю, что в списке ?"?([^"]*)"? будет элементов = (\d*)
    checkCountElementsTable:  function(args) {

        let {parent, count, mode} = args;
        let groups = [
            present(
                exp(` "${REXP_NAME_CAPTURE(parent)}"`)
                  .asNonCaptureGroup()
                  .asOptional(),
                !!parent,  mode
            ).render(),
            replace(dig().noneOrMore().asGroup(), count).render()
        ];

        return `Я ожидаю, что в списке${groups[0]} будет элементов = ${groups[1]}`;
    },

    //Я ожидаю окончания загрузки ?"?([^"]*)"?
    waitUntilLoaded:  function(args) {

        let {timeout, mode} = args;
        let groups = [
            present(
                exp(` "${REXP_NAME_CAPTURE(timeout)}"`)
                  .asNonCaptureGroup()
                  .asOptional(),
                !!timeout,  mode
            ).render()
        ];

        return `Я ожидаю окончания загрузки${groups[0]}`;
    },

    //Я ожидаю что радиокнопка "([^"]*)" установлена в положении "([^"]*)"
    checkRadioValue: function(args) {

        let {name, value, mode} = args;
        let groups = [
            REXP_NAME_CAPTURE(name),
            REXP_NAME_CAPTURE(value)
        ];

        return `Я ожидаю что радиокнопка "${groups[0]}" установлена в положении "${groups[1]}"`;
    },

};
