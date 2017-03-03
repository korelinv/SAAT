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

const BLANK = {
    type: '[string]'
};

let newCharacteristicSeq = (args) => new Sequence()
    .append(common.gotoCharacteristics)
    .comment('создаем характеристику')
    .then(button.create())
    .then(input.field().withName('Наименование характеристики').withTag('ТЕСТОВАЯ ХАРАКТЕРИСТИКА'))
    .ifelse(!!args.type,
            (seq) => seq
                .and(autocomplete.field().withName('Признак').withText(args.type)),
            (seq) => seq
                .and(autocomplete.field().withName('Признак')))
    .then(scrollDirection.up())
    .then(button.save())
    .then(checkTitle.withText('Информация о характеристике'));

module.exports = {
    newCharacteristicSeq: newCharacteristicSeq,
    BLANK: BLANK
};
