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

const common = require('./common').render;

function wizard(args) {
    return new Sequence()
        .Comment('заполнение визарда')

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
        .Comment('заполнение визарда')
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
        .Comment('добавление контактного лица')
        .Then(`Я заполняю блок Контактные лица "${args.patronymic}", "${args.name}", "${args.phone}", "${args.phoneType}", "${args.email}"`);
};

function add_contact_info(args) {
    return new Sequence()
        .Comment('добавление контактной информации')
        .Then(`Я заполняю блок Контактная информация (Страна регистрации) "${args.address}", "${args.time}", "${args.phone}", "${args.email}", "${args.surname}", "${args.name}", "${args.patronymic}"`);
};

function add_checking_account(args) {
    return new Sequence()
        .Comment('добавление расчетного счета')
        .Then(scrollBlock.withName('Расчетные счета'))
        .And(button.withCaption('Добавляет расчетный счет'))
        .And(input.field().withName('Номер расчетного счета').withText(args.account))

        .If(true === !!args.bik)
            .And(autocomplete.field().withName('БИК').withText(args.bik))
        .End()

        .If(false === !!args.bik)
            .And(autocomplete.field().withName('БИК'))
        .End()

        .And(checkbox.withName('Признак использования в контрактной системе'))
        .Then(button.withName('Сохранение Создание банковского реквизита'));
};

function add_personal_account(args) {
    return new Sequence()
        .Comment('добавление лицевого счета')
        .Then(scrollBlock.withName('Лицевые счета'))
        .And(button.withCaption('Добавляет лицевой счет'))
        .And(input.field().withName('Номер лицевого счета').withText(args.account))

        .If(true === !!args.cheking)
            .And(autocomplete.field().withName('Номер расчетного счета').withText(args.cheking))
        .End()

        .If(false === !!args.cheking)
            .And(autocomplete.field().withName('Номер расчетного счета'))
        .End()

        .And(checkbox.withName('Признак использования в контрактной системе'))
        .Then(button.withName('Сохранение Создание банковского реквизита'));
};

function add_trust_managment_account(args) {
    return new Sequence()
        .Comment('добавление счета доверительного управления')
        .Then(scrollBlock.withName('Счета доверительного управления'))
        .And(button.withCaption('Добавляет счет доверительного управления'))
        .And(input.field().withName('Номер счета доверительного управления').withText(args.account))

        .If(true === !!args.bik)
            .And(autocomplete.field().withName('БИК').withText(args.bik))
        .End()

        .If(false === !!args.bik)
            .And(autocomplete.field().withName('БИК'))
        .End()

        .And(checkbox.withName('Признак использования в контрактной системе'))
        .Then(button.withName('Сохранение Создание банковского реквизита'));
};

function add_organization_contract(args) {
    return new Sequence()
        .Comment('добавление контракта со специализированной организацией')
        .Then(scrollBlock.withName('Контракты со специализированной организацией'))
        .And(button.withCaption('Создание Контракты со специализированной организацией'))
        .And(input.field().withName('Номер контракта').withText(args.contract))
        .And(datapicker.withName('Дата контракта'))

        .If(true === !!args.organization)
            .And(autocomplete.field().withName('Специализированная организация').withText(args.organization))
        .End()

        .If(false === !!args.organization)
            .And(autocomplete.field().withName('Специализированная организация'))
        .End()

        .And(datapicker.withName('Дата начала действия контракта'))
        .And(datapicker.withName('Дата окончания действия контракта'))
        .Then(button.withName('Сохранение Создание контракта со специализированной организацией'));
};

