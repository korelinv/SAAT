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

function newUser(args) {
    return new Sequence()
        .Then(button.create())
        .And(input.field().withName('Фамилия').withText('Иванов').inModal())
        .And(input.field().withName('Имя').withText('Иван').inModal())
        .And(input.field().withName('Отчество').withText('Иванович'))
        .And(input.field().withName('Номер СНИЛС').withSnils('12324234'))
        .And(input.field().withName('Подразделение').withText('Подразделение'))
        .Then(button.withText('Нажмите чтобы выбрать').inModal())
        .And(clickTableTd.at(1).inModal())
        .Then(button.select().inModal())
        .Then(input.field().withName('Телефон').withText('1234567890').inModal())
        .And(input.field().withName('Должность').withText('Биг босс').inModal())
        .And(checkbox.withName('Руководитель').inModal())
        .And(input.field().withName('Email').withEmail('ТЕСТОВЫЙ EMAIL').inModal())
        .And(input.field().withName('Логин').withUcode('ЛОГИН').inModal())
        .And(checkbox.withName('Изменить пароль при следующем входе').inModal())
        .Then(modalTab.withName('Присвоение ролей').inModal())
        .And(input.field().withName('Название').withText('тестовое название').inModal())
        .And(input.field().withName('Номер').withText('666').inModal())
        .And(input.field().withName('Срок').withText('01.02.2017').inModal())
        .And(input.field().withName('по').withText('01.02.2017').inModal())
        .And(input.field().withName('Дата документа').withText('01.02.2017').inModal())
        .And(file.withName('Загрузить документ').withValue('uploadFiles/test.jpg').inModal())
        .Then(button.withText('Добавить роль').inModal())
        .And(button.select().inModal())
        .Then(checkbox.withName('Для организации').inModal())
        .Then(button.save().inModal())
        .Then(button.close().inModal())
        .Then(button.close().inModal())
        .Then(input.filter().withName('Логин').withUcode('ЛОГИН'))
        .And(wait.seconds(5))
        .Then(clickTableTd.at(1))
        .Then(button.withText('Изменить пароль'))
        .And(input.field().withName('Пароль').withText('l9Ye9Da1Rn4Q').inModal())
        .And(input.field().withName('Подтверждение пароля').withText('l9Ye9Da1Rn4Q').inModal())
        .Then(button.save().inModal())
        .Then(button.close());
};

function newCreateRequest(args) {
    return new Sequence()
        .Then(logout)
        .Then(selfRegistration)
        .Then(button.create())
        .And(input.field().withName('Фамилия').withText('Иванов'))
        .And(input.field().withName('Имя').withText('Иван'))
        .And(input.field().withName('Отчество').withText('Иванович'))
        .And(input.field().withName('Номер СНИЛС').withSnils('12324234'))
        .And(input.field().withName('Подразделение').withText('Подразделение'))
        .Then(button.withText('Не задано'))
        .And(clickTableTd.at(1).inModal())
        .Then(button.select().inModal())
        .Then(input.field().withName('Телефон').withText('1234567890'))
        .And(input.field().withName('Должность').withText('Биг босс'))
        .And(checkbox.withName('Руководитель'))
        .And(input.field().withName('Email').withEmail('ТЕСТОВЫЙ EMAIL'))
        .Then(button.withText('Далее'))
        .And(input.field().withName('Название').withText('тестовое название'))
        .And(input.field().withName('Номер').withText('666'))
        .And(input.field().withName('Срок').withText('01.02.2017'))
        .And(input.field().withName('по').withText('01.02.2017'))
        .And(input.field().withName('Дата документа').withText('01.02.2017'))
        .Then(file.withName('Загрузить документ').withValue('uploadFiles/test.jpg'))
        .And(button.withText('Добавить полномочия'))
        .Then(button.select().inModal())
        .Then(checkbox.withName('Для организации'))
        .Then(button.withText('Далее'))
        .Then(button.withText('Подтвердить и зарегистрироваться'))
        .Then(button.close())
        .Then(login.asUser('modifier'));
};

function newUpdateRequest(args) {
    return new Sequence()
        .When(section.withName('Личный кабинет'))
        .Then(link.withText('Создать заявку на изменение данных'))
        .Then(button.withName('Далее'))
        .Then(button.withName('Далее'))
        .Then(button.withName('Отправить заявку на изменение данных'))
        .And(textarea.withName('Причина внесения изменений').withText('причина внесения изменений'))
        .Then(button.withText('Сохранить и отправить'));
};

module.exports = {
    new_user: newUser,
    new_create_request: newCreateRequest,
    new_update_request: newUpdateRequest,

    new_user_blank: newUser({}),
    new_create_request_blank: newCreateRequest({}),
    new_update_request_blank: newUpdateRequest({})
};
