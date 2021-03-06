module.exports = function(callback) {
new $Feature('dist/features/admin/Создание, Изменение - Заявка на изменение пользователя')
.Tag('Создание')
.Tag('Изменение')
.Tag('Управление-пользователями')
.Tag('Заявки-на-изменение-пользователей')

.Feature('Заявки на изменение пользователей')

.Comment(' 1) должен быть создан пользователь')
.Comment(' 2) система должна дать авторизоваться под новым пользователем')
.Comment(' 3) должна быть создана заявка на изменение данных нового пользователя')
.Background('', new $Sequence()

.Given('Я логинюсь под пользователем "modifier"')
.Comment('перейти к разделу системы Управление пользователями')
.Comment('@@GotoSection[v1.0.0]')
.When('Я открываю раздел системы "Управление пользователями"')
.Comment('перейти к подразделу системы Пользователи')
.Comment('@@GotoSubsection[v1.0.0]')
.Then('Я выбираю в меню "Пользователи"')
.Then('Я ожидаю, что заголовок содержит "Пользователи"')

.Then('Я нажимаю на кнопку создания')
.And('Я заполняю поле "Фамилия" текстом "Иванов" модального окна')
.And('Я заполняю поле "Имя" текстом "Иван" модального окна')
.And('Я заполняю поле "Отчество" текстом "Иванович" модального окна')
.And('Я заполняю поле "Номер СНИЛС" новым кодом СНИЛС "12324234" модального окна')
.And('Я заполняю поле "Подразделение" текстом "Подразделение" модального окна')

.Comment(' выбор организации пользователя')
.When('Я нажимаю на кнопку с текстом "Нажмите чтобы выбрать" модального окна')
.Then('Я заполняю фильтр "Полное наименование" текстом "Правительство Москвы" модального окна')
.Then('Я выбираю элемент таблицы под номером 1 модального окна')
.Then('Я нажимаю на кнопку выбора модального окна')

.And('Я заполняю поле "Телефон" текстом "1234567890" модального окна')
.And('Я заполняю поле "Должность" текстом "Биг босс" модального окна')
.Comment('And Я кликаю по чекбоксу "Руководитель" модального окна')
.And('Я заполняю поле "Email" уникальным email\'ом "ТЕСТОВЫЙ EMAIL" модального окна')
.And('Я заполняю поле "Логин" уникальным кодом "ПОЛЬЗОВАТЕЛЬ" модального окна')
.And('Я кликаю по чекбоксу "Изменить пароль при следующем входе" модального окна')

.Then('Я переключаюсь на вкладку "Присвоение ролей" модального окна')
.And('Я заполняю поле "Название" текстом "тестовое название" модального окна')
.And('Я заполняю поле "Номер" текстом "666" модального окна')
.And('Я заполняю поле "Срок действия с" текстом "01.01.2017" модального окна')
.And('Я заполняю поле "по" текстом "01.02.2017" модального окна')
.And('Я заполняю поле "Дата документа" текстом "01.01.2017" модального окна')
.And('Я загружаю файл "uploadFiles/test.jpg" в поле "Загрузить документ" модального окна')
.And('Я нажимаю на кнопку с текстом "Добавить роль" модального окна')
.And('Я выбираю элемент таблицы под номером 1 модального окна')
.Then('Я нажимаю на кнопку выбора модального окна')
.Then('Я кликаю по чекбоксу "Для организации" модального окна')

.Then('Я нажимаю на кнопку сохранения модального окна')
.Then('Я нажимаю на кнопку закрытия модального окна')
.Then('Я нажимаю на кнопку закрытия модального окна')

.Then('Я заполняю фильтр "Логин" уникальным кодом "ПОЛЬЗОВАТЕЛЬ"')
.And('Я жду 5 сек.')
.And('Я выбираю элемент таблицы под номером 1')
.Then('Я нажимаю на кнопку с текстом "Изменить пароль"')
.And('Я заполняю поле "Пароль" текстом "l9Ye9Da1Rn4Q" модального окна')
.And('Я заполняю поле "Подтверждение пароля" текстом "l9Ye9Da1Rn4Q" модального окна')
.Then('Я нажимаю на кнопку сохранения модального окна')
.Then('Я нажимаю на кнопку закрытия')

.Then('Я разлогиниваюсь')
.Then('Я логинюсь под сгенерированным пользователем "ПОЛЬЗОВАТЕЛЬ"')
.Comment('перейти к разделу системы Личный кабинет')
.Comment('@@GotoSection[v1.0.0]')
.When('Я открываю раздел системы "Личный кабинет"')
.Then('Я нажимаю на ссылку "Создать заявку на изменение данных"')
.Then('Я заполняю поле "Фамилия" текстом "Петров"')
.Then('Я нажимаю на кнопку с названием "Далее"')
.Then('Я нажимаю на кнопку с названием "Далее"')
.Then('Я нажимаю на кнопку с названием "Отправить заявку на изменение данных"')
.Then('Я заполняю текстовый блок "Причина внесения изменений", "причина внесения изменений"')
.Then('Я нажимаю на кнопку с текстом "Сохранить и отправить"')

.Then('Я разлогиниваюсь')
.Then('Я логинюсь под пользователем "modifier"')
.Comment('перейти к разделу системы Управление пользователями')
.Comment('@@GotoSection[v1.0.0]')
.When('Я открываю раздел системы "Управление пользователями"')
.Comment('перейти к подразделу системы Заявки на изменение пользователей')
.Comment('@@GotoSubsection[v1.0.0]')
.Then('Я выбираю в меню "Заявки на изменение пользователей"')
.Then('Я ожидаю, что заголовок содержит "Заявки на изменение пользователей"')

.Comment('1) измененные данные в заявке должны сохраниться')
.Comment('2) заявка должена быть найдена по новому логину')
.Comment('<wikilink>')
)
.Scenario('Изменение', new $Sequence()

.Then('Я заполняю фильтр "Логин" уникальным кодом "ПОЛЬЗОВАТЕЛЬ"')
.And('Я жду 5 сек.')
.And('Я выбираю элемент таблицы под номером 1')
.Then('Я нажимаю на кнопку редактирования')
.And('Я заполняю поле "Логин" уникальным кодом "НОВЫЙ ЛОГИН" модального окна')
.Then('Я нажимаю на кнопку сохранения модального окна')
.Then('Я нажимаю на кнопку закрытия')

.Then('Я заполняю фильтр "Логин" уникальным кодом "ПОЛЬЗОВАТЕЛЬ"')
.And('Я жду 5 сек.')
.Then('Я ожидаю, что в списке будет элементов = 0')

.Then('Я заполняю фильтр "Логин" уникальным кодом "НОВЫЙ ЛОГИН"')
.And('Я жду 5 сек.')
.Then('Я ожидаю, что в списке будет элементов = 1')
)
.finalize(callback);
};