function new_grbs(args) {
    return new Sequence()
        .Comment('создание ГРБС')
        .Sequence(common.goto_grbs)
        .Then(button.create())
        .Sequence(wizard(args.wizard))
        .Then(checkTitle.withText('Создание ГРБС'))
        .Then(datapicker.withName('Дата постановки на учет в налоговом органе'))
        .And(autocomplete.field().withName('Организационно-правовая форма'))
        .And(textarea.withName('Полное наименование').generated().withText(args.name))
        .And(textarea.withName('Краткое наименование').generated().withText(args.name))
        .And(input.field().withName('ОГРН').withText('1234567890123'))
        .And(autocomplete.field().withName('Головная организация'))
        .And(input.field().withName('Юридический адрес').withText('LALALALALA'))
        .And(input.field().withName('ОКПО').withText('12345678'))
        .And(autocomplete.field().withName('ОКАТО'))
        .And(autocomplete.field().withName('ОКТМО'))
        .And(autocomplete.field().withName('ОКОГУ'))
        .And(autocomplete.field().withName('ОКВЭД'))
        .And(input.field().withName('Место').withText('121170 город Москва, пл Победы, дом 3Д'))
        .And(input.field().withName('Факс').withText('12312312313123123123'))
        .Sequence(add_contact_person(args.contact_person))
        .Sequence(add_checking_account(args.checking_account))
        .Sequence(add_personal_account(args.personal_account))
        .Then(scrollDirection.up())
        .And(button.save())
        .Then(checkTitle.withText('Информация об ГРБС'));
};

function new_customer(args) {
    return new Sequence()
        .Comment('создание заказчика')
        .Sequence(common.goto_customer)
        .Then(button.create())
        .Sequence(wizard(args.wizard))
        .Then(checkTitle.withText('Создание заказчика'))

        .Then(datapicker.withName('Дата постановки на учет в налоговом органе'))
        .And(autocomplete.field().withName('Организационно-правовая форма'))
        .And(textarea.withName('Полное наименование').generated().withText(args.name))
        .And(textarea.withName('Краткое наименование').generated().withText(args.name))
        .And(input.field().withName('ОГРН').withText('1234567890123'))
        .And(autocomplete.field().withName('Головная организация'))
        .And(input.field().withName('Юридический адрес').withText('LALALALALA'))

        .And(input.field().withName('Код по СПЗ').withText('12345678901'))
        .And(input.field().withName('УНК бюджетополучателя').withText('123456'))
        .And(autocomplete.field().withName('ГРБС'))
        .And(autocomplete.field().withName('Управляющий орган в КС'))
        .And(input.field().withName('ФИО контрактного управляющего / руководителя контрактной службы').withText('ТЕСТОВОЕ ФИО'))
        .And(input.field().withName('Телефон контрактного управляющего / руководителя контрактной службы').withText('1234567890112344'))
        .And(input.field().withName('E-MAIL контрактного управляющего / руководителя контрактной службы').withText('test@test.ru'))

        .And(input.field().withName('ОКПО').withText('12345678'))
        .And(autocomplete.field().withName('ОКАТО'))
        .And(autocomplete.field().withName('ОКТМО'))
        .And(autocomplete.field().withName('ОКОГУ'))
        .And(autocomplete.field().withName('ОКВЭД'))

        .And(input.field().withName('Место нахождения').withText('121170 город Москва, пл Победы, дом 3Д'))
        .And(input.field().withName('Факс').withText('12312312313123123123'))

        .Sequence(add_contact_person(args.contact_person))
        .Sequence(add_checking_account(args.checking_account))
        .Sequence(add_personal_account(args.personal_account))
        .Sequence(add_trust_managment_account(args.trust_managment_account))
        .Sequence(add_organization_contract(args.organization_contract))

        .Then(scrollDirection.up())
        .Then(button.save())
        .Then(checkTitle.withText('Информация о заказчике'))
};

function new_expert(args) {
    return new Sequence()
        .Comment('создание эксперта')
        .Sequence(common.goto_expert)
        .Then(button.create())
        .Sequence(wizard_v2(args.wizard))
        .Then(checkTitle.withText('Создание эксперта'))

        .Then(datapicker.withName('Дата постановки на учет в налоговом органе'))
        .And(autocomplete.field().withName('Организационно-правовая форма'))
        .And(textarea.withName('Полное наименование').generated().withText(args.name))
        .And(textarea.withName('Краткое наименование').generated().withText(args.name))
        .And(input.field().withName('ОГРН').withText('1234567890123'))
        .And(input.field().withName('Юридический адрес').withText('LALALALALA'))
        .And(input.field().withName('ОКПО').withText('12345678'))
        .And(autocomplete.field().withName('ОКАТО'))
        .And(autocomplete.field().withName('ОКТМО'))
        .And(autocomplete.field().withName('ОКВЭД'))
        .And(input.field().withName('Место нахождения').withText('121170 город Москва, пл Победы, дом 3Д'))

        .Sequence(add_contact_person(args.contact_person))

        .Sequence(add_checking_account(args.checking_account))

        .Sequence(add_personal_account(args.personal_account))

        .Then(scrollDirection.up())
        .Then(button.save())
        .Then(checkTitle.withText('Информация об эксперте'));
};

