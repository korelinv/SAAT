module.exports = function(callback) {
new $Feature('dist/features/bktz/libcontract/Изменение - Шаблон положения о закупках - статусная модель')
.Tag('Редактирование')
.Tag('БКТЗ')
.Tag('Библиотека-типовой-документации')
.Tag('Справочник-шаблонов-положений-о-закупках')
.Tag('Статусная-модель')

.Feature('Статусная модель шаблона положения о закупках')

.Comment('1) шаблон положения о закупках должен быть создан без ошибок')
.Background('Создание', new $Sequence()

.Given('Я логинюсь под пользователем "modifier"')

.When('Я открываю раздел системы "НСИ"')
.And('Я выбираю в меню "Участники", "Заказчики"')
.Then('Я ожидаю, что заголовок содержит "Список заказчиков"')

.When('Я нажимаю на кнопку создания')
.Then('Я заполняю поле "ИНН" новым кодом ИНН(ЮЛ) ""')
.Then('Я заполняю поле "КПП" текстом "123456789"')
.Then('Я нажимаю на кнопку подтверждения')
.Then('Я нажимаю на кнопку подтверждения')
.Then('Я ожидаю, что заголовок содержит "Создание заказчика"')
.When('Я заполняю календарь "Дата постановки на учет в налоговом органе"')
.And('Я выбираю в поле с выпадающим списком "Организационно-правовая форма"')
.And('Я заполняю сгенерированный текстовый блок "Полное наименование", "ТЕСТОВЫЙ ЗАКАЗЧИК"')
.And('Я заполняю сгенерированный текстовый блок "Краткое наименование", "ТЕСТОВЫЙ ЗАКАЗЧИК"')
.And('Я заполняю поле "ОГРН" текстом "1234567890123"')
.And('Я выбираю в поле с выпадающим списком "Головная организация"')
.And('Я заполняю поле "Юридический адрес" текстом "LALALALALA"')

.And('Я заполняю поле "Код по СПЗ" текстом "12345678901"')
.And('Я заполняю поле "УНК бюджетополучателя" текстом "123456"')
.And('Я выбираю в поле с выпадающим списком "ГРБС"')
.And('Я выбираю в поле с выпадающим списком "Управляющий орган в КС"')
.And('Я заполняю поле "ФИО контрактного управляющего / руководителя контрактной службы" текстом "ТЕСТОВОЕ ФИО"')
.And('Я заполняю поле "Телефон контрактного управляющего / руководителя контрактной службы" текстом "1234567890112344"')
.And('Я заполняю поле "E-MAIL контрактного управляющего / руководителя контрактной службы" текстом "test@test.ru"')

.And('Я заполняю поле "ОКПО" текстом "12345678"')
.And('Я выбираю в поле с выпадающим списком "ОКАТО"')
.And('Я выбираю в поле с выпадающим списком "ОКТМО"')
.And('Я выбираю в поле с выпадающим списком "ОКОГУ"')
.And('Я выбираю в поле с выпадающим списком "ОКВЭД"')

.And('Я заполняю поле "Место нахождения" текстом "121170 город Москва, пл Победы, дом 3Д"')
.And('Я заполняю поле "Факс" текстом "12312312313123123123"')

.And('Я заполняю блок Контактные лица "ЛАЛАЛАЛА", "ЛАЛАЛАЛА", "1234567890", "Бухгалтерия", "test@test.ru"')
.And('Я ожидаю, что в списке "Контактные лица" будет элементов = 1')

.And('Я скроллю до блока "Расчетные счета"')
.And('Я нажимаю на кнопку с заголовком "Добавляет расчетный счет"')
.And('Я заполняю поле "Номер расчетного счета" текстом "123456789"')
.And('Я выбираю в поле с выпадающим списком "БИК"')
.And('Я кликаю по чекбоксу "Признак использования в контрактной системе"')
.And('Я скроллю до блока "Расчетные счета"')
.And('Я нажимаю на кнопку с названием "Сохранение Создание банковского реквизита"')
.And('Я ожидаю, что в списке "Расчетные счета" будет элементов = 1')

.And('Я скроллю до блока "Лицевые счета"')
.And('Я нажимаю на кнопку с заголовком "Добавляет лицевой счет"')
.And('Я заполняю поле "Номер лицевого счета" текстом "123456789"')
.And('Я выбираю в поле с выпадающим списком "Номер расчетного счета"')
.And('Я кликаю по чекбоксу "Признак использования в контрактной системе"')
.And('Я скроллю до блока "Лицевые счета"')
.And('Я нажимаю на кнопку с названием "Сохранение Создание банковского реквизита"')
.And('Я ожидаю, что в списке "Лицевые счета" будет элементов = 1')

.And('Я скроллю до блока "Счета доверительного управления"')
.And('Я нажимаю на кнопку с заголовком "Добавляет счет доверительного управления"')
.And('Я заполняю поле "Номер счета доверительного управления" текстом "123456789"')
.And('Я выбираю в поле с выпадающим списком "БИК"')
.And('Я кликаю по чекбоксу "Признак использования в контрактной системе"')
.And('Я скроллю до блока "Счета доверительного управления"')
.And('Я нажимаю на кнопку с названием "Сохранение Создание банковского реквизита"')
.And('Я ожидаю, что в списке "Счета доверительного управления" будет элементов = 1')

.And('Я скроллю до блока "Контракты со специализированной организацией"')
.And('Я нажимаю на кнопку с названием "Создание Контракты со специализированной организацией"')
.And('Я заполняю поле "Номер контракта" текстом "123456789"')
.And('Я заполняю календарь "Дата контракта"')
.And('Я выбираю в поле с выпадающим списком "Специализированная организация"')
.And('Я заполняю календарь "Дата начала действия контракта"')
.And('Я заполняю календарь "Дата окончания действия контракта"')
.And('Я нажимаю на кнопку с названием "Сохранение Создание контракта со специализированной организацией"')
.And('Я ожидаю, что в списке "Контракты со специализированной организацией" будет элементов = 1')

.And('Я скроллю наверх')
.And('Я нажимаю на кнопку сохранения')
.And('Я ожидаю, что заголовок содержит "Информация о заказчике"')

.Comment('перейти к разделу системы Библиотека типовой документации')
.Comment('@@GotoAnotherSection[v1.0.0]')
.When('Я перехожу на главную страницу')
.Then('Я открываю раздел системы "Библиотека типовой документации"')

.Comment('перейти к подразделу системы Справочник шаблонов положений о закупках')
.Comment('@@GotoSubsection[v1.0.0]')
.Then('Я выбираю в меню "Библиотека типовой документации", "Справочник шаблонов положений о закупках"')
.Then('Я ожидаю, что заголовок содержит "Список шаблонов положений о закупках"')

.Then('Я нажимаю на кнопку создания')
.When('Я ожидаю, что заголовок содержит "Создание шаблона положения о закупках"')
.Then('Я заполняю поле "Наименование" сгенерированным тегом "ТЕСТОВЫЙ ШАБЛОН ПОЛОЖЕНИЯ О ЗАКУПКАХ"')
.And('Я выбираю сгенерированный тег "ТЕСТОВЫЙ ЗАКАЗЧИК" в поле с выпадающим списком "Заказчик"')
.And('Я нажимаю на кнопку сохранения')
.Then('Я ожидаю, что заголовок содержит "Информация о шаблоне положения о закупках"')


.Comment(' 1) шаблон положения о закупках должен перейти в статус "На утверждении"')
.Comment(' 2) шаблон положения о закупках должен перейти в статус "Утвержден"')
.Comment(' 3) шаблон положения о закупках должен перейти в статус "Архив"')
.Comment('<wikilink>')
)
.Scenario('Перевод шаблона до статуса "Архив"', new $Sequence()

.Then('Я нажимаю на кнопку с текстом "Отправить на утверждение"')
.Then('Я нажимаю на кнопку с текстом "Утвердить"')
.Then('Я нажимаю на кнопку с текстом "Отправить в архив"')

.Comment('перейти к подразделу системы Справочник шаблонов положений о закупках')
.Comment('@@GotoSubsection[v1.0.0]')
.Then('Я выбираю в меню "Библиотека типовой документации", "Справочник шаблонов положений о закупках"')
.Then('Я ожидаю, что заголовок содержит "Список шаблонов положений о закупках"')

.When('Я заполняю фильтр "Наименование" сгенерированным тегом "ТЕСТОВЫЙ ШАБЛОН ПОЛОЖЕНИЯ О ЗАКУПКАХ"')
.Then('Я выбираю опцию "Архив" фильтра "Статус"')
.And('Я жду 5 сек.')
.Then('Я ожидаю, что в списке будет элементов = 1')


.Comment(' 1) шаблон положения о закупках должен вернуться в статус "Проект"')
.Comment('<wikilink>')
)
.Scenario('Возвращение шаблона в статуст "Проект"', new $Sequence()

.Then('Я нажимаю на кнопку с текстом "Отправить на утверждение"')
.Then('Я нажимаю на кнопку с текстом "Вернуть в проект"')

.Comment('перейти к подразделу системы Справочник шаблонов положений о закупках')
.Comment('@@GotoSubsection[v1.0.0]')
.Then('Я выбираю в меню "Библиотека типовой документации", "Справочник шаблонов положений о закупках"')
.Then('Я ожидаю, что заголовок содержит "Список шаблонов положений о закупках"')

.When('Я заполняю фильтр "Наименование" сгенерированным тегом "ТЕСТОВЫЙ ШАБЛОН ПОЛОЖЕНИЯ О ЗАКУПКАХ"')
.And('Я жду 5 сек.')
.Then('Я ожидаю, что в списке будет элементов = 1')
)
.finalize(callback);
};