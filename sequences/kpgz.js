//const SnipetFile = require('../classes/snippet');
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

//const kpgz = new SnipetFile('kpgz');

const BLANK = {
    name: '[string]',
    parent: '[string]',
    okpd: '[string]',
    okpd2: '[string]'
};
const CHARACTERISTIC_BLANK = {
    name: '[string]',
    type: '[string]'
};

let newKpgzSeq = (args) => new Sequence()
    .append(common.gotoKpgz)
    .comment('создаем КПГЗ')
    .then(button.create())
    .and(input.field().withName('Наименование КПГЗ').withTag((!!args.name) ? args.name : 'ТЕСТОВЫЙ КПГЗ'))

    .ifelse(!!args.parent,
            (seq) => seq
                .and(autocomplete.field().withName('Вышестоящий КПГЗ').withGenereatedtag(args.parent))
                .and(autocomplete.field().withName('Код ОКПД').withText(args.okpd))
                .and(autocomplete.field().withName('Код ОКПД-2').withText(args.okpd2)),
            (seq) => seq
                .and(autocomplete.field().withName('Вышестоящий КПГЗ'))
                .and(autocomplete.field().withName('Код ОКПД'))
                .and(autocomplete.field().withName('Код ОКПД-2')))

    .comment('And Я сохраняю новый КПГЗ')
    .then(checkTitle.withText('Информация о КПГЗ'));

let addCharacteristicSeq = (args) => new Sequence()
    .then(scrollBlock.withName('Характеристики'))
    .then(button.create().inBlock('Характеристики'))
    .ifelse(!!args.name,
            (seq) => seq
                .then(autocomplete.field().withName('Характеристика').withGenereatedtag(args.name)),
            (seq) => seq
                .then(autocomplete.field().withName('Характеристика')))
    .ifelse(!!args.type,
            (seq) => seq
                .and(autocomplete.field().withName('Вид характеристики').withText(args.type)),
            (seq) => seq
                .and(autocomplete.field().withName('Вид характеристики')))
    .then(button.withName('Сохранение Создание характеристик').inBlock('Характеристики'))
    .then(checkCountElementsTable.withName('Характеристики').count(1))

/*
kpgz.domain('.source.feature')
    .comment('новый КПГЗ')
    .add({
        name: `new-kpgz`,
        prefix: `new-kpgz`,
        description: `Новый КПГЗ`,
        body: newKpgzSeq(BLANK).content()
    })

    .comment('добавить характеристику к КПГЗ')
    .add({
        name: `kpgz-add-characteristic`,
        prefix: `kpgz-add-characteristic`,
        description: `Добавить характеристику к КПГЗ`,
        body: addCharacteristicSeq(CHARACTERISTIC_BLANK).content()
    })

    .finalize();
*/

module.exports = {
    newKpgzSeq: newKpgzSeq,
    addCharacteristicSeq: addCharacteristicSeq,
    BLANK: BLANK,
    CHARACTERISTIC_BLANK: CHARACTERISTIC_BLANK
};
