module.exports = function(callback) {
new $Feature('dist/features/nsi/participant/Создание, Удаление - ГРБС')
.Tag('Создание')
.Tag('Удаление')
.Tag('НСИ')
.Tag('Участники')
.Tag('ГРБС')

.Feature('ГРБС')

.Background('', new $Sequence()
.Given('Я логинюсь под пользователем "modifier"')
.Comment('перейти к разделу системы <string>')
.Comment('@@GotoSection[v1.0.0]')
.When('Я открываю раздел системы "НСИ"')
.Comment('перейти к подразделу системы <string>')
.Comment('@@GotoSubsection[v1.0.0]')
.Then('Я выбираю в меню "Участники", "ГРБС"')
.Then('Я ожидаю, что заголовок содержит "Список ГРБС"')

.Comment('Создаем ГРБС а затем удаляем его')
.Comment('<wiki-link>')
)
.Scenario('Создание', new $Sequence()

.When('Я нажимаю на кнопку создания')
.Then('Я заполняю поле "ИНН" новым кодом ИНН(ЮЛ) ""')
.Then('Я заполняю поле "КПП" текстом "123456789"')
.Then('Я нажимаю на кнопку подтверждения')
.Then('Я нажимаю на кнопку подтверждения')
.Then('Я ожидаю, что заголовок содержит "Создание ГРБС"')

.When('Я заполняю календарь "Дата постановки на учет в налоговом органе"')
.And('Я выбираю в поле с выпадающим списком "Организационно-правовая форма"')
.And('Я заполняю сгенерированный текстовый блок "Полное наименование", "ТЕСТОВЫЙ ГРБС"')
.And('Я заполняю сгенерированный текстовый блок "Краткое наименование", "ТЕСТОВЫЙ ГРБС"')
.And('Я заполняю поле "ОГРН" текстом "1234567890123"')
.And('Я выбираю в поле с выпадающим списком "Головная организация"')
.And('Я заполняю поле "Юридический адрес" текстом "LALALALALA"')

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

.And('Я скроллю наверх')
.And('Я нажимаю на кнопку сохранения')
.And('Я ожидаю, что заголовок содержит "Информация об ГРБС"')


.Comment('перейти к подразделу системы <string>')
.Comment('@@GotoSubsection[v1.0.0]')
.Then('Я выбираю в меню "Участники", "ГРБС"')
.Then('Я ожидаю, что заголовок содержит "Список ГРБС"')
.Then('Я заполняю фильтр "Полное наименование" сгенерированным тегом "ТЕСТОВЫЙ ГРБС"')
.And('Я жду 5 сек.')
.Then('Я ожидаю, что в списке будет элементов = 1')

.When('Я выбираю элемент таблицы под номером 1')
.And('Я нажимаю на кнопку удаления')
.And('Я нажимаю на кнопку подтверждения')
.And('Я жду 5 сек.')
.Then('Я ожидаю, что в списке будет элементов = 0')
)
.finalize(callback);
};