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


function goto_section(arg){
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

    methods: {
        goto: goto_section
    },

    render: {

        __goto_blank: 'переход к разделу',
        goto_blank: goto_section({
            name: '[string]',
            main: '[string]',
            secondary: '[string]',
            title: '[string]'
        }),

        __goto_kpgz: 'переход к разделу КПГЗ',
        goto_kpgz: goto_section({
            name: 'НСИ',
            main: 'Справочник КПГЗ / СПГЗ',
            secondary: 'КПГЗ',
            title: 'Список КПГЗ'
        }),

        __goto_spgz: 'переход к разделу CПГЗ',
        goto_spgz: goto_section({
            name: 'НСИ',
            main: 'Справочник КПГЗ / СПГЗ',
            secondary: 'CПГЗ',
            title: 'Список СПГЗ'
        }),

        __goto_characteristics: 'переход к разделу Характеристики',
        goto_characteristics: goto_section({
            name: 'НСИ',
            main: 'Справочник КПГЗ / СПГЗ',
            secondary: 'Характеристики',
            title: 'Список характеристик'
        }),

        __goto_grbs: 'переход к разделу ГРБС',
        goto_grbs: goto_section({
            name: 'НСИ',
            main: 'Участники',
            secondary: 'ГРБС',
            title: 'Список ГРБС'
        }),

        __goto_expert: 'переход к разделу Эксперты',
        goto_expert: goto_section({
            name: 'НСИ',
            main: 'Участники',
            secondary: 'Эксперты',
            title: 'Список экспертов'
        }),

        __goto_participant_regulator: 'переход к разделу Регулирующие органы исполнительной власти',
        goto_participant_regulator: goto_section({
            name: 'НСИ',
            main: 'Участники',
            secondary: 'Регулирующие органы исполнительной власти',
            title: 'Список регулирующих органов исполнительной власти'
        }),

        __goto_controller: 'переход к разделу Контрольные органы в сфере закупок',
        goto_controller: goto_section({
            name: 'НСИ',
            main: 'Участники',
            secondary: 'Контрольные органы в сфере закупок',
            title: 'Список контрольных органов в сфере закупок'
        }),

        __goto_special: 'переход к разделу Специализированные организации',
        goto_special: goto_section({
            name: 'НСИ',
            main: 'Участники',
            secondary: 'Специализированные организации',
            title: 'Список специализированных организаций'
        }),

        __goto_authority: 'переход к разделу Уполномоченные органы или учреждения',
        goto_authority: goto_section({
            name: 'НСИ',
            main: 'Участники',
            secondary: 'Уполномоченные органы или учреждения',
            title: 'Список уполномоченных органов или учреждений'
        }),

        __goto_supplier: 'переход к разделу Поставщики',
        goto_supplier: goto_section({
            name: 'НСИ',
            main: 'Участники',
            secondary: 'Поставщики',
            title: 'Список поставщиков'
        }),

        __goto_amortization_groupd: 'переход к разделу Амортизационные группы',
        goto_amortization_groupd: goto_section({
            name: 'НСИ',
            main: 'Справочники',
            secondary: 'Амортизационные группы',
            title: 'Список амортизационных групп'
        }),

        __goto_trading_paltform: 'переход к разделу Торговая площадка',
        goto_trading_paltform: goto_section({
            name: 'НСИ',
            main: 'Справочники',
            secondary: 'Торговая площадка',
            title: 'Список торговых площадок'
        }),

        __goto_pereodicity: 'переход к разделу Периодичность поставки',
        goto_pereodicity: goto_section({
            name: 'НСИ',
            main: 'Справочники',
            secondary: 'Периодичность поставки',
            title: 'Список периодичностей поставки'
        }),

        __goto_interruption: 'переход к разделу Нарушения',
        goto_interruption: goto_section({
            name: 'НСИ',
            main: 'Справочники',
            secondary: 'Нарушения',
            title: 'Список нарушений'
        }),

        __goto_change_reason: 'переход к разделу Причины изменения планов',
        goto_change_reason: goto_section({
            name: 'НСИ',
            main: 'Справочники',
            secondary: 'Причины изменения планов',
            title: 'Список причин изменения планов'
        }),

        __goto_document_rubricator: 'переход к разделу Рубрикатор НПСИ',
        goto_document_rubricator: goto_section({
            name: 'НСИ',
            main: 'Справочники',
            secondary: 'Рубрикатор НПСИ',
            title: 'Список Рубрикатор НПСИ'
        }),

        __goto_reference_document: 'переход к разделу Справочник документов НПСИ',
        goto_reference_document: goto_section({
            name: 'НСИ',
            main: 'Справочники',
            secondary: 'Справочник документов НПСИ',
            title: 'Список НПСИ'
        }),

        __goto_external_resource: 'переход к разделу Справочник внешних ресурсов НПСИ',
        goto_external_resource: goto_section({
            name: 'НСИ',
            main: 'Справочники',
            secondary: 'Справочник внешних ресурсов НПСИ',
            title: 'Список внешних ресурсов'
        }),

        __goto_position: 'переход к разделу Справочник должностей',
        goto_position: goto_section({
            name: 'НСИ',
            main: 'Справочники',
            secondary: 'Справочник должностей',
            title: 'Список должностей'
        }),

        __goto_cost_rate: 'переход к разделу Нормы затрат',
        goto_cost_rate: goto_section({
            name: 'Нормирование',
            main: 'Нормирование',
            secondary: 'Нормы затрат',
            title: 'Список'
        }),

        __goto_rationing_parameters: 'переход к разделу Параметры нормирования',
        goto_rationing_parameters: goto_section({
            name: 'Нормирование',
            main: 'Нормирование',
            secondary: 'Параметры нормирования',
            title: 'Список'
        }),

        __goto_requirement_ratio: 'переход к разделу Коэффициенты потребности',
        goto_requirement_ratio: goto_section({
            name: 'Нормирование',
            main: 'Нормирование',
            secondary: 'Коэффициенты потребности',
            title: 'Список коэффициентов потребности'
        })

    }

};
