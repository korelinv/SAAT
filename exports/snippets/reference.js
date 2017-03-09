const SnipetFile = require('../../classes/snippet');
const sequences = require('../../sequences/reference');

module.exports = function(callback) {
    return new SnipetFile('dist/snippets/reference')
    .domain('.source.feature')

    .comment('создание новой амортизационной группы')
    .add({
        name: 'new-amortization-groupd',
        prefix: 'new-amortization-groupd',
        description: 'Создание новой амортизационной группы',
        body: sequences.new_amortization_groupd_blank.content()
    })

    .comment('создание новой торговой площадки')
    .add({
        name: 'new-trading-paltform',
        prefix: 'new-trading-paltform',
        description: 'Создание новой торговой площадки',
        body: sequences.new_trading_paltform_blank.content()
    })

    .comment('создание новой переодичности поставки')
    .add({
        name: 'new-pereodicity',
        prefix: 'new-pereodicity',
        description: 'Создание новой переодичности поставки',
        body: sequences.new_pereodicity_blank.content()
    })

    .comment('создание нового нарушения')
    .add({
        name: 'new-interruption',
        prefix: 'new-interruption',
        description: 'Создание нового нарушения',
        body: sequences.new_interruption_blank.content()
    })

    .comment('создание новой причины измененеия плана')
    .add({
        name: 'new-change-reason',
        prefix: 'new-change-reason',
        description: 'Cоздание новой причины измененеия плана',
        body: sequences.new_change_reason_blank.content()
    })

    .comment('создание нового рубрикатора НПСИ')
    .add({
        name: 'new-document-rubricator',
        prefix: 'new-document-rubricator',
        description: 'Cоздание нового рубрикатора НПСИ',
        body: sequences.new_document_rubricator_blank.content()
    })

    .comment('создание нового справочника НПСИ')
    .add({
        name: 'new-reference-document',
        prefix: 'new-reference-document',
        description: 'Cоздание нового справочника НПСИ',
        body: sequences.new_reference_document_blank.content()
    })

    .comment('создание нового справочника внешних ресурсов')
    .add({
        name: 'new-external-resource',
        prefix: 'new-external-resource',
        description: 'Cоздание нового справочника внешних ресурсов',
        body: sequences.new_external_resource_blank.content()
    })

    .comment('создание нового справочника должностей')
    .add({
        name: 'new-position',
        prefix: 'new-position',
        description: 'Cоздание нового справочника должностей',
        body: sequences.new_position_blank.content()
    })

    .finalize(callback);
};
