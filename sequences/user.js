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

//const user = new SnipetFile('user');

let newUserSeq = new Sequence()
    .then(button.create())
    .and(input.field().withName('Фамилия').withText('Иванов').inModal())
    .and(input.field().withName('Имя').withText('Иван').inModal())
    .and(input.field().withName('Отчество').withText('Иванович'))
    .and(input.field().withName('Номер СНИЛС').withSnils('12324234'))
    .and(input.field().withName('Подразделение').withText('Подразделение'))
    .then(button.withText('Нажмите чтобы выбрать').inModal())
    .and(clickTableTd.at(1).inModal())
    .then(button.select().inModal())
    .then(input.field().withName('Телефон').withText('1234567890').inModal())
    .and(input.field().withName('Должность').withText('Биг босс').inModal())
    .and(checkbox.withName('Руководитель').inModal())
    .and(input.field().withName('Email').withEmail('ТЕСТОВЫЙ EMAIL').inModal())
    .and(input.field().withName('Логин').withUcode('ЛОГИН').inModal())
    .and(checkbox.withName('Изменить пароль при следующем входе').inModal())
    .then(modalTab.withName('Присвоение ролей').inModal())
    .and(input.field().withName('Название').withText('тестовое название').inModal())
    .and(input.field().withName('Номер').withText('666').inModal())
    .and(input.field().withName('Срок').withText('01.02.2017').inModal())
    .and(input.field().withName('по').withText('01.02.2017').inModal())
    .and(input.field().withName('Дата документа').withText('01.02.2017').inModal())
    .and(file.withName('Загрузить документ').withValue('uploadFiles/test.jpg').inModal())
    .then(button.withText('Добавить роль').inModal())
    .and(button.select().inModal())
    .then(checkbox.withName('Для организации').inModal())
    .then(button.save().inModal())
    .then(button.close().inModal())
    .then(button.close().inModal())
    .then(input.filter().withName('Логин').withUcode('ЛОГИН'))
    .and(wait.seconds(5))
    .then(clickTableTd.at(1))
    .then(button.withText('Изменить пароль'))
    .and(input.field().withName('Пароль').withText('l9Ye9Da1Rn4Q').inModal())
    .and(input.field().withName('Подтверждение пароля').withText('l9Ye9Da1Rn4Q').inModal())
    .then(button.save().inModal())
    .then(button.close());
let newSelfRegUserSeq = new Sequence()
    .then(logout)
    .then(selfRegistration)
    .then(button.create())
    .and(input.field().withName('Фамилия').withText('Иванов'))
    .and(input.field().withName('Имя').withText('Иван'))
    .and(input.field().withName('Отчество').withText('Иванович'))
    .and(input.field().withName('Номер СНИЛС').withSnils('12324234'))
    .and(input.field().withName('Подразделение').withText('Подразделение'))
    .then(button.withText('Не задано'))
    .and(clickTableTd.at(1).inModal())
    .then(button.select().inModal())
    .then(input.field().withName('Телефон').withText('1234567890'))
    .and(input.field().withName('Должность').withText('Биг босс'))
    .and(checkbox.withName('Руководитель'))
    .and(input.field().withName('Email').withEmail('ТЕСТОВЫЙ EMAIL'))
    .then(button.withText('Далее'))
    .and(input.field().withName('Название').withText('тестовое название'))
    .and(input.field().withName('Номер').withText('666'))
    .and(input.field().withName('Срок').withText('01.02.2017'))
    .and(input.field().withName('по').withText('01.02.2017'))
    .and(input.field().withName('Дата документа').withText('01.02.2017'))
    .then(file.withName('Загрузить документ').withValue('uploadFiles/test.jpg'))
    .and(button.withText('Добавить полномочия'))
    .then(button.select().inModal())
    .then(checkbox.withName('Для организации'))
    .then(button.withText('Далее'))
    .then(button.withText('Подтвердить и зарегистрироваться'))
    .then(button.close())
    .then(login.asUser('modifier'));
let newUserUpdateSeq = new Sequence()
    .when(section.withName('Личный кабинет'))
    .then(link.withText('Создать заявку на изменение данных'))
    .comment('<-- изменение нужных полей -->')
    .then(button.withName('Далее'))
    .then(button.withName('Далее'))
    .then(button.withName('Отправить заявку на изменение данных'))
    .and(textarea.withName('Причина внесения изменений').withText('причина внесения изменений'))
    .then(button.withText('Сохранить и отправить'));
let newUserUpdateNewSeq = new Sequence()
    .comment('создание новго пользователя')
    .append(newUserSeq)
    .then(logout)
    .comment('логин под новым пользователем')
    .then(login.asUser('ЛОГИН').generated())
    .comment('создание заявки')
    .append(newUserUpdateSeq)
    .then(logout)
    .comment('логин под модифаером')
    .then(login.asUser('modifier'));

/*
user.domain('.source.feature')
    .comment('новый пользователь')
    .add({
        name: `new-user`,
        prefix: `new-user`,
        description: `Новый пользователь`,
        body: newUserSeq.content()
    })

    .comment('новый пользователь (саморегистрация)')
    .add({
        name: `new-user-selfregister`,
        prefix: `new-user-selfregister`,
        description: `Новый пользователь(саморегистрация)`,
        body: newSelfRegUserSeq.content()
    })

    .comment('новая заявка на изменение пользователя(существующий пользователь)')
    .add({
        name: `new-user-update-current`,
        prefix: `new-user-update-current`,
        description: `Новая заявка на изменение пользователя(существующий пользователь)`,
        body: newUserUpdateSeq.content()
    })

    .comment('новая заявка на изменение пользователя(новый пользователь)')
    .add({
        name: `new-user-update-new`,
        prefix: `new-user-update-new`,
        description: `Новая заявка на изменение пользователя(новый пользователь)`,
        body: newUserUpdateNewSeq.content()
    })

    .finalize();
*/

module.exports = {
    newUserSeq: newUserSeq,
    newSelfRegUserSeq: newSelfRegUserSeq,
    newUserUpdateSeq: newUserUpdateSeq,
    newUserUpdateNewSeq: newUserUpdateNewSeq
};
