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
const kpgzSeq = require('./kpgz');

//const spgz = new SnipetFile('spgz');

const BLANK = {
    standalone: false,
    kpgz: '[string]',
    okpd: '[string]',
    okpd2: '[string]'
};
const BLANK_STANDALONE = {
    standalone: true,
    kpgz: '[string]',
    okpd: '[string]',
    okpd2: '[string]'
};

let newSpgzSeq = (args) => new Sequence()
    .append(common.gotoSpgz)
    .comment('создаем СПГЗ')
    .then(button.create())
    .and(input.field().withName('Наименование СПГЗ').withTag('Тестовый СПГЗ'))
    .ifelse(args.standalone,
            (seq) => seq
                .and(autocomplete.field().withName('КПГЗ'))
                .and(autocomplete.field().withName('Код ОКПД'))
                .and(autocomplete.field().withName('Код ОКПД-2')),
            (seq) => seq
                .and(autocomplete.field().withName('КПГЗ').withGenereatedtag(args.kpgz))
                .ifelse(!!args.okpd,
                        (seq) => seq
                            .and(autocomplete.field().withName('Код ОКПД').withText(args.okpd)))
                .and(autocomplete.field().withName('Код ОКПД-2').withText(args.okpd2)))

    .and(autocomplete.field().withName('Единицы измерения').withText('Полугодие'))
    .and(radio.withName('Признак стандартизированной позиции').withValue('Нет'))
    .and(radio.withName('Признак возможности определения поставщика путем проведения конкурса с ограниченным участием').withValue('Нет'))
    .and(radio.withName('Признак применимости критерия жизненного цикла (в соответствии с частью 3 статьи 32 44-ФЗ)').withValue('Нет'))
    .and(radio.withName('Признак результата интеллектуальной деятельности либо НИОКР (в соответствии с частью 6 статьи 32 44-ФЗ)').withValue('Нет'))
    .and(radio.withName('Признак создания произведения искусства (в соответствии с частью 6 статьи 32 44-ФЗ)').withValue('Нет'))
    .and(radio.withName('Признак возможности определения поставщика путем проведения двухэтапного конкурса').withValue('Нет'))
    .and(radio.withName('Признак возможности определения поставщика путем проведения запроса предложений').withValue('Нет'))
    .and(radio.withName('Преподавательские услуги физическим лицом').withValue('Нет'))
    .and(radio.withName('Услуги экскурсоводов физическим лицом').withValue('Нет'))
    .and(radio.withName('Признак возможности проведения закупки на единицу продукции').withValue('Нет'))
    .and(radio.withName('Требует нормирования').withValue('Нет'))
    .then(scrollDirection.up())
    .and(button.save())
    .then(checkTitle.withText('Информация о СПГЗ'));

let newSpgzWithKpgz = (args) => new Sequence()
    .append(kpgzSeq.newKpgzSeq(args.kpgz))
    .append(newSpgzSeq(args.spgz));

/*
spgz.domain('.source.feature')
    .comment('новый СПГЗ')
    .add({
        name: `new-spgz`,
        prefix: `new-spgz`,
        description: `Новый СПГЗ`,
        body: newSpgzSeq(BLANK_STANDALONE).content()
    })

    .comment('новый СПГЗ (с КПГЗ)')
    .add({
        name: `new-spgz-w-kpgz`,
        prefix: `new-spgz-w-kpgz`,
        description: `Новый СПГЗ(с КПГЗ)`,
        body: newSpgzWithKpgz({
            kpgz: kpgzSeq.BLANK,
            spgz: BLANK
        }).content()
    })

    .finalize();
*/

module.exports = {
    newSpgzSeq: newSpgzSeq,
    newSpgzWithKpgz: newSpgzWithKpgz,
    BLANK: BLANK,
    BLANK_STANDALONE: BLANK_STANDALONE
};
