module.exports = function(callback) {
new $Feature('dist/features/nsi/reference/Создание, Удаление - Справочник документов НПСИ')
.Tag('Создание')
.Tag('Удаление')
.Tag('НСИ')
.Tag('Справочники')
.Tag('Справочник-документов-НПСИ')

.Feature('Справочник документов НПСИ')

.Background('', new $Sequence()
.Given('Я логинюсь под пользователем "modifier"')

.Comment('Создаем в справочнике справочник документов НПСИ и потом удаляем его')
.Comment('<wiki-link>')
)
.Scenario('Создание и удаление', new $Sequence()
.When('Я открываю раздел системы "НСИ"')
.And('Я выбираю в меню "Справочники", "Справочник документов НПСИ"')
.Then('Я ожидаю, что заголовок содержит "Список НПСИ"')

.When('Я нажимаю на кнопку создания')
.And('Я заполняю поле "Название документа" сгенерированным тегом "ТЕСТОВЫЙ СПРАВОЧНИК НПСИ"')
.And('Я заполняю календарь "Дата принятия"')
.And('Я заполняю календарь "Дата вступления в силу"')
.And('Я заполняю календарь "Дата публикации в Системе"')
.And('Я выбираю в поле с выпадающим списком "Рубрикатор НПСИ"')
.And('Я загружаю файл "uploadFiles/test.jpg" в поле "Документ"')
.And('Я скроллю наверх')
.And('Я нажимаю на кнопку сохранения')
.Then('Я ожидаю, что заголовок содержит "Информация о НПСИ"')

.When('Я выбираю в меню "Справочники", "Справочник документов НПСИ"')
.Then('Я ожидаю, что заголовок содержит "Список НПСИ"')

.When('Я заполняю фильтр "Название документа" сгенерированным тегом "ТЕСТОВЫЙ СПРАВОЧНИК НПСИ"')
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