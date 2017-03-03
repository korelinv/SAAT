const Sequence = require('../classes/sequence');
const {login,
       logout,
       selfRegistration,
       checkTitleHtml,
       checkTitle,
       checkCountElementsTable,
       waitUntilLoaded,
       checkRadioValue,
       input,
       section,
       home,
       menu,
       button,
       modalTab,
       link,
       wait,
       multiselectFilter,
       textarea,
       ckeditor,
       datapicker,
       autocomplete,
       select,
       checkbox,
       radio,
       file,
       scrollDirection,
       scrollBlock,
       clickTableTd} = require('../steps/wrappers');

const GOTO_SECTION_BLANK = {
    name: '[string]',
    main: '[string]',
    secondary: '[string]',
    title: '[string]',
};

let gotoSection = (arg) => new Sequence()
    .comment(`переход к разделу "${arg.name}", "${arg.main}"${(!!arg.secondary) ? `, "${arg.secondary}"` : ''}`)
    .then(section.withName(arg.name))
    .then((!!arg.secondary) ? menu.main(arg.main).secondary(arg.secondary) : menu.main(arg.main))
    .then(checkTitle.withText(arg.title));

module.exports = {
    gotoSection: gotoSection,
    gotoKpgz: gotoSection({
        name: 'НСИ',
        main: 'Справочник КПГЗ / СПГЗ',
        secondary: 'КПГЗ',
        title: 'Список КПГЗ'
    }),
    gotoSpgz: gotoSection({
        name: 'НСИ',
        main: 'Справочник КПГЗ / СПГЗ',
        secondary: 'CПГЗ',
        title: 'Список СПГЗ'
    }),
    gotoCharacteristics: gotoSection({
        name: 'НСИ',
        main: 'Справочник КПГЗ / СПГЗ',
        secondary: 'Характеристики',
        title: 'Список характеристик'
    }),
    GOTO_SECTION_BLANK: GOTO_SECTION_BLANK
};
