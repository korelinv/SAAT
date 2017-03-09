const SnipetFile = require('../../classes/snippet');
const sequences = require('../../sequences/common');

module.exports = function(callback) {
    return new SnipetFile('dist/snippets/common')
    .domain('.source.feature')
    .comment('переход к разделу')
    .add({
        name: 'goto',
        prefix: 'goto',
        description: 'Переход к разделу',
        body: sequences.goto_blank.content()
    })

    .comment('переход к разделу КПГЗ')
    .add({
        name: 'goto-kpgz',
        prefix: 'goto-kpgz',
        description: 'Переход к разделу КПГЗ',
        body: sequences.goto_kpgz.content()
    })

    .comment('переход к разделу СПГЗ')
    .add({
        name: 'goto-spgz',
        prefix: 'goto-spgz',
        description: 'Переход к разделу СПГЗ',
        body: sequences.goto_spgz.content()
    })

    .comment('переход к разделу Характеристики')
    .add({
        name: 'goto-characteristics',
        prefix: 'goto-characteristics',
        description: 'Переход к разделу Характеристики',
        body: sequences.goto_characteristics.content()
    })

    .comment('переход к разделу ГРБС')
    .add({
        name: 'goto-grbs',
        prefix: 'goto-grbs',
        description: 'Переход к разделу ГРБС',
        body: sequences.goto_grbs.content()
    })

    .comment('переход к разделу Эксперты')
    .add({
        name: 'goto-expert',
        prefix: 'goto-expert',
        description: 'Переход к разделу Эксперты',
        body: sequences.goto_expert.content()
    })

    .comment('переход к разделу Регулирующие органы исполнительной власти')
    .add({
        name: 'goto-participant-regulator',
        prefix: 'goto-participant-regulator',
        description: 'Переход к разделу Регулирующие органы исполнительной власти',
        body: sequences.goto_participant_regulator.content()
    })

    .comment('переход к разделу Контрольные органы в сфере закупок')
    .add({
        name: 'goto-controller',
        prefix: 'goto-controller',
        description: 'Переход к разделу Контрольные органы в сфере закупок',
        body: sequences.goto_controller.content()
    })

    .comment('переход к разделу Специализированные организации')
    .add({
        name: 'goto-special',
        prefix: 'goto-special',
        description: 'Переход к разделу Специализированные организации',
        body: sequences.goto_special.content()
    })

    .comment('переход к разделу Уполномоченные органы или учреждения')
    .add({
        name: 'goto-authority',
        prefix: 'goto-authority',
        description: 'Переход к разделу Уполномоченные органы или учреждения',
        body: sequences.goto_authority.content()
    })

    .comment('переход к разделу Поставщики')
    .add({
        name: 'goto-supplier',
        prefix: 'goto-supplier',
        description: 'Переход к разделу Поставщики',
        body: sequences.goto_supplier.content()
    })


    .comment('переход к разделу Амортизационные группы')
    .add({
        name: 'goto-amortization-groupd',
        prefix: 'goto-amortization-groupd',
        description: 'Переход к разделу Амортизационные группы',
        body: sequences.goto_amortization_groupd.content()
    })

    .comment('переход к разделу Торговая площадка')
    .add({
        name: 'goto-trading-paltform',
        prefix: 'goto-trading-paltform',
        description: 'Переход к разделу Торговая площадка',
        body: sequences.goto_trading_paltform.content()
    })

    .comment('переход к разделу Периодичность поставки')
    .add({
        name: 'goto-pereodicity',
        prefix: 'goto-pereodicity',
        description: 'Переход к разделу Периодичность поставки',
        body: sequences.goto_pereodicity.content()
    })

    .comment('переход к разделу Нарушения')
    .add({
        name: 'goto-interruption',
        prefix: 'goto-interruption',
        description: 'Переход к разделу Нарушения',
        body: sequences.goto_interruption.content()
    })

    .comment('переход к разделу Причины изменения планов')
    .add({
        name: 'goto-reason',
        prefix: 'goto-reason',
        description: 'Переход к разделу Причины изменения планов',
        body: sequences.goto_change_reason.content()
    })

    .comment('переход к разделу Рубрикатор НПСИ')
    .add({
        name: 'goto-document-rubricato',
        prefix: 'goto-document-rubricato',
        description: 'Переход к разделу Рубрикатор НПСИ',
        body: sequences.goto_document_rubricator.content()
    })

    .comment('переход к разделу Справочник документов НПСИ')
    .add({
        name: 'goto-reference-document',
        prefix: 'goto-reference-document',
        description: 'Переход к разделу Справочник документов НПСИ',
        body: sequences.goto_reference_document.content()
    })

    .comment('переход к разделу Справочник внешних ресурсов НПСИ')
    .add({
        name: 'goto-external-resource',
        prefix: 'goto-external-resource',
        description: 'Переход к разделу Справочник внешних ресурсов НПСИ',
        body: sequences.goto_external_resource.content()
    })

    .comment('переход к разделу Справочник должностей')
    .add({
        name: 'goto-position',
        prefix: 'goto-position',
        description: 'Переход к разделу Справочник должностей',
        body: sequences.goto_position.content()
    })

    .finalize(callback);
};
