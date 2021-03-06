module.exports = function(callback) {
new $Feature('dist/features/bktz/criteria/Создание, Изменение, Удаление - Предельная величина значимости критериев')
.Tag('Создание')
.Tag('Удаление')
.Tag('Редактирование')
.Tag('БКТЗ')
.Tag('Критерии-оценки')
.Tag('Предельные-величины-значимости-критериев-оценки')

.Feature('Предельная величина значимости')

.Comment('1) предельная величина должна быть создана')
.Comment('<wikilink>')
.Background('', new $Sequence()

.Given('Я логинюсь под пользователем "modifier"')
.Comment('перейти к разделу системы Библиотека типовой документации')
.Comment('@@GotoSection[v1.0.0]')
.When('Я открываю раздел системы "Библиотека типовой документации"')
.Comment('перейти к подразделу системы Предельные величины значимости критериев оценки')
.Comment('@@GotoSubsection[v1.0.0]')
.Then('Я выбираю в меню "Критерии оценки", "Предельные величины значимости критериев оценки"')
.Then('Я ожидаю, что заголовок содержит "Список предельных величин значимости критериев оценки"')

.When('Я нажимаю на кнопку создания')
.Then('Я заполняю поле "Тип предмета закупки" сгенерированным тегом "ТЕСТОВАЯ ПРЕДЕЛЬНАЯ ВЕЛИЧИНА"')
.And('Я заполняю поле "Максимальная значимость нестоимостных критериев оценки (%)" текстом "75"')
.And('Я заполняю поле "Минимальная значимость стоимостных критериев оценки (%)" текстом "25"')
.And('Я заполняю календарь "Дата начала действия", "01.01.2017"')
.Then('Я нажимаю на кнопку сохранения')
.Then('Я ожидаю, что заголовок содержит "Информация о предельной величине значимости критериев оценки"')

.Comment('1) предельная величина должна находится по наименованию')
.Comment('2) предельная величина должна удалятся без ошибок')
.Comment('3) предельная величина не должна находится по наименованию после удаления')
.Comment('<wikilink>')
)
.Scenario('Удаление', new $Sequence()

.Comment('перейти к подразделу системы Предельные величины значимости критериев оценки')
.Comment('@@GotoSubsection[v1.0.0]')
.Then('Я выбираю в меню "Критерии оценки", "Предельные величины значимости критериев оценки"')
.Then('Я ожидаю, что заголовок содержит "Список предельных величин значимости критериев оценки"')

.When('Я заполняю фильтр "Тип предмета закупки" сгенерированным тегом "ТЕСТОВАЯ ПРЕДЕЛЬНАЯ ВЕЛИЧИНА"')
.And('Я жду 5 сек.')
.Then('Я ожидаю, что в списке будет элементов = 1')

.When('Я выбираю элемент таблицы под номером 1')
.And('Я нажимаю на кнопку удаления')
.And('Я нажимаю на кнопку подтверждения')
.And('Я жду 5 сек.')
.Then('Я ожидаю, что в списке будет элементов = 0')

.Comment('1) наименование предельной величины должено изменится')
.Comment('2) предельная величина не должна находится по старому наименованию')
.Comment('3) предельная величина должна находится по новому наименованию')
.Comment('<wikilink>')
)
.Scenario('Изменение', new $Sequence()

.Comment('перейти к подразделу системы Предельные величины значимости критериев оценки')
.Comment('@@GotoSubsection[v1.0.0]')
.Then('Я выбираю в меню "Критерии оценки", "Предельные величины значимости критериев оценки"')
.Then('Я ожидаю, что заголовок содержит "Список предельных величин значимости критериев оценки"')

.When('Я заполняю фильтр "Тип предмета закупки" сгенерированным тегом "ТЕСТОВАЯ ПРЕДЕЛЬНАЯ ВЕЛИЧИНА"')
.Then('Я ожидаю, что в списке будет элементов = 1')
.Then('Я нажимаю на сгенерированную ссылку "ТЕСТОВАЯ ПРЕДЕЛЬНАЯ ВЕЛИЧИНА"')
.When('Я ожидаю, что заголовок содержит "Информация о предельной величине значимости критериев оценки"')
.Then('Я нажимаю на кнопку редактирования')
.And('Я заполняю поле "Тип предмета закупки" сгенерированным тегом "ИЗМЕНЕННАЯ ТЕСТОВАЯ ПРЕДЕЛЬНАЯ ВЕЛИЧИНА"')
.And('Я нажимаю на кнопку сохранения')

.Comment('перейти к подразделу системы Предельные величины значимости критериев оценки')
.Comment('@@GotoSubsection[v1.0.0]')
.Then('Я выбираю в меню "Критерии оценки", "Предельные величины значимости критериев оценки"')
.Then('Я ожидаю, что заголовок содержит "Список предельных величин значимости критериев оценки"')

.When('Я заполняю фильтр "Тип предмета закупки" сгенерированным тегом "ТЕСТОВАЯ ПРЕДЕЛЬНАЯ ВЕЛИЧИНА"')
.And('Я жду 5 сек.')
.Then('Я ожидаю, что в списке будет элементов = 0')

.When('Я заполняю фильтр "Тип предмета закупки" сгенерированным тегом "ИЗМЕНЕННАЯ ТЕСТОВАЯ ПРЕДЕЛЬНАЯ ВЕЛИЧИНА"')
.And('Я жду 5 сек.')
.Then('Я ожидаю, что в списке будет элементов = 1')
)
.finalize(callback);
};