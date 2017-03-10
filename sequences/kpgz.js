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
const characteristic = require('./characteristic').methods;


function new_kpgz(args) {
    return new Sequence()
        .Comment('создание КПГЗ')
        .Sequence(common.goto_kpgz)
        .Then(button.create())

        .And(input.field().withName('Наименование КПГЗ').withTag(args.name))

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

        .And('And Я сохраняю новый КПГЗ')
        .Then(checkTitle.withText('Информация о КПГЗ'));
};

function add_characteristic(args) {
    return new Sequence()
        .Comment('добавление характеристики')
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

    methods: {
        new: new_kpgz,
        add_characteristic: add_characteristic
    },

    render: {

        __new_blank:'создание нового КПГЗ',
        new_kpgz_blank: new_kpgz({
            name: '[string]',
            parent: '[string]',
            okpd: '[string]',
            okpd2: '[string]'
        }),

        __add_characteristic_blank:'добавление характеристики в КПГЗ',
        add_characteristic_blank: add_characteristic({
            name: '[string]',
            type: '[string]'
        })
    }
};
