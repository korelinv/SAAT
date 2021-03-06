module.exports = function(callback) {
new $Feature('dist/features/comission/Создание, Удаление - Комиссия')
.Tag('Создание')
.Tag('Удаление')
.Tag('Комиссии')
.Tag('Комиссии-подраздел')

.Feature('Комиссии')

.Background('', new $Sequence()
.Given('Я логинюсь под пользователем "modifier"')

.When('Я открываю раздел системы "Комиссии"')
.And('Я выбираю в меню "Комиссии", "Приказы"')
.Then('Я ожидаю, что заголовок содержит "Список приказов"')

.When('Я нажимаю на кнопку создания')
.And('Я заполняю поле "Наименование" сгенерированным тегом "ТЕСТОВЫЙ ПРИКАЗ ДЛЯ КОМИССИИ"')
.And('Я заполняю поле "Номер приказа" сгенерированным тегом "666"')
.And('Я выбираю значение "Департамент города Москвы по конкурентной политике" в поле с выпадающим списком "Организация (владелец комиссии)"')
.And('Я кликаю по чекбоксу "Приказ/комиссия первого уровня"')
.And('Я загружаю файл "uploadFiles/test.jpg" в поле "Текст приказа"')
.And('Я заполняю календарь "Дата начала полномочий приказа", "27.11.2016"')
.And('Я заполняю календарь "Дата приказа", "25.11.2016"')

.And('Я скроллю до блока "Список членов комиссии"')
.And('Я нажимаю на кнопку создания')
.And('Я выбираю элемент таблицы под номером 1 в поле "Пользователь"')
.When('Я нажимаю на кнопку с названием "Сохранение Создание члена комиссии"')
.Then('Я ожидаю, что в списке "Список членов комиссии" будет элементов = 1')

.And('Я скроллю до блока "Список членов комиссии"')
.And('Я нажимаю на кнопку создания')
.And('Я выбираю элемент таблицы под номером 1 в поле "Пользователь"')
.When('Я нажимаю на кнопку с названием "Сохранение Создание члена комиссии"')
.Then('Я ожидаю, что в списке "Список членов комиссии" будет элементов = 2')

.And('Я скроллю до блока "Список членов комиссии"')
.And('Я нажимаю на кнопку создания')
.And('Я выбираю элемент таблицы под номером 1 в поле "Пользователь"')
.When('Я нажимаю на кнопку с названием "Сохранение Создание члена комиссии"')
.Then('Я ожидаю, что в списке "Список членов комиссии" будет элементов = 3')

.And('Я скроллю до блока "Список членов комиссии"')
.And('Я нажимаю на кнопку создания')
.And('Я выбираю элемент таблицы под номером 1 в поле "Пользователь"')
.When('Я нажимаю на кнопку с названием "Сохранение Создание члена комиссии"')
.Then('Я ожидаю, что в списке "Список членов комиссии" будет элементов = 4')

.And('Я скроллю до блока "Список членов комиссии"')
.And('Я нажимаю на кнопку создания')
.And('Я выбираю элемент таблицы под номером 1 в поле "Пользователь"')
.When('Я нажимаю на кнопку с названием "Сохранение Создание члена комиссии"')
.Then('Я ожидаю, что в списке "Список членов комиссии" будет элементов = 5')

.And('Я скроллю наверх')
.And('Я нажимаю на кнопку сохранения')
.Then('Я ожидаю, что заголовок содержит "Информация о приказе"')

.Comment('Создаем Комиссию, потом ищем его в таблице и удаляем')
.Comment('https://wiki.proitr.ru/pages/viewpage.action?pageId=126192776')
)
.Scenario('Создание и удаление', new $Sequence()
  
.When('Я выбираю в меню "Комиссии", "Комиссии"')
.Then('Я ожидаю, что заголовок содержит "Список комиссий"')

.When('Я нажимаю на кнопку создания')
.And('Я заполняю поле "Наименование" сгенерированным тегом "ТЕСТОВАЯ КОМИССИЯ"')
.And('Я выбираю сгенерированный тег "ТЕСТОВЫЙ ПРИКАЗ ДЛЯ КОМИССИИ" в поле с выпадающим списком "Приказ"')
.And('Я выбираю значение "Единая" в поле с выпадающим списком "Тип"')
.And('Я выбираю в поле с выпадающим списком "Организация (владелец комиссии)"')

.Then('Я нажимаю на кнопку с названием "Создание Члены комиссии"')
.Then('Я выбираю значение "Председатель" в поле с выпадающим списком "Роль"')
.Then('Я выбираю в поле с выпадающим списком "ФИО"')
.Then('Я нажимаю на кнопку с названием "Сохранение Создание члена комиссии"')

.Then('Я нажимаю на кнопку с названием "Создание Члены комиссии"')
.Then('Я выбираю значение "Секретарь с правом голоса" в поле с выпадающим списком "Роль"')
.Then('Я выбираю в поле с выпадающим списком "ФИО"')
.Then('Я нажимаю на кнопку с названием "Сохранение Создание члена комиссии"')

.Then('Я нажимаю на кнопку с названием "Создание Члены комиссии"')
.Then('Я выбираю значение "Член комиссии" в поле с выпадающим списком "Роль"')
.Then('Я выбираю в поле с выпадающим списком "ФИО"')
.Then('Я нажимаю на кнопку с названием "Сохранение Создание члена комиссии"')

.Then('Я нажимаю на кнопку с названием "Создание Члены комиссии"')
.Then('Я выбираю значение "Член комиссии" в поле с выпадающим списком "Роль"')
.Then('Я выбираю в поле с выпадающим списком "ФИО"')
.Then('Я нажимаю на кнопку с названием "Сохранение Создание члена комиссии"')

.Then('Я нажимаю на кнопку с названием "Создание Члены комиссии"')
.Then('Я выбираю значение "Член комиссии" в поле с выпадающим списком "Роль"')
.Then('Я выбираю в поле с выпадающим списком "ФИО"')
.Then('Я нажимаю на кнопку с названием "Сохранение Создание члена комиссии"')

.And('Я скроллю наверх')
.And('Я нажимаю на кнопку сохранения')
.Then('Я ожидаю, что заголовок содержит "Информация о комиссии"')

.When('Я выбираю в меню "Комиссии", "Комиссии"')
.Then('Я ожидаю, что заголовок содержит "Список комиссий"')

.When('Я заполняю фильтр "Наименование" сгенерированным тегом "ТЕСТОВАЯ КОМИССИЯ"')
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