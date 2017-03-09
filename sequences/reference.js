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

function new_amortization_groupd(args) {
    return new Sequence()
        .Comment('создание амортизационной группы')
        .Sequence(common.goto_amortization_groupd)
        .Then(button.create())
        .And(input.field().withName('Амортизационная группа').withTag(args.name))
        .And(input.field().withName('Срок полезного использования').withTag('ТЕСТ'))
        .Then(scrollDirection.up())
        .Then(button.save())
        .Then(checkTitle.withText('Информация об амортизационной группе'));
};

function new_trading_paltform(args) {
    return new Sequence()
        .Comment('создание торговой площадки')
        .Sequence(common.goto_trading_paltform)
        .Then(button.create())
        .And(input.field().withName('Торговая площадка').withTag(args.name))
        .And(input.field().withName('Место проведения').withTag('МЕСТО ПРОВЕДЕНИЯ ТОРГОВОЙ ПЛОЩАДКИ'))
        .Then(scrollDirection.up())
        .Then(button.save())
        .Then(checkTitle.withText('Информация о торговой площадке'));
};

function new_customer_rating(args) {
    return new Sequence()
        .Comment('')
        .Sequence(common.goto_blank);
};

function new_pereodicity(args) {
    return new Sequence()
        .Comment('создание переодичности поставки')
        .Sequence(common.goto_pereodicity)
        .Then(button.create())
        .And(input.field().withName('Периодичность поставки').withTag(args.name))
        .Then(scrollDirection.up())
        .Then(button.save())
        .Then(checkTitle.withText('Информация о периодичности поставки'));
};

function new_interruption(args) {
    return new Sequence()
        .Comment('создание нарушения')
        .Sequence(common.goto_interruption)
        .Then(button.create())
        .And(input.field().withName('Код типа нарушения').withTag(args.name))
        .And(input.field().withName('Тип нарушения').withTag('ТЕСТОВЫЙ ТИП НАРУШЕНИЯ'))
        .And(textarea.withName('Описание').generated().withText('ТЕСТОВОЕ ОПИСАНИЕ НАРУШЕНИЯ'))
        .Then(scrollDirection.up())
        .Then(button.save())
        .Then(checkTitle.withText('Информация о нарушении'));
};

function new_change_reason(args) {
    return new Sequence()
        .Comment('создание причины измененеия плана')
        .Sequence(common.goto_change_reason)
        .Then(button.create())
        .And(input.field().withName('Наименование причины изменения').withTag(args.name))
        .And(autocomplete.field().withName('Тип'))
        .Then(scrollDirection.up())
        .Then(button.save())
        .Then(checkTitle.withText('Информация причине изменения плана'));
};

function new_document_rubricator(args) {
    return new Sequence()
        .Comment('создание рубрикатора НПСИ')
        .Sequence(common.goto_document_rubricato)
        .Then(button.create())
        .And(autocomplete.field().withName('Вышестоящий рубрикатор'))
        .And(input.field().withName('Название рубрикатора').withTag(args.name))
        .Then(scrollDirection.up())
        .Then(button.save())
        .Then(checkTitle.withText('Информация о НПСИ'));
};

function new_reference_document(args) {
    return new Sequence()
        .Comment('создание справочника НПСИ')
        .Sequence(common.goto_reference_document)
        .Then(button.create())
        .And(input.field().withName('Название документа').withTag(args.name))
        .And(datapicker.withName('Дата принятия'))
        .And(datapicker.withName('Дата вступления в силу'))
        .And(datapicker.withName('Дата публикации в Системе'))
        .And(autocomplete.field().withName('Рубрикатор НПСИ'))
        .And(file.withName('Документ').withValue('uploadFiles/test.jpg'))
        .Then(scrollDirection.up())
        .Then(button.save())
        .Then(checkTitle.withText('Информация о НПСИ'));
};

function new_external_resource(args) {
    return new Sequence()
        .Comment('создание справочника внешних ресурсов')
        .Sequence(common.goto_external_resource)
        .Then(button.create())
        .And(input.field().withName('Название внешнего ресурса').withTag(args.name))
        .And(input.field().withName('Тематика').withTag('ТЕСТОВАЯ ТЕМАТИКА'))
        .And(input.field().withName('Ссылка').withTag('ТЕСТОВАЯ ССЫЛКА'))
        .And(autocomplete.field().withName('Рубрикатор'))
        .Then(scrollDirection.up())
        .Then(button.save())
        .Then(checkTitle.withText('Информация о внешнем ресурсе'));
};

function new_position(args) {
    return new Sequence()
        .Comment('создание справочника должностей')
        .Sequence(common.goto_position)
        .Then(button.create())
        .And(input.field().withName('Наименование должности').withTag(args.name))
        .Then(scrollDirection.up())
        .Then(button.save())
        .Then(checkTitle.withText('Информация о должности'));
};

module.exports = {

    new_amortization_groupd: new_amortization_groupd,
    new_trading_paltform: new_trading_paltform,
    new_customer_rating: new_customer_rating,
    new_pereodicity: new_pereodicity,
    new_interruption: new_interruption,
    new_change_reason: new_change_reason,
    new_document_rubricator: new_document_rubricator,
    new_reference_document: new_reference_document,
    new_external_resource: new_external_resource,
    new_position: new_position,

    new_amortization_groupd_blank: new_amortization_groupd({
        name: '[string]'
    }),

    new_trading_paltform_blank: new_trading_paltform({
        name: '[string]'
    }),

    new_customer_rating_blank: new_customer_rating({
        name: '[string]'
    }),

    new_pereodicity_blank: new_pereodicity({
        name: '[string]'
    }),

    new_interruption_blank: new_interruption({
        name: '[string]'
    }),

    new_change_reason_blank: new_change_reason({
        name: '[string]'
    }),

    new_document_rubricator_blank: new_document_rubricator({
        name: '[string]'
    }),

    new_reference_document_blank: new_reference_document({
        name: '[string]'
    }),

    new_external_resource_blank: new_external_resource({
        name: '[string]'
    }),

    new_position_blank: new_position({
        name: '[string]'
    })

};