function new_participant_regulator(args) {
    return new Sequence()
        .Comment('создание регулирующего органа')
        .Sequence(common.goto_participant_regulator)
        .Then(button.create())
        .Sequence(wizard(args.wizard))
        .Then(checkTitle.withText('Создание регулирующего органа исполнительной власти'))

        .Then(datapicker.withName('Дата постановки на учет в налоговом органе'))
        .And(autocomplete.field().withName('Организационно-правовая форма'))
        .And(textarea.withName('Полное наименование').generated().withText(args.name))
        .And(textarea.withName('Краткое наименование').generated().withText(args.name))
        .And(input.field().withName('ОГРН').withText('1234567890123'))

        .And(input.field().withName('Юридический адрес').withText('LALALALALA'))
        .And(input.field().withName('ОКПО').withText('12345678'))
        .And(autocomplete.field().withName('ОКАТО'))
        .And(autocomplete.field().withName('ОКТМО'))
        .And(autocomplete.field().withName('ОКОГУ'))
        .And(autocomplete.field().withName('ОКВЭД'))
        .And(input.field().withName('Место нахождения').withText('121170 город Москва, пл Победы, дом 3Д'))

        .Sequence(add_contact_person(args.contact_person))

        .Sequence(add_checking_account(args.checking_account))

        .Sequence(add_personal_account(args.personal_account))

        .Then(scrollDirection.up())
        .Then(button.save())
        .Then(checkTitle.withText('Информация о регулирующем органе исполнительной власти'));
};

function new_controller(args) {
    return new Sequence()
        .Comment('создание контрольного органа органа')

        .Sequence(common.goto_controller)
        .Then(button.create())
        .Sequence(wizard(args.wizard))
        .Then(checkTitle.withText('Создание контрольного органа в сфере закупок'))

        .Then(datapicker.withName('Дата постановки на учет в налоговом органе'))
        .And(autocomplete.field().withName('Организационно-правовая форма'))
        .And(textarea.withName('Полное наименование').generated().withText(args.name))
        .And(textarea.withName('Краткое наименование').generated().withText(args.name))
        .And(input.field().withName('ОГРН').withText('1234567890123'))

        .And(input.field().withName('Юридический адрес').withText('LALALALALA'))
        .And(input.field().withName('ОКПО').withText('12345678'))
        .And(autocomplete.field().withName('ОКАТО'))
        .And(autocomplete.field().withName('ОКТМО'))
        .And(autocomplete.field().withName('ОКОГУ'))
        .And(autocomplete.field().withName('ОКВЭД'))

        .And(input.field().withName('Место нахождения').withText('121170 город Москва, пл Победы, дом 3Д'))

        .Sequence(add_contact_person(args.contact_person))

        .Sequence(add_checking_account(args.checking_account))

        .Sequence(add_personal_account(args.personal_account))

        .Then(scrollDirection.up())
        .Then(button.save())
        .Then(checkTitle.withText('Информация о контрольном органе в сфере закупок'));
};

