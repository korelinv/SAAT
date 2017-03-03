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

const WIZARD1_BLANK = {
    innFl: '[string]',
    innUl: '[string]',
    kpp: '[string]'
};
const WIZARD2_BLANK = {
    country: '[string]',
    innUl: '[string]',
    innFl: '[string]',
    kpp: '[string]',
    type: '[string]'
};

let wizard1Seq = (args) => new Sequence()
    .ifelse(!!args.innUl,
            (seq) => seq
                .then(input.field().withName('ИНН').withInnUl(args.innUl)),
            (seq) => seq
                .then(input.field().withName('ИНН').withInnFl(args.innFl)))

    .ifelse(!!args.innUl && !!args.innFl,
            (seq) => seq.comment(`Then ${input.field().withName('ИНН').withInnFl(args.innFl).render()}`))

    .and(input.field().withName('КПП').withInnFl(args.kpp))
    .then(button.confirm())
    .then(button.confirm());

let wizard2Seq = (args) => new Sequence()
    .then(autocomplete.field().withName('Страна').withText(args.country))
    .then(button.withText('Далее'))

    .ifelse('Российская Федерация' === args.country,
            (seq) => seq
                .then(input.field().withName('ИНН').withInnFl(args.innUl))
                .then(button.withText('Далее'))
                .then(input.field().withName('КПП').withText(args.kpp)),
            (seq) => seq
                .then(button.withText('Сгенерировать'))
                .ifelse(!!args.innUl,
                        (seq) => seq
                            .then(select.withName('Тип').withValue('Юридическое лицо')),
                        (seq) => seq
                            .then(select.withName('Тип').withValue('Физическое лицо')))

                .ifelse(!!args.innUl && !!args.innFl,
                        (seq) => seq.comment(`Then ${select.withName('Тип').withValue('Физическое лицо').render()}`))

                /*.ifelse()*/)

    .then(button.withText('Далее'))
    .then(button.withText('Далее'));

module.exports = {
    wizard1Seq: wizard1Seq,
    wizard2Seq: wizard2Seq,
    WIZARD1_BLANK: WIZARD1_BLANK,
    WIZARD2_BLANK: WIZARD2_BLANK
};
