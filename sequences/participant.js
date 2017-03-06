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

function wizard(args) {
    return new Sequence()
        .Comment('Заполнение визарда')

        .If(true === !!args.innUl)
            .Then(input.field().withName('ИНН').withInnUl(args.innUl))
        .End()

        .If(true === !!args.innFl)
            .Then(input.field().withName('ИНН').withInnFl(args.innFl))
        .End()

        .And(input.field().withName('КПП').withText(args.kpp))
        .Then(button.confirm())
        .Then(button.confirm());
};

function wizard_v2(args) {
    return new Sequence()
        .Comment('Заполнение визарда')
        .Then(autocomplete.field().withName('Страна').withText(args.country))
        .Then(button.withText('Далее'))

        .If('Российская Федерация' === args.country)

            .If(true === !!args.innUl)
                .Then(input.field().withName('ИНН').withInnUl(args.innUl))
            .End()

            .If(true === !!args.innFl)
                .Then(input.field().withName('ИНН').withInnFl(args.innFl))
            .End()

            .Then(button.withText('Далее'))
            .Then(input.field().withName('КПП').withText(args.kpp))
        .End()

        .If('Российская Федерация' !== args.country)
            .Then(button.withText('Сгенерировать'))

            .If(true === !!args.type)
                .Then(select.withName('Тип').withValue(args.type))
            .End()

            .If(true === args.registred)

                .Then(checkbox.withName('Состоит на учете в налоговом органе РФ'))

                .If(true === !!args.innUl)
                    .Then(input.field().withName('ИНН').withInnUl(args.innUl))
                    .Then(input.field().withName('КПП').withText(args.kpp))
                .End()

                .If(true === !!args.innFl)
                    .Then(input.field().withName('ИНН').withInnFl(args.innFl))
                .End()

            .End()

        .End()

        .Then(button.withText('Далее'))
        .Then(button.withText('Далее'))
};

function add_contact_person(args) {
    return new Sequence()
        .Comment('Добавление контактного лица')
        .Then('Я заполняю блок Контактные лица "ЛАЛАЛАЛА", "ЛАЛАЛАЛА", "1234567890", "Бухгалтерия", "test@test.ru"');
};

function add_contact_info(args) {
    return new Sequence()
        .Comment('Добавление контактной информации')
        .Then('Я заполняю блок Контактная информация (Страна регистрации) "asdfasdfasdf", "Владивостокское время", "123123123", "test@test.ru", "asdf", "asdf", "asdf"');
};

function add_checking_account(args) {
    return new Sequence()
        .Comment('Добавление расчетного счета')
        .Then(scrollBlock.withName('Расчетные счета'))
        .And(button.withCaption('Добавляет расчетный счет'))
        .And(input.field().withName('Номер расчетного счета').withText('123456789'))
        .And(autocomplete.field().withName('БИК'))
        .And(checkbox.withName('Признак использования в контрактной системе'))
        .Then(button.withName('Сохранение Создание банковского реквизита'));
};

function add_personal_account(args) {
    return new Sequence()
        .Comment('Добавление лицевого счета')
        .Then(scrollBlock.withName('Лицевые счета'))
        .And(button.withCaption('Добавляет лицевой счет'))
        .And(input.field().withName('Номер лицевого счета').withText('123456789'))
        .And(autocomplete.field().withName('Номер расчетного счета'))
        .And(checkbox.withName('Признак использования в контрактной системе'))
        .Then(button.withName('Сохранение Создание банковского реквизита'));
};

function add_trust_managment_account(args) {
    return new Sequence()
        .Comment('Добавление счета доверительного управления')
        .Then(scrollBlock.withName('Счета доверительного управления'))
        .And(button.withCaption('Добавляет счет доверительного управления'))
        .And(input.field().withName('Номер счета доверительного управления').withText('123456789'))
        .And(autocomplete.field().withName('БИК'))
        .And(checkbox.withName('Признак использования в контрактной системе'))
        .Then(button.withName('Сохранение Создание банковского реквизита'));
};

function add_organization_contract(args) {
    return new Sequence()
        .Comment('Добавление контракта со специализированной организацией')
        .Then(scrollBlock.withName('Контракты со специализированной организацией'))
        .And(button.withCaption('Создание Контракты со специализированной организацией'))
        .And(input.field().withName('Номер контракта').withText('123456789'))
        .And(datapicker.withName('Дата контракта'))
        .And(autocomplete.field().withName('Специализированная организация'))
        .And(datapicker.withName('Дата начала действия контракта'))
        .And(datapicker.withName('Дата окончания действия контракта'))
        .Then(button.withName('Сохранение Создание контракта со специализированной организацией'));
};


module.exports = {
    wizard: wizard,
    wizard_v2: wizard_v2,
    add_contact_person: add_contact_person,
    add_contact_info: add_contact_info,
    add_checking_account: add_checking_account,
    add_personal_account: add_personal_account,
    add_trust_managment_account: add_trust_managment_account,
    add_organization_contract: add_organization_contract,

    wizard_blank_fl: wizard({
        innFl: '[string]',
        kpp: '[string]'
    }),

    wizard_blank_ul: wizard({
        innUl: '[string]',
        kpp: '[string]'
    }),

    wizard_v2_blank_fl: wizard_v2({
        country: 'Российская Федерация',
        innFl: '[string]',
        kpp: '[string]'
    }),

    wizard_v2_blank_ul: wizard_v2({
        country: 'Российская Федерация',
        innUl: '[string]',
        kpp: '[string]'
    }),

    wizard_v2_blank_foreign_fl: wizard_v2({
        country: '[string]',
        type: 'Физическое лицо',
        registred: true,
        innFl: '[string]'
    }),

    wizard_v2_blank_foreign_ul: wizard_v2({
        country: '[string]',
        type: 'Юридическое лицо',
        registred: true,
        innUl: '[string]',
        kpp: '[string]'
    }),

    wizard_v2_blank_foreign_unregistred_fl: wizard_v2({
        country: '[string]',
        type: 'Физическое лицо',
        registred: false
    }),

    wizard_v2_blank_foreign_unregistred_ul: wizard_v2({
        country: '[string]',
        type: 'Юридическое лицо',
        registred: false
    }),


    add_contact_person_blank: add_contact_person({

    }),

    add_contact_info_blank: add_contact_info({

    }),

    add_checking_account_blank: add_checking_account({

    }),

    add_personal_account_blank: add_personal_account({

    }),

    add_trust_managment_account_blank: add_trust_managment_account({

    }),
    
    add_organization_contract_blank: add_organization_contract({

    })

};
