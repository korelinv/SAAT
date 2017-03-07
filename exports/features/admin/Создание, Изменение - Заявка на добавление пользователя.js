module.exports = function(callback) {
new $Feature('dist/features/admin/Создание, Изменение - Заявка на добавление пользователя')
.Tag('Создание')
.Tag('Изменение')
.Tag('Управление-пользователями')
.Tag('Заявки-на-добавление-пользователей')
.Tag('Саморегистрация')

.Feature('Заявки на добавление пользователей')

.Comment(' 1) заявка должна быть создана без ошибок')
.Comment(' 2) измененные данные заявки должны сохраниться')
.Comment(' 3) заявка не должна находиться по старым данным')
.Comment(' 4) заявка должна находиться по новым данным')
.Comment('<wikilink>')
.Scenario('Создание и изменение', new $Sequence()

.Given('Я перехожу к форме саморегистрации')
.And('Я заполняю поле "Фамилия" уникальным кодом "НОВАЯ ЗАЯВКА"')
.And('Я заполняю поле "Имя" текстом "Иван"')
.And('Я заполняю поле "Отчество" текстом "Иванович"')
.And('Я заполняю поле "Номер СНИЛС" новым кодом СНИЛС "12324234"')
.And('Я заполняю поле "Подразделение" текстом "Подразделение"')

.Comment(' выбор организации пользователя')
.When('Я нажимаю на кнопку с текстом "Не задано"')
.Then('Я заполняю фильтр "Полное наименование" текстом "Правительство Москвы" модального окна')
.Then('Я выбираю элемент таблицы под номером 1 модального окна')
.Then('Я нажимаю на кнопку выбора модального окна')

.And('Я заполняю поле "Телефон" текстом "1234567890"')
.And('Я заполняю поле "Должность" текстом "Биг босс"')
.Comment(' And Я кликаю по чекбоксу "Руководитель"')
.And('Я заполняю поле "Email" уникальным email\'ом "ТЕСТОВЫЙ EMAIL"')
.Then('Я нажимаю на кнопку с текстом "Далее"')

.And('Я заполняю поле "Название" текстом "тестовое название"')
.And('Я заполняю поле "Номер" текстом "666"')
.And('Я заполняю поле "Срок действия с" текстом "01.01.2017"')
.And('Я заполняю поле "по" текстом "01.02.2017"')
.And('Я заполняю поле "Дата документа" текстом "01.01.2017"')
.And('Я загружаю файл "uploadFiles/test.jpg" в поле "Загрузить документ"')
.And('Я нажимаю на кнопку с текстом "Добавить полномочия"')
.And('Я выбираю элемент таблицы под номером 1 модального окна')
.Then('Я нажимаю на кнопку выбора модального окна')
.Then('Я кликаю по чекбоксу "Для организации"')
.Then('Я нажимаю на кнопку с текстом "Далее"')
.Then('Я нажимаю на кнопку с текстом "Подтвердить и зарегистрироваться"')
.Then('Я нажимаю на кнопку закрытия')

.Then('Я логинюсь под пользователем "modifier"')
.Comment('перейти к разделу системы Управление пользователями')
.Comment('@@GotoSection[v1.0.0]')
.When('Я открываю раздел системы "Управление пользователями"')
.Comment('перейти к подразделу системы Заявки на добавление пользователей')
.Comment('@@GotoSubsection[v1.0.0]')
.Then('Я выбираю в меню "Заявки на добавление пользователей"')
.Then('Я ожидаю, что заголовок содержит "Заявки на добавление пользователей"')

.Then('Я заполняю фильтр "Фамилия" уникальным кодом "НОВАЯ ЗАЯВКА"')
.And('Я жду 5 сек.')
.Then('Я выбираю элемент таблицы под номером 1')
.Then('Я нажимаю на кнопку редактирования')
.And('Я заполняю поле "Фамилия" уникальным кодом "ИЗМЕНЕННАЯ НОВАЯ ЗАЯВКА" модального окна')
.Then('Я нажимаю на кнопку сохранения модального окна')
.Then('Я нажимаю на кнопку закрытия')

.Then('Я заполняю фильтр "Фамилия" уникальным кодом "НОВАЯ ЗАЯВКА"')
.And('Я жду 5 сек.')
.Then('Я ожидаю, что в списке будет элементов = 0')

.Then('Я заполняю фильтр "Фамилия" уникальным кодом "ИЗМЕНЕННАЯ НОВАЯ ЗАЯВКА"')
.And('Я жду 5 сек.')
.Then('Я ожидаю, что в списке будет элементов = 1')
)
.finalize(callback);
};