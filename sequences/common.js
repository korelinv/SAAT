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
    }),

    goto_expert: gotoSection({
        name: 'НСИ',
        main: 'Участники',
        secondary: 'Эксперты',
        title: 'Список экспертов'
    }),

    goto_participant_regulator: gotoSection({
        name: 'НСИ',
        main: 'Участники',
        secondary: 'Регулирующие органы исполнительной власти',
        title: 'Список регулирующих органов исполнительной власти'
    }),

    goto_controller: gotoSection({
        name: 'НСИ',
        main: 'Участники',
        secondary: 'Контрольные органы в сфере закупок',
        title: 'Список контрольных органов в сфере закупок'
    }),

    goto_special: gotoSection({
        name: 'НСИ',
        main: 'Участники',
        secondary: 'Специализированные организации',
        title: 'Список специализированных организаций'
    }),

    goto_authority: gotoSection({
        name: 'НСИ',
        main: 'Участники',
        secondary: 'Уполномоченные органы или учреждения',
        title: 'Список уполномоченных органов или учреждений'
    }),

    goto_supplier: gotoSection({
        name: 'НСИ',
        main: 'Участники',
        secondary: 'Поставщики',
        title: 'Список поставщиков'
    }),

    goto_amortization_groupd: gotoSection({
        name: 'НСИ',
        main: 'Справочники',
        secondary: 'Амортизационные группы',
        title: 'Список амортизационных групп'
    }),

    goto_trading_paltform: gotoSection({
        name: 'НСИ',
        main: 'Справочники',
        secondary: 'Торговая площадка',
        title: 'Список торговых площадок'
    }),

    goto_pereodicity: gotoSection({
        name: 'НСИ',
        main: 'Справочники',
        secondary: 'Периодичность поставки',
        title: 'Список периодичностей поставки'
    }),

    goto_interruption: gotoSection({
        name: 'НСИ',
        main: 'Справочники',
        secondary: 'Нарушения',
        title: 'Список нарушений'
    }),

    goto_change_reason: gotoSection({
        name: 'НСИ',
        main: 'Справочники',
        secondary: 'Причины изменения планов',
        title: 'Список причин изменения планов'
    }),

    goto_document_rubricator: gotoSection({
        name: 'НСИ',
        main: 'Справочники',
        secondary: 'Рубрикатор НПСИ',
        title: 'Список Рубрикатор НПСИ'
    }),

    goto_reference_document: gotoSection({
        name: 'НСИ',
        main: 'Справочники',
        secondary: 'Справочник документов НПСИ',
        title: 'Список НПСИ'
    }),

    goto_external_resource: gotoSection({
        name: 'НСИ',
        main: 'Справочники',
        secondary: 'Справочник внешних ресурсов НПСИ',
        title: 'Список внешних ресурсов'
    }),

    goto_position: gotoSection({
        name: 'НСИ',
        main: 'Справочники',
        secondary: 'Справочник должностей',
        title: 'Список должностей'
    })

};
