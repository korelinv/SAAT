module.exports = function(callback) {
new $Feature('dist/features/bktz/criteria/Создание, Изменение, Удаление - Типовой критерий')
.Tag('Создание')
.Tag('Удаление')
.Tag('Редактирование')
.Tag('БКТЗ')
.Tag('Критерии-оценки')
.Tag('Типовые-критерии')

.Feature('Типовой критерий')

.Comment('1) типовой критерий должен быть создан')
.Comment('<wikilink>')
.Background('', new $Sequence()

.Given('Я логинюсь под пользователем "modifier"')
.Comment('перейти к разделу системы Библиотека типовой документации')
.Comment('@@GotoSection[v1.0.0]')
.When('Я открываю раздел системы "Библиотека типовой документации"')
.Comment('перейти к подразделу системы Список типовых критериев оценки')
.Comment('@@GotoSubsection[v1.0.0]')
.Then('Я выбираю в меню "Критерии оценки", "Типовые критерии"')
.Then('Я ожидаю, что заголовок содержит "Список типовых критериев оценки"')

.When('Я нажимаю на кнопку создания')
.Then('Я заполняю поле "Наименование критерия оценки" сгенерированным тегом "ТЕСТОВЫЙ ТИПОВОЙ КРИТЕРИЙ"')
.And('Я выбираю в поле с выпадающим списком "Тип критерия оценки"')
.Then('Я нажимаю на кнопку сохранения')
.Then('Я ожидаю, что заголовок содержит "Информация о критерии оценки"')

.Comment('1) типовой критерий должен находится по наименованию')
.Comment('2) типовой критерий должен удалятся без ошибок')
.Comment('3) типовой критерий не должен находится по наименованию после удаления')
.Comment('<wikilink>')
)
.Scenario('Удаление', new $Sequence()

.Comment('перейти к подразделу системы Список типовых критериев оценки')
.Comment('@@GotoSubsection[v1.0.0]')
.Then('Я выбираю в меню "Критерии оценки", "Типовые критерии"')
.Then('Я ожидаю, что заголовок содержит "Список типовых критериев оценки"')

.When('Я заполняю фильтр "Наименование критерия оценки" сгенерированным тегом "ТЕСТОВЫЙ ТИПОВОЙ КРИТЕРИЙ"')
.And('Я жду 5 сек.')
.Then('Я ожидаю, что в списке будет элементов = 1')

.When('Я выбираю элемент таблицы под номером 1')
.And('Я нажимаю на кнопку удаления')
.And('Я нажимаю на кнопку подтверждения')
.And('Я жду 5 сек.')
.Then('Я ожидаю, что в списке будет элементов = 0')

.Comment('1) наименование типового критерия должено изменится')
.Comment('2) типовой критерий не должен находится по старому наименованию')
.Comment('3) типовой критерий должен находится по новому наименованию')
.Comment('<wikilink>')
)
.Scenario('Изменение', new $Sequence()

.Comment('перейти к подразделу системы Список типовых критериев оценки')
.Comment('@@GotoSubsection[v1.0.0]')
.Then('Я выбираю в меню "Критерии оценки", "Типовые критерии"')
.Then('Я ожидаю, что заголовок содержит "Список типовых критериев оценки"')

.When('Я заполняю фильтр "Наименование критерия оценки" сгенерированным тегом "ТЕСТОВЫЙ ТИПОВОЙ КРИТЕРИЙ"')
.Then('Я ожидаю, что в списке будет элементов = 1')
.Then('Я нажимаю на сгенерированную ссылку "ТЕСТОВЫЙ ТИПОВОЙ КРИТЕРИЙ"')
.When('Я ожидаю, что заголовок содержит "Информация о критерии оценки"')
.Then('Я нажимаю на кнопку редактирования')
.And('Я заполняю поле "Наименование критерия оценки" сгенерированным тегом "ИЗМЕНЕННЫЙ ТЕСТОВЫЙ ТИПОВОЙ КРИТЕРИЙ"')
.And('Я нажимаю на кнопку сохранения')

.Comment('перейти к подразделу системы Список типовых критериев оценки')
.Comment('@@GotoSubsection[v1.0.0]')
.Then('Я выбираю в меню "Критерии оценки", "Типовые критерии"')
.Then('Я ожидаю, что заголовок содержит "Список типовых критериев оценки"')

.When('Я заполняю фильтр "Наименование критерия оценки" сгенерированным тегом "ТЕСТОВЫЙ ТИПОВОЙ КРИТЕРИЙ"')
.And('Я жду 5 сек.')
.Then('Я ожидаю, что в списке будет элементов = 0')

.When('Я заполняю фильтр "Наименование критерия оценки" сгенерированным тегом "ИЗМЕНЕННЫЙ ТЕСТОВЫЙ ТИПОВОЙ КРИТЕРИЙ"')
.And('Я жду 5 сек.')
.Then('Я ожидаю, что в списке будет элементов = 1')
)
.finalize(callback);
};