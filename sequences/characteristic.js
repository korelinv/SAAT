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


function newCharacteristic(args) {
    return new Sequence()
        .Sequence(common.gotoCharacteristics)
        .Comment('создаем характеристику')
        .Then(button.create())
        .Then(input.field().withName('Наименование характеристики').withTag('ТЕСТОВАЯ ХАРАКТЕРИСТИКА'))

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
    new: newCharacteristic,
    
    new_blank: newCharacteristic({
        type: '[string]'
    })
};
