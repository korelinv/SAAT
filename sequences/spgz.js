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

const common = require('./common').methods;

function newSpgz(args) {
    return new Sequence()
        .Comment('создание СПГЗ')
        .Sequence(common.goto_spgz)
        .Then(button.create())
        .And(input.field().withName('Наименование СПГЗ').withTag('Тестовый СПГЗ'))

        .If(false === !!args.kpgz)
            .And(autocomplete.field().withName('КПГЗ'))
        .End()

        .If(true === !!args.kpgz)
            .And(autocomplete.field().withName('КПГЗ').withGenereatedtag(args.kpgz))
        .End()

        .If(false === !!args.okpd)
            .And(autocomplete.field().withName('Код ОКПД'))
        .End()

        .If(true === !!args.okpd)
            .And(autocomplete.field().withName('Код ОКПД').withText(args.okpd))
        .End()

        .If(false === !!args.okpd2)
            .And(autocomplete.field().withName('Код ОКПД-2'))
        .End()

        .If(false === !!args.okpd2)
            .And(autocomplete.field().withName('Код ОКПД-2').withText(args.okpd2))
        .End()

        .And(autocomplete.field().withName('Единицы измерения').withText('Полугодие'))
        .And(radio.withName('Признак стандартизированной позиции').withValue('Нет'))
        .And(radio.withName('Признак возможности определения поставщика путем проведения конкурса с ограниченным участием').withValue('Нет'))
        .And(radio.withName('Признак применимости критерия жизненного цикла (в соответствии с частью 3 статьи 32 44-ФЗ)').withValue('Нет'))
        .And(radio.withName('Признак результата интеллектуальной деятельности либо НИОКР (в соответствии с частью 6 статьи 32 44-ФЗ)').withValue('Нет'))
        .And(radio.withName('Признак создания произведения искусства (в соответствии с частью 6 статьи 32 44-ФЗ)').withValue('Нет'))
        .And(radio.withName('Признак возможности определения поставщика путем проведения двухэтапного конкурса').withValue('Нет'))
        .And(radio.withName('Признак возможности определения поставщика путем проведения запроса предложений').withValue('Нет'))
        .And(radio.withName('Преподавательские услуги физическим лицом').withValue('Нет'))
        .And(radio.withName('Услуги экскурсоводов физическим лицом').withValue('Нет'))
        .And(radio.withName('Признак возможности проведения закупки на единицу продукции').withValue('Нет'))
        .And(radio.withName('Требует нормирования').withValue('Нет'))
        .Then(scrollDirection.up())
        .And(button.save())
        .Then(checkTitle.withText('Информация о СПГЗ'));
};

module.exports = {

    methosd: {
        new: newSpgz
    },

    render: {
        __new_spgz_blank: 'создание нового СПГЗ',
        new_spgz_blank: newSpgz({
            kpgz: '[string]',
            okpd: '[string]',
            okpd2: '[string]'
        })
    }
};
