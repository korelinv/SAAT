const SnipetFile = require('../../classes/snippet');
const sequences = require('../../sequences/participant');

module.exports = function(callback) {
    return new SnipetFile('dist/snippets/participant')
    .domain('.source.feature')

    .comment('визард участинка (тип 1) физлицо')
    .add({
        name: 'participant-wizard-type1-fl',
        prefix: 'participant-wizard-type1-fl',
        description: 'Визард участинка (тип 1) физлицо',
        body: sequences.wizard_blank_fl.content()
    })

    .comment('визард участинка (тип 1) юрдицо')
    .add({
        name: 'participant-wizard-type1-ul',
        prefix: 'participant-wizard-type1-ul',
        description: 'Визард участинка (тип 1) юрлицо',
        body: sequences.wizard_blank_ul.content()
    })

    .comment('визард участинка (тип 2) физлицо')
    .add({
        name: 'participant-wizard-type2-fl',
        prefix: 'participant-wizard-type2-fl',
        description: 'Визард участинка (тип 2) физлицо',
        body: sequences.wizard_v2_blank_fl.content()
    })

    .comment('визард участинка (тип 2) юрлицо')
    .add({
        name: 'participant-wizard-type2-ul',
        prefix: 'participant-wizard-type2-ul',
        description: 'Визард участинка (тип 2) юрлицо',
        body: sequences.wizard_v2_blank_ul.content()
    })

    .comment('визард участинка (тип 2) физлицо, не РФ')
    .add({
        name: 'participant-wizard-type2-fl-foreign',
        prefix: 'participant-wizard-type2-fl-foreign',
        description: 'Визард участинка (тип 2) физлицо, не РФ',
        body: sequences.wizard_v2_blank_foreign_fl.content()
    })

    .comment('визард участинка (тип 2) юрлицо, не РФ')
    .add({
        name: 'participant-wizard-type2-ul-foreign',
        prefix: 'participant-wizard-type2-ul-foreign',
        description: 'Визард участинка (тип 2) юрлицо, не РФ',
        body: sequences.wizard_v2_blank_foreign_ul.content()
    })

    .comment('визард участинка (тип 2) физлицо, не РФ, не состоит на учете')
    .add({
        name: 'participant-wizard-type2-fl-foreign-unregistred',
        prefix: 'participant-wizard-type2-fl-foreign-unregistred',
        description: 'Визард участинка (тип 2) физлицо, не РФ, не состоит на учете',
        body: sequences.wizard_v2_blank_foreign_unregistred_fl.content()
    })

    .comment('визард участинка (тип 2) юрлицо, не РФ, не состоит на учете')
    .add({
        name: 'participant-wizard-type2-ul-foreign-unregistred',
        prefix: 'participant-wizard-type2-ul-foreign-unregistred',
        description: 'Визард участинка (тип 2) юрлицо, не РФ, не состоит на учете',
        body: sequences.wizard_v2_blank_foreign_unregistred_ul.content()
    })

    .comment('добавление контактного лица')
    .add({
        name: 'add-contact-person',
        prefix: 'add-contact-person',
        description: 'Добавление контактного лица',
        body: sequences.add_contact_person_blank.content()
    })

    .comment('добавление контактной информации')
    .add({
        name: 'add-contact-info',
        prefix: 'add-contact-info',
        description: 'Добавление контактной информации',
        body: sequences.add_contact_info_blank.content()
    })

    .comment('добавление расчетного счета')
    .add({
        name: 'add-checking-account',
        prefix: 'add-checking-account',
        description: 'Добавление расчетного счета',
        body: sequences.add_checking_account_blank.content()
    })

    .comment('добавление лицевого счета')
    .add({
        name: 'add-personal-account',
        prefix: 'add-personal-account',
        description: 'Добавление лицевого счета',
        body: sequences.add_personal_account_blank.content()
    })

    .comment('добавление счета доверительного управления')
    .add({
        name: 'add-trust-managment-account',
        prefix: 'add-trust-managment-account',
        description: 'Добавление счета доверительного управления',
        body: sequences.add_trust_managment_account_blank.content()
    })

    .comment('добавление контракта со специализированной организацией')
    .add({
        name: 'add-organization-contact',
        prefix: 'add-organization-contact',
        description: 'Добавление контракта со специализированной организацией',
        body: sequences.add_organization_contract_blank.content()
    })

    .comment('создать новый ГРБС')
    .add({
        name: 'new-grbs',
        prefix: 'new-grbs',
        description: 'Создать новый ГРБС',
        body: sequences.new_grbs_blank.content()
    })

    .comment('создать нового заказчика')
    .add({
        name: 'new-сustomer',
        prefix: 'new-сustomer',
        description: 'Создать новый заказчика',
        body: sequences.new_customer_blank.content()
    })

    .comment('создать нового эксперта')
    .add({
        name: 'new-expert',
        prefix: 'new-expert',
        description: 'Создать нового эксперта',
        body: sequences.new_expert_blank.content()
    })

    .comment('создать новый регулирующий орган')
    .add({
        name: 'new-articipant-regulator',
        prefix: 'new-articipant-regulator',
        description: 'Создать новый регулирующий орган',
        body: sequences.new_participant_regulator_blank.content()
    })

    .comment('создать новый контролирующий орган')
    .add({
        name: 'new-controller',
        prefix: 'new-controller',
        description: 'Создать новый контролирующий орган',
        body: sequences.new_controller_blank.content()
    })

    .comment('создать новую специализированную организацию')
    .add({
        name: 'new-special',
        prefix: 'new-special',
        description: 'Создать новую специализированную организацию',
        body: sequences.new_special_blank.content()
    })

    .comment('создать новый уполномоченный орган')
    .add({
        name: 'new-authority',
        prefix: 'new-authority',
        description: 'Создать новый уполномоченный орган',
        body: sequences.new_authority_blank.content()
    })

    .comment('создать нового поставщика')
    .add({
        name: 'new-supplier',
        prefix: 'new-supplier',
        description: 'Создать нового поставщика',
        body: sequences.new_supplier_blank.content()
    })

    .finalize(callback);
}