function new_special(args) {
    return new Sequence()
        .Comment('создание специализированной организации')
        .Sequence(common.goto_special)
        .Then(button.create())
        .Sequence(wizard_v2(args.wizard))
        .Then(checkTitle.withText('Создание специализированной организации'))
        .Then(datapicker.withName('Дата постановки на учет в налоговом органе'))
        .And(autocomplete.field().withName('Организационно-правовая форма'))
        .And(textarea.withName('Полное наименование').generated().withText(args.name))
        .And(textarea.withName('Краткое наименование').generated().withText(args.name))
        .And(input.field().withName('ОГРН').withText('1234567890123'))
        .And(input.field().withName('Юридический адрес').withText('LALALALALA'))
        .And(input.field().withName('Код по СПЗ').withText('1234567890'))
        .And(input.field().withName('ОКПО').withText('12345678'))
        .And(autocomplete.field().withName('ОКАТО'))
        .And(autocomplete.field().withName('ОКТМО'))
        .And(autocomplete.field().withName('ОКВЭД'))
        .And(input.field().withName('Место нахождения').withText('121170 город Москва, пл Победы, дом 3Д'))

        .Sequence(add_contact_person(args.contact_person))

        .And(scrollBlock.withName('Обоснование'))
        .And(input.field().withName().withText())
        .And(input.field().withName().withText())
        .And(datapicker.withName('Дата документа'))
        .And(file.withName('Документ').withValue('uploadFiles/test.jpg'))

        .Sequence(add_checking_account(args.checking_account))

        .Sequence(add_personal_account(args.personal_account))

        .Then(scrollDirection.up())
        .Then(button.save())
        .Then(checkTitle.withText('Информация о специализированной организации'));
};

function new_authority(args) {
    return new Sequence()
        .Comment('создание уполномоченного органа')
        .Sequence(common.goto_authority)
        .Then(button.create())
        .Sequence(wizard(args.wizard))
        .Then(checkTitle.withText('Создание уполномоченного органа или учреждения'))

        .Then(datapicker.withName('Дата постановки на учет в налоговом органе'))
        .And(autocomplete.field().withName('Организационно-правовая форма'))
        .And(textarea.withName('Полное наименование').generated().withText(args.name))
        .And(textarea.withName('Краткое наименование').generated().withText(args.name))
        .And(input.field().withName('ОГРН').withText('1234567890123'))
        .And(input.field().withName('Юридический адрес').withText('LALALALALA'))

        .And(input.field().withName('ОКПО').withText('12345678'))
        .And(autocomplete.field().withName('ОКАТО'))
        .And(autocomplete.field().withName('ОКТМО'))
        .And(autocomplete.field().withName('ОКОГУ'))
        .And(autocomplete.field().withName('ОКВЭД'))

        .And(input.field().withName('Место нахождения').withText('121170 город Москва, пл Победы, дом 3Д'))

        .Sequence(add_contact_person(args.contact_person))

        .Sequence(add_checking_account(args.checking_account))

        .Sequence(add_personal_account(args.personal_account))

        .Then(scrollDirection.up())
        .Then(button.save())
        .Then(checkTitle.withText('Информация о уполномоченном органе или учреждении'));
};

function new_supplier(args) {
    return new Sequence()
        .Comment('создание поставщика')
        .Sequence(common.goto_supplier)
        .Then(button.create())
        .Sequence(wizard_v2(args.wizard))
        .Then(checkTitle.withText('Создание поставщика'))

        .Then(datapicker.withName('Дата постановки на учет в налоговом органе'))
        .And(autocomplete.field().withName('Организационно-правовая форма'))
        .And(textarea.withName('Полное наименование').generated().withText(args.name))
        .And(textarea.withName('Краткое наименование').generated().withText(args.name))
        .And(input.field().withName('ОГРН').withText('1234567890123'))
        .And(input.field().withName('Юридический адрес').withText('LALALALALA'))

        .And(input.field().withName('ОКПО').withText('12345678'))
        .And(autocomplete.field().withName('ОКАТО'))
        .And(autocomplete.field().withName('ОКТМО'))
        .And(autocomplete.field().withName('ОКВЭД'))

        .And(input.field().withName('Место нахождения').withText('121170 город Москва, пл Победы, дом 3Д'))
        .And(input.field().withName('Адрес интернет сайта').withText('test.ru'))

        .Sequence(add_contact_person(args.contact_person))

        .Sequence(add_checking_account(args.checking_account))

        .Sequence(add_personal_account(args.personal_account))

        .Sequence(add_trust_managment_account(args.trust_managment_account))

        .Then(scrollDirection.up())
        .Then(button.save())
        .Then(checkTitle.withText('Информация о поставщике'));
};

