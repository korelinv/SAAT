module.exports = function(callback) {
new $Feature('dist/features/nsi/reference/Создание, Удаление - Рубрикатор НПСИ')
.Tag('Создание')
.Tag('Удаление')
.Tag('НСИ')
.Tag('Справочники')
.Tag('Рубрикатор-НПСИ')

.Feature('Рубрикатор НПСИ')

.Background('', new $Sequence()
.Given('Я логинюсь под пользователем "modifier"')

.Comment('Создаем в справочнике рубрикатор нпси и потом удаляем его')
.Comment('<wiki-link>')
)
.Scenario('Создание и удаление', new $Sequence()
.When('Я открываю раздел системы "НСИ"')
.And('Я выбираю в меню "Справочники", "Рубрикатор НПСИ"')
.Then('Я ожидаю, что заголовок содержит "Список Рубрикатор НПСИ"')

.When('Я нажимаю на кнопку создания')
.And('Я выбираю в поле с выпадающим списком "Вышестоящий рубрикатор"')
.And('Я заполняю поле "Название рубрикатора" сгенерированным тегом "ТЕСТОВЫЙ РУБРИКАТОР"')
.And('Я скроллю наверх')
.And('Я нажимаю на кнопку сохранения')
.Then('Я ожидаю, что заголовок содержит "Информация о НПСИ"')

.When('Я выбираю в меню "Справочники", "Рубрикатор НПСИ"')
.Then('Я ожидаю, что заголовок содержит "Список Рубрикатор НПСИ"')

.When('Я заполняю фильтр "Название рубрикатора" сгенерированным тегом "ТЕСТОВЫЙ РУБРИКАТОР"')
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