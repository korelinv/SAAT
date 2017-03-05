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

const common = require('./common');
const characteristic = require('./characteristic');


function newKpgzSeq(args) {
    return new Sequence()
        .Sequence(common.gotoKpgz)
        .Comment('создаем КПГЗ')
        .Then(button.create())

        .And(input.field().withName('Наименование КПГЗ').withTag((!!args.name) ? args.name : 'ТЕСТОВЫЙ КПГЗ'))

        .If(true === !!args.parent)
            .And(autocomplete.field().withName('Вышестоящий КПГЗ').withGenereatedtag(args.parent))
            .And(autocomplete.field().withName('Код ОКПД').withText(args.okpd))
            .And(autocomplete.field().withName('Код ОКПД-2').withText(args.okpd2))
        .End()

        .If(false === !!args.parent)
            .And(autocomplete.field().withName('Вышестоящий КПГЗ'))
            .And(autocomplete.field().withName('Код ОКПД'))
            .And(autocomplete.field().withName('Код ОКПД-2'))
        .End()

        .Comment('And Я сохраняю новый КПГЗ')
        .Then(checkTitle.withText('Информация о КПГЗ'));
};

function addCharacteristicSeq(args) {
    return new Sequence()
        .Then(scrollBlock.withName('Характеристики'))
        .Then(button.create().inBlock('Характеристики'))

        .If(true === !!args.name)
            .Then(autocomplete.field().withName('Характеристика').withGenereatedtag(args.name))
        .End()

        .If(false === !!args.name)
            .Then(autocomplete.field().withName('Характеристика'))
        .End()

        .If(true === !!args.type)
            .And(autocomplete.field().withName('Вид характеристики').withText(args.type))
        .End()

        .If(false === !!args.type)
            .And(autocomplete.field().withName('Вид характеристики'))
        .End()

        .Then(button.withName('Сохранение Создание характеристик').inBlock('Характеристики'))
        .Then(checkCountElementsTable.withName('Характеристики').count(1));
};


module.exports = {
    new: newKpgzSeq,
    add_characteristic: addCharacteristicSeq,

    new_blank: newKpgzSeq({
        name: '[string]',
        parent: '[string]',
        okpd: '[string]',
        okpd2: '[string]'
    }),
    add_characteristic_blank: addCharacteristicSeq({
        name: '[string]',
        type: '[string]'
    })
};
