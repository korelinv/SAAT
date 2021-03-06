module.exports = function(callback) {
new $Feature('dist/features/nsi/participant/Создание, Удаление - Регулирующий орган исполнительной власти')
.Tag('Создание')
.Tag('Удаление')
.Tag('НСИ')
.Tag('Участники')
.Tag('Регулирующий-орган-исполнительной-власти')

.Feature('Регулирующий орган исполнительной власти с обязательными полями.')

.Background('', new $Sequence()
.Given('Я логинюсь под пользователем "modifier"')

.Comment(' Создание регулирующего органа исполнительной власти с обязательными полями.')
.Comment(' https://wiki.proitr.ru/pages/viewpage.action?pageId=126196026')
)
.Scenario('Создание', new $Sequence()
.When('Я открываю раздел системы "НСИ"')
.And('Я выбираю в меню "Участники", "Регулирующие органы исполнительной власти"')
.Then('Я ожидаю, что заголовок содержит "Список регулирующих органов исполнительной власти"')

.When('Я нажимаю на кнопку создания')
.Then('Я заполняю поле "ИНН" новым кодом ИНН(ЮЛ) ""')
.Then('Я заполняю поле "КПП" текстом "123456789"')
.Then('Я нажимаю на кнопку подтверждения')
.Then('Я нажимаю на кнопку подтверждения')
.Then('Я ожидаю, что заголовок содержит "Создание регулирующего органа исполнительной власти"')

.When('Я заполняю календарь "Дата постановки на учет в налоговом органе"')
.And('Я выбираю в поле с выпадающим списком "Организационно-правовая форма"')
.And('Я заполняю сгенерированный текстовый блок "Полное наименование", "ТЕСТОВЫЙ РЕГУЛИРУЮЩИЙ ОРГАН"')
.And('Я заполняю сгенерированный текстовый блок "Краткое наименование", "ТЕСТОВЫЙ РЕГУЛИРУЮЩИЙ ОРГАН"')
.And('Я заполняю поле "ОГРН" текстом "1234567890123"')
.And('Я заполняю поле "Юридический адрес" текстом "LALALALALA"')

.And('Я заполняю поле "ОКПО" текстом "12345678"')
.And('Я выбираю в поле с выпадающим списком "ОКАТО"')
.And('Я выбираю в поле с выпадающим списком "ОКТМО"')
.And('Я выбираю в поле с выпадающим списком "ОКОГУ"')
.And('Я выбираю в поле с выпадающим списком "ОКВЭД"')

.And('Я заполняю поле "Место нахождения" текстом "121170 город Москва, пл Победы, дом 3Д"')

.And('Я заполняю блок Контактные лица "ЛАЛАЛАЛА", "ЛАЛАЛАЛА", "1234567890", "Бухгалтерия", "test@test.ru"')
.Then('Я ожидаю, что в списке "Контактные лица" будет элементов = 1')

.When('Я скроллю до блока "Расчетные счета"')
.And('Я нажимаю на кнопку с заголовком "Добавляет расчетный счет"')
.And('Я заполняю поле "Номер расчетного счета" текстом "123456789"')
.And('Я выбираю в поле с выпадающим списком "БИК"')
.And('Я кликаю по чекбоксу "Признак использования в контрактной системе"')
.And('Я скроллю до блока "Расчетные счета"')
.And('Я нажимаю на кнопку с названием "Сохранение Создание банковского реквизита"')
.Then('Я ожидаю, что в списке "Расчетные счета" будет элементов = 1')

.When('Я скроллю до блока "Лицевые счета"')
.And('Я нажимаю на кнопку с заголовком "Добавляет лицевой счет"')
.And('Я заполняю поле "Номер лицевого счета" текстом "123456789"')
.And('Я выбираю в поле с выпадающим списком "Номер расчетного счета"')
.And('Я кликаю по чекбоксу "Признак использования в контрактной системе"')
.And('Я скроллю до блока "Лицевые счета"')
.And('Я нажимаю на кнопку с названием "Сохранение Создание банковского реквизита"')
.Then('Я ожидаю, что в списке "Лицевые счета" будет элементов = 1')

.When('Я скроллю наверх')
.And('Я нажимаю на кнопку сохранения')
.And('Я ожидаю, что заголовок содержит "Информация о регулирующем органе исполнительной власти"')

.And('Я выбираю в меню "Участники", "Регулирующие органы исполнительной власти"')
.Then('Я ожидаю, что заголовок содержит "Список регулирующих органов исполнительной власти"')
.Then('Я заполняю фильтр "Полное наименование" сгенерированным тегом "ТЕСТОВЫЙ РЕГУЛИРУЮЩИЙ ОРГАН"')
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