module.exports = {

    methods: {
        wizard: wizard,
        wizard_v2: wizard_v2,
        add_contact_person: add_contact_person,
        add_contact_info: add_contact_info,
        add_checking_account: add_checking_account,
        add_personal_account: add_personal_account,
        add_trust_managment_account: add_trust_managment_account,
        add_organization_contract: add_organization_contract,

        new_grbs: new_grbs,
        new_customer: new_customer,
        new_expert: new_expert,
        new_participant_regulator: new_participant_regulator,
        new_controller: new_controller,
        new_special: new_special,
        new_authority: new_authority,
        new_supplier: new_supplier
    },

    render: {

        __wizard_blank_fl: 'визард участинка (тип 1) физлицо',
        wizard_blank_fl: wizard({
            innFl: '[string]',
            kpp: '[string]'
        }),

        __wizard_blank_ul: 'визард участинка (тип 1) юрдицо',
        wizard_blank_ul: wizard({
            innUl: '[string]',
            kpp: '[string]'
        }),

        __wizard_v2_blank_fl: 'визард участинка (тип 2) физлицо',
        wizard_v2_blank_fl: wizard_v2({
            country: 'Российская Федерация',
            innFl: '[string]',
            kpp: '[string]'
        }),

        __wizard_v2_blank_ul: 'визард участинка (тип 2) юрлицо',
        wizard_v2_blank_ul: wizard_v2({
            country: 'Российская Федерация',
            innUl: '[string]',
            kpp: '[string]'
        }),

        __wizard_v2_blank_foreign_fl: 'визард участинка (тип 2) физлицо, не РФ',
        wizard_v2_blank_foreign_fl: wizard_v2({
            country: '[string]',
            type: 'Физическое лицо',
            registred: true,
            innFl: '[string]'
        }),

        __wizard_v2_blank_foreign_ul: 'визард участинка (тип 2) юрлицо, не РФ',
        wizard_v2_blank_foreign_ul: wizard_v2({
            country: '[string]',
            type: 'Юридическое лицо',
            registred: true,
            innUl: '[string]',
            kpp: '[string]'
        }),

        __wizard_v2_blank_foreign_unregistred_fl: 'визард участинка (тип 2) физлицо, не РФ, не состоит на учете',
        wizard_v2_blank_foreign_unregistred_fl: wizard_v2({
            country: '[string]',
            type: 'Физическое лицо',
            registred: false
        }),

        __wizard_v2_blank_foreign_unregistred_ul: 'визард участинка (тип 2) юрлицо, не РФ, не состоит на учете',
        wizard_v2_blank_foreign_unregistred_ul: wizard_v2({
            country: '[string]',
            type: 'Юридическое лицо',
            registred: false
        }),


        __add_contact_person_blank: 'добавление контактного лица',
        add_contact_person_blank: add_contact_person({
            patronymic: '[string]',
            name: '[string]',
            phone: '[string]',
            phoneType: '[string]',
            email: '[string]'
        }),

        __add_contact_info_blank: 'добавление контактной информации',
        add_contact_info_blank: add_contact_info({
            address: '[string]',
            time: '[string]',
            phone: '[string]',
            email: '[string]',
            surname: '[string]',
            name: '[string]',
            patronymic: '[string]'
        }),

        __add_checking_account_blank: 'добавление расчетного счета',
        add_checking_account_blank: add_checking_account({
            account: '[string]',
            bik: '[string]'
        }),

        __add_personal_account_blank: 'добавление лицевого счета',
        add_personal_account_blank: add_personal_account({
            account: '[string]',
            cheking: '[string]'
        }),

        __add_trust_managment_account_blank: 'добавление счета доверительного управления',
        add_trust_managment_account_blank: add_trust_managment_account({
            account: '[string]',
            bik: '[string]'
        }),

        __add_organization_contract_blank: 'добавление контракта со специализированной организацией',
        add_organization_contract_blank: add_organization_contract({
            contract: '[string]',
            organization: '[string]'
        }),


        __new_grbs_blank: 'создание нового ГРБС',
        new_grbs_blank: new_grbs({
            name: '[string]',
            wizard: {
                innUl: '[string]',
                kpp: '[string]'
            },
            contact_person: {
                patronymic: '[string]',
                name: '[string]',
                phone: '[string]',
                phoneType: '[string]',
                email: '[string]'
            },
            checking_account: {
                account: '[string]',
                bik: '[string]'
            },
            personal_account: {
                account: '[string]',
                cheking: '[string]'
            }
        }),

        __new_customer_blank: 'создание нового заказчика',
        new_customer_blank: new_customer({
            name: '[string]',
            wizard: {
                innUl: '[string]',
                kpp: '[string]'
            },
            contact_person: {
                patronymic: '[string]',
                name: '[string]',
                phone: '[string]',
                phoneType: '[string]',
                email: '[string]'
            },
            checking_account: {
                account: '[string]',
                bik: '[string]'
            },
            personal_account: {
                account: '[string]',
                cheking: '[string]'
            },
            trust_managment_account: {
                account: '[string]',
                bik: '[string]'
            },
            organization_contract: {
                contract: '[string]',
                organization: '[string]'
            }
        }),

        __new_expert_blank: 'создание нового эксперта',
        new_expert_blank: new_expert({
            name: '[string]',
            wizard: {
                country: 'Российская Федерация',
                innUl: '[string]',
                kpp: '[string]'
            },
            contact_person: {
                patronymic: '[string]',
                name: '[string]',
                phone: '[string]',
                phoneType: '[string]',
                email: '[string]'
            },
            checking_account: {
                account: '[string]',
                bik: '[string]'
            },
            personal_account: {
                account: '[string]',
                cheking: '[string]'
            },
        }),

        __new_participant_regulator_blank: 'создание нового регулирующего органа',
        new_participant_regulator_blank: new_participant_regulator({
            name: '[string]',
            wizard: {
                innUl: '[string]',
                kpp: '[string]'
            },
            contact_person: {
                patronymic: '[string]',
                name: '[string]',
                phone: '[string]',
                phoneType: '[string]',
                email: '[string]'
            },
            checking_account: {
                account: '[string]',
                bik: '[string]'
            },
            personal_account: {
                account: '[string]',
                cheking: '[string]'
            }
        }),

        __new_controller_blank: 'создание нового контролирующего органа',
        new_controller_blank: new_controller({
            name: '[string]',
            wizard: {
                innUl: '[string]',
                kpp: '[string]'
            },
            contact_person: {
                patronymic: '[string]',
                name: '[string]',
                phone: '[string]',
                phoneType: '[string]',
                email: '[string]'
            },
            checking_account: {
                account: '[string]',
                bik: '[string]'
            },
            personal_account: {
                account: '[string]',
                cheking: '[string]'
            }
        }),

        __new_special_blank: 'создание новой специализированной организации',
        new_special_blank: new_special({
            name: '[string]',
            wizard: {
                country: 'Российская Федерация',
                innUl: '[string]',
                kpp: '[string]'
            },
            contact_person: {
                patronymic: '[string]',
                name: '[string]',
                phone: '[string]',
                phoneType: '[string]',
                email: '[string]'
            },
            checking_account: {
                account: '[string]',
                bik: '[string]'
            },
            personal_account: {
                account: '[string]',
                cheking: '[string]'
            }
        }),

        __new_authority_blank: 'создание нового уполномоченного органа',
        new_authority_blank: new_authority({
            name: '[string]',
            wizard: {
                innUl: '[string]',
                kpp: '[string]'
            },
            contact_person: {
                patronymic: '[string]',
                name: '[string]',
                phone: '[string]',
                phoneType: '[string]',
                email: '[string]'
            },
            checking_account: {
                account: '[string]',
                bik: '[string]'
            },
            personal_account: {
                account: '[string]',
                cheking: '[string]'
            }
        }),

        __new_supplier_blank: 'создание нового поставщика',
        new_supplier_blank: new_supplier({
            name: '[string]',
            wizard: {
                country: 'Российская Федерация',
                innUl: '[string]',
                kpp: '[string]'
            },
            contact_person: {
                patronymic: '[string]',
                name: '[string]',
                phone: '[string]',
                phoneType: '[string]',
                email: '[string]'
            },
            checking_account: {
                account: '[string]',
                bik: '[string]'
            },
            personal_account: {
                account: '[string]',
                cheking: '[string]'
            },
            trust_managment_account: {
                account: '[string]',
                bik: '[string]'
            },
            organization_contract: {
                contract: '[string]',
                organization: '[string]'
            }
        })
    }
};
