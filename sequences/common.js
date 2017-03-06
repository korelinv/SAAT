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


function gotoSection(arg){
    return new Sequence()
        .Comment(`переход к разделу "${arg.name}", "${arg.main}"${(!!arg.secondary) ? `, "${arg.secondary}"` : ''}`)
        .Then(section.withName(arg.name))

        .If(true === !!arg.secondary)
        .End()
            .Then(menu.main(arg.main).secondary(arg.secondary))
        .If(false === !!arg.secondary)
            .Then(menu.main(arg.main))
        .End()

        .Then(checkTitle.withText(arg.title));
};


module.exports = {
    goto: gotoSection,

    goto_blank: gotoSection({
        name: '[string]',
        main: '[string]',
        secondary: '[string]',
        title: '[string]'
    }),

    goto_kpgz: gotoSection({
        name: 'НСИ',
        main: 'Справочник КПГЗ / СПГЗ',
        secondary: 'КПГЗ',
        title: 'Список КПГЗ'
    }),

    goto_spgz: gotoSection({
        name: 'НСИ',
        main: 'Справочник КПГЗ / СПГЗ',
        secondary: 'CПГЗ',
        title: 'Список СПГЗ'
    }),
    
    goto_characteristics: gotoSection({
        name: 'НСИ',
        main: 'Справочник КПГЗ / СПГЗ',
        secondary: 'Характеристики',
        title: 'Список характеристик'
    }),

    goto_grbs: gotoSection({
        name: 'НСИ',
        main: 'Участники',
        secondary: 'ГРБС',
        title: 'Список ГРБС'
    })
};
