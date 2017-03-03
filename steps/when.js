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

    //Я перехожу на главную страницу
    home: function(args) {
        return `Я перехожу на главную страницу`;
    },

    //Я открываю раздел системы "([^"]*)"
    section: function(args) {

        let {sectionName, mode} = args;

        let groups = [
            REXP_NAME_CAPTURE(sectionName)
        ];

        return `Я открываю раздел системы "${groups[0]}"`;
    },

    //Я выбираю в меню "([^"]*)",? ?"?([^"]*)"?
    menu: function(args) {

        let {parent, child, mode} = args;

        let groups = [
            REXP_NAME_CAPTURE(parent),
            present(
                exp(`, "${REXP_NAME_CAPTURE(child)}"`)
                    .asNonCaptureGroup()
                    .asOptional(),
                !!child, mode
            ).render()
        ];

        return `Я выбираю в меню "${groups[0]}"${groups[1]}`;
    },

    //Я нажимаю на кнопку(?: (создания|редактирования|сохранения|удаления|просмотра|закрытия|выбора|подтверждения))?(?: с (текстом|заголовком|названием) "([^"]*)")?(?: в блоке (".*"))?(?: (модального окна))?
    button: function(args) {

        let {action, option, value, btype, block, modal, mode} = args;

        const BUTTON_ACTION = replace(str('создания')
                              .or('редактирования')
                              .or('сохранения')
                              .or('удаления')
                              .or('просмотра')
                              .or('закрытия')
                              .or('выбора')
                              .or('подтверждения')
                              .asGroup(), action)
                              .render();
        const BUTTON_OPTION = replace(str('текстом')
                              .or('заголовком')
                              .or('названием')
                              .asGroup(), option)
                              .render();

        let groups = [
            present(exp(` ${BUTTON_ACTION}`)
                .asNonCaptureGroup()
                .asOptional(), !!action, mode)
                .render(),
            present(exp(` c ${BUTTON_OPTION} "${REXP_NAME_CAPTURE(value)}"`)
                .asNonCaptureGroup()
                .asOptional(), !!option && !!value, mode)
                .render()
        ];

        return `Я нажимаю на кнопку${groups[0]}${groups[1]}${BLOCK_OPT(btype, block, mode)}${MODAL_OPT(modal, mode)}`;
    },

    //Я переключаюсь на вкладку "([^"]*)"(?: в блоке (".*"))?(?: (модального окна))?
    modalTab: function(args) {

        let {name, btype, block, modal, mode} = args;

        let groups = [
            REXP_NAME_CAPTURE(name)
        ];

        return `Я переключаюсь на вкладку "${groups[0]}"${BLOCK_OPT(btype, block, mode)}${MODAL_OPT(modal, mode)}`;
    },

    //Я нажимаю на ?(сгенерированную|) ссылку "([^"]*)"
    link: function(args) {

        let {generate, text, mode} = args;

        let groups = [
            present(
                exp(` ${replace(str('сгенерированную').asGroup(), generate).render()}`)
                    .asNonCaptureGroup()
                    .asOptional(),
                !!generate, mode
            ).render(),
            REXP_NAME_CAPTURE(text)
        ];

        return `Я нажимаю на${groups[0]} ссылку "${groups[1]}"`;
    },

    //Я жду (\d+) сек\.
    wait: function(args) {

        let {s, mode} = args;

        let groups = [
            replace(dig().atLeastOne().asGroup(), s).render()
        ];

        return `Я жду ${groups[0]} сек${(mode) ? '\\' : ''}.`;
    },

    //Я заполняю (фильтр|поле) "([^"]*)" (текстом|уникальным кодом|новым кодом ИНН\(ЮЛ\)|новым кодом ИНН\(ФЛ\)|сгенерированным тегом|новым кодом СНИЛС|уникальным email'ом) "([^"]*)"(?: в блоке (".*"))?(?: (модального окна))?
    input: function(args) {

        let {inputType, name, valueType, value, btype, block, modal, mode} = args;

        let groups = [
            replace(str('фильтр').or('поле').asGroup(), inputType).render(),
            REXP_NAME_CAPTURE(name),
            replace(str('текстом')
                    .or('уникальным кодом')
                    .or('новым кодом ИНН\\(ЮЛ\\)')
                    .or('новым кодом ИНН\\(ФЛ\\)')
                    .or('сгенерированным тегом')
                    .or('новым кодом СНИЛС')
                    .or('уникальным email\\\'ом')
                    .asGroup(), valueType).render(),
            REXP_NAME_CAPTURE(value)
        ];

        return `Я заполняю ${groups[0]} "${groups[1]}" ${groups[2]} "${groups[3]}"${BLOCK_OPT(btype, block, mode)}${MODAL_OPT(modal, mode)}`;
    },

    //Я выбираю опцию "([^"]*)" фильтра "([^"]*)"(?: в блоке (".*"))?(?: (модального окна))?
    multiselectFilter: function(args) {

        let {value, name, btype, block, modal, mode} = args;

        let groups = [
            REXP_NAME_CAPTURE(value),
            REXP_NAME_CAPTURE(name)
        ];

        return `Я выбираю опцию "${groups[0]}" фильтра "${groups[1]}"${BLOCK_OPT(btype, block, mode)}${MODAL_OPT(modal, mode)}`;
    },

    //Я заполняю ?(сгенерированный|) текстовый блок "([^"]*)", "([^"]*)"
    textarea: function(args) {

        let {generate, name, value, mode} = args;

        let groups = [
            present(
                exp(` ${replace(str('сгенерированный').asGroup(), generate).render()}`)
                    .asNonCaptureGroup()
                    .asOptional(),
                !!generate, mode
            ).render(),
            REXP_NAME_CAPTURE(name),
            REXP_NAME_CAPTURE(value)
        ];

        return `Я заполняю${groups[0]} текстовый блок "${groups[1]}", "${groups[2]}"`;
    },

    //Я заполняю ?(сгенерированным|) текстовый редактор ?"?([^"]*|)"?,? "([^"]*)"
    ckeditor: function(args) {

        let {generate, name, value, mode} = args;

        let groups = [
            present(
                exp(` ${replace(str('сгенерированный').asGroup(), generate).render()}`)
                    .asNonCaptureGroup()
                    .asOptional(),
                !!generate, mode
            ).render(),
            present(
                exp(` "${REXP_NAME_CAPTURE(name)}",`)
                    .asNonCaptureGroup()
                    .asOptional(),
                !!name, mode
            ).render(),
            REXP_NAME_CAPTURE(value)
        ];

        return `Я заполняю${groups[0]} текстовый редактор${groups[1]} "${groups[2]}"`;
    },

    //Я заполняю календарь "([^"]*)",? ?"?([^"]*)"?
    datepicker: function(args) {

        let {name, value, mode} = args;

        let groups = [
            REXP_NAME_CAPTURE(name),
            present(
                exp(`, "${REXP_NAME_CAPTURE(value)}"`)
                    .asNonCaptureGroup()
                    .asOptional(),
                !!value, mode
            ).render()
        ];

        return `Я заполняю календарь "${groups[0]}"${groups[1]}`;

    },

    //Я выбираю (?:(значение|сгенерированный тег) "([^"]*)" )?в (поле|фильтре) с выпадающим списком "([^"]*)"(?: в блоке (".*"))?(?: (модального окна))?
    autocomplete: function(args) {

          let {valueType, value, type, name, btype, block, modal, mode} = args;

          let groups = [
              present(
                  exp(`${replace(str('значение').or('сгенерированный тег').asGroup(), valueType).render()} "${REXP_NAME_CAPTURE(value)}" `)
                      .asNonCaptureGroup()
                      .asOptional(),
                  !!valueType && !!value, mode
              ).render(),
              replace(str('поле').or('фильтре').asGroup(), type).render(),
              REXP_NAME_CAPTURE(name)
          ];

          return `Я выбираю ${groups[0]}в ${groups[1]} с выпадающим списком "${groups[2]}"${BLOCK_OPT(btype, block, mode)}${MODAL_OPT(modal, mode)}`;
    },

    //Я выбираю(?: "([^"]*)")? из списка опций "([^"]*)"(?: в блоке (".*"))?(?: (модального окна))?
    select: function(args) {

        let {value, name, btype, block, modal, mode} = args;

        let groups = [
            present(
                exp(` "${REXP_NAME_CAPTURE(value)}"`)
                    .asNonCaptureGroup()
                    .asOptional(),
                !!value, mode
            ).render(),
            REXP_NAME_CAPTURE(name)
        ];

        return `Я выбираю${groups[0]} из списка опций "${groups[1]}"${BLOCK_OPT(btype, block, mode)}${MODAL_OPT(modal, mode)}`;
    },

    //Я кликаю по чекбоксу "([^"]+)"(?: в блоке (".*"))?(?: (модального окна))?
    checkbox: function(args) {

        let {name, btype, block, modal, mode} = args;

        let groups = [
            REXP_NAME_CAPTURE(name)
        ];

        return `Я кликаю по чекбоксу "${groups[0]}"${BLOCK_OPT(btype, block, mode)}${MODAL_OPT(modal, mode)}`;
    },

    //Я выбираю радиокнопку "([^"]*)", "([^"]*)"
    radio: function(args) {

        let {name, value, mode} = args;

        let groups = [
            REXP_NAME_CAPTURE(name),
            REXP_NAME_CAPTURE(value)
        ];

        return `Я выбираю радиокнопку "${groups[0]}", "${groups[1]}"`;
    },

    //Я загружаю файл "([^"]*)" в поле "([^"]*)"(?: в блоке (".*"))?(?: (модального окна))?
    file: function(args) {

        let {value, name, btype, block, modal, mode} = args;

        let groups = [
            REXP_NAME_CAPTURE(value),
            REXP_NAME_CAPTURE(name)
        ];

        return `Я загружаю файл "${groups[0]}" в поле "${groups[1]}"${BLOCK_OPT(btype, block, mode)}${MODAL_OPT(modal, mode)}`;
    },

    //Я скроллю (наверх|вниз)
    scrollDirection: function(args) {

        let {direction, mode} = args;

        let groups = [
            replace(str('наверх').or('вниз').asGroup(), direction).render()
        ];

        return `Я скроллю ${groups[0]}`;
    },

    //Я скроллю до блока "([^"]*)"
    scrollBlock: function(args) {

        let {name, mode} = args;

        let groups = [
            REXP_NAME_CAPTURE(name)
        ];

        return `Я скроллю до блока "${groups[0]}"`;
    },

    //Я выбираю элемент таблицы под номером (\d+)(?: в (поле|блоке) (".*"))?(?: (модального окна))?
    clickTableTd: function(args) {

        let {number, btype, block, modal, mode} = args;

        let groups = [
            replace(dig().atLeastOne().asGroup(), number).render()
        ];

        return `Я выбираю элемент таблицы под номером ${groups[0]}${BLOCK_OPT(btype, block, mode)}${MODAL_OPT(modal, mode)}`;
    }

};
