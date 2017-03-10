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

const common = require('./common').render;


function new_сharacteristic(args) {
    return new Sequence()
        .Sequence(common.goto_characteristics)
        .Comment('создание характеристики')
        .Then(button.create())
        .Then(input.field().withName('Наименование характеристики').withTag(args.name))

        .If(true === !!args.type)
            .And(autocomplete.field().withName('Признак').withText(args.type))
        .End()

        .If(false === !!args.type)
            .And(autocomplete.field().withName('Признак'))
        .End()

        .Then(scrollDirection.up())
        .Then(button.save())
        .Then(checkTitle.withText('Информация о характеристике'));
};

module.exports = {

    methods: {
        new: new_сharacteristic
    },

    render: {
        __new_сharacteristic_blank: 'создание новой характеристики',
        new_сharacteristic_blank: new_сharacteristic({
            name: '[string]',
            type: '[string]'
        })
    }

};
