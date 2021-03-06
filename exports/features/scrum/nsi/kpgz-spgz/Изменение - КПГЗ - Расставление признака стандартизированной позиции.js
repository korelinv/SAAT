module.exports = function(callback) {
new $Feature('dist/features/scrum/nsi/kpgz-spgz/Изменение - КПГЗ - Расставление признака стандартизированной позиции')
.Tag('Создание')
.Tag('Редактирование')
.Tag('Удаление')
.Tag('НСИ')
.Tag('Справочники-КПГЗ-СПГЗ')
.Tag('КПГЗ')
.Tag('sprint-21')
.Tag('EAIST2-1828')

.Comment(' @summary Доработка функционала автоматического проставления значения признака')
.Comment(' стандартизованной позиции в карточке КПГЗ. При переводе в Архив родительского')
.Comment(' шаблона ТЗ, в дочерних КПГЗ необходимо проставлять')
.Comment(' "Признак стандартизованной позиции" - "Нет"')
.Comment(' @task https://jira.proitr.ru/browse/EAIST2-1566')
.Comment(' @task https://jira.proitr.ru/browse/EAIST2-1828')
.Feature('КПГЗ (признак стандартизованной позиции)')

.Background('', new $Sequence()
.Given('Я логинюсь под пользователем "modifier"')

.When('Я открываю раздел системы "НСИ"')
.And('Я выбираю в меню "Справочник КПГЗ / СПГЗ", "КПГЗ"')
.Then('Я ожидаю, что заголовок содержит "Список КПГЗ"')

.Comment(' первое поколение')
.Comment(' псевдокорневой КПГЗ')
.When('Я нажимаю на кнопку создания')
.And('Я заполняю поле "Наименование КПГЗ" сгенерированным тегом "ТЕСТОВЫЙ КПГЗ 1G0"')
.And('Я выбираю значение "03.01.00" в поле с выпадающим списком "Вышестоящий КПГЗ"')
.And('Я выбираю в поле с выпадающим списком "Код ОКПД"')
.And('Я выбираю значение "05.1 Уголь" в поле с выпадающим списком "Код ОКПД-2"')
.And('Я сохраняю новый КПГЗ')
.Then('Я ожидаю, что заголовок содержит "Информация о КПГЗ"')

.Comment(' шаблон Тз для первого поколения')
.Comment('перейти к разделу системы Библиотека типовой документации')
.Comment('@@GotoAnotherSection[v1.0.0]')
.When('Я перехожу на главную страницу')
.Then('Я открываю раздел системы "Библиотека типовой документации"')
.Comment('перейти к подразделу системы Справочник шаблонов ТЗ')
.Comment('@@GotoSubsection[v1.0.0]')
.Then('Я выбираю в меню "Библиотека типовой документации", "Справочник шаблонов ТЗ"')
.Then('Я ожидаю, что заголовок содержит "Список шаблонов ТЗ"')
.Then('Я нажимаю на кнопку создания')
.When('Я ожидаю, что заголовок содержит "Создание шаблона ТЗ"')
.Then('Я заполняю поле "Наименование" сгенерированным тегом "ТЕСТОВЫЙ ШАБЛОН ТЗ 1G0"')
.And('Я выбираю в поле с выпадающим списком "Тип шаблона"')
.And('Я заполняю сгенерированным текстовый редактор "СОДЕРЖАНИЕ ТЕСТОВОГО ШАБЛОНА ТЗ"')
.And('Я выбираю сгенерированный тег "ТЕСТОВЫЙ КПГЗ 1G0" в поле с выпадающим списком "КПГЗ"')
.And('Я нажимаю на кнопку сохранения')
.Then('Я ожидаю, что заголовок содержит "Информация о шаблоне ТЗ"')
.Then('Я нажимаю на кнопку с текстом "Отправить на утверждение"')
.Then('Я нажимаю на кнопку с текстом "Утвердить"')

.Comment(' второе поколение')
.Comment('перейти к разделу системы НСИ')
.Comment('@@GotoAnotherSection[v1.0.0]')
.When('Я перехожу на главную страницу')
.Then('Я открываю раздел системы "НСИ"')
.Comment('перейти к подразделу системы КПГЗ')
.Comment('@@GotoSubsection[v1.0.0]')
.When('Я выбираю в меню "Справочник КПГЗ", "КПГЗ"')
.Then('Я ожидаю, что заголовок содержит "Список КПГЗ"')
.When('Я нажимаю на кнопку создания')
.And('Я заполняю поле "Наименование КПГЗ" сгенерированным тегом "ТЕСТОВЫЙ КПГЗ 1G1"')
.And('Я выбираю сгенерированный тег "ТЕСТОВЫЙ КПГЗ 1G0" в поле с выпадающим списком "Вышестоящий КПГЗ"')
.And('Я выбираю в поле с выпадающим списком "Код ОКПД"')
.And('Я выбираю значение "05.1 Уголь" в поле с выпадающим списком "Код ОКПД-2"')
.And('Я сохраняю новый КПГЗ')
.Then('Я ожидаю, что заголовок содержит "Информация о КПГЗ"')
.Comment('перейти к подразделу системы КПГЗ')
.Comment('@@GotoSubsection[v1.0.0]')
.When('Я выбираю в меню "Справочник КПГЗ", "КПГЗ"')
.Then('Я ожидаю, что заголовок содержит "Список КПГЗ"')
.When('Я нажимаю на кнопку создания')
.And('Я заполняю поле "Наименование КПГЗ" сгенерированным тегом "ТЕСТОВЫЙ КПГЗ 2G1"')
.And('Я выбираю сгенерированный тег "ТЕСТОВЫЙ КПГЗ 1G0" в поле с выпадающим списком "Вышестоящий КПГЗ"')
.And('Я выбираю в поле с выпадающим списком "Код ОКПД"')
.And('Я выбираю значение "05.1 Уголь" в поле с выпадающим списком "Код ОКПД-2"')
.And('Я сохраняю новый КПГЗ')
.Then('Я ожидаю, что заголовок содержит "Информация о КПГЗ"')
.Comment('перейти к подразделу системы КПГЗ')
.Comment('@@GotoSubsection[v1.0.0]')
.When('Я выбираю в меню "Справочник КПГЗ", "КПГЗ"')
.Then('Я ожидаю, что заголовок содержит "Список КПГЗ"')
.When('Я нажимаю на кнопку создания')
.And('Я заполняю поле "Наименование КПГЗ" сгенерированным тегом "ТЕСТОВЫЙ КПГЗ 3G1"')
.And('Я выбираю сгенерированный тег "ТЕСТОВЫЙ КПГЗ 1G0" в поле с выпадающим списком "Вышестоящий КПГЗ"')
.And('Я выбираю в поле с выпадающим списком "Код ОКПД"')
.And('Я выбираю значение "05.1 Уголь" в поле с выпадающим списком "Код ОКПД-2"')
.And('Я сохраняю новый КПГЗ')
.Then('Я ожидаю, что заголовок содержит "Информация о КПГЗ"')

.Comment(' шаблон ТЗ для второго поколения')
.Comment('перейти к разделу системы Библиотека типовой документации')
.Comment('@@GotoAnotherSection[v1.0.0]')
.When('Я перехожу на главную страницу')
.Then('Я открываю раздел системы "Библиотека типовой документации"')
.Comment('перейти к подразделу системы Справочник шаблонов ТЗ')
.Comment('@@GotoSubsection[v1.0.0]')
.Then('Я выбираю в меню "Библиотека типовой документации", "Справочник шаблонов ТЗ"')
.Then('Я ожидаю, что заголовок содержит "Список шаблонов ТЗ"')
.Then('Я нажимаю на кнопку создания')
.When('Я ожидаю, что заголовок содержит "Создание шаблона ТЗ"')
.Then('Я заполняю поле "Наименование" сгенерированным тегом "ТЕСТОВЫЙ ШАБЛОН ТЗ 3G1"')
.And('Я выбираю в поле с выпадающим списком "Тип шаблона"')
.And('Я заполняю сгенерированным текстовый редактор "СОДЕРЖАНИЕ ТЕСТОВОГО ШАБЛОНА ТЗ"')
.And('Я выбираю сгенерированный тег "ТЕСТОВЫЙ КПГЗ 3G1" в поле с выпадающим списком "КПГЗ"')
.And('Я нажимаю на кнопку сохранения')
.Then('Я ожидаю, что заголовок содержит "Информация о шаблоне ТЗ"')
.Then('Я нажимаю на кнопку с текстом "Отправить на утверждение"')
.Then('Я нажимаю на кнопку с текстом "Утвердить"')


.Comment(' третье поколение')
.Comment('перейти к разделу системы НСИ')
.Comment('@@GotoAnotherSection[v1.0.0]')
.When('Я перехожу на главную страницу')
.Then('Я открываю раздел системы "НСИ"')
.Comment('перейти к подразделу системы КПГЗ')
.Comment('@@GotoSubsection[v1.0.0]')
.When('Я выбираю в меню "Справочник КПГЗ", "КПГЗ"')
.Then('Я ожидаю, что заголовок содержит "Список КПГЗ"')
.When('Я нажимаю на кнопку создания')
.And('Я заполняю поле "Наименование КПГЗ" сгенерированным тегом "ТЕСТОВЫЙ КПГЗ 1G2"')
.And('Я выбираю сгенерированный тег "ТЕСТОВЫЙ КПГЗ 1G1" в поле с выпадающим списком "Вышестоящий КПГЗ"')
.And('Я выбираю в поле с выпадающим списком "Код ОКПД"')
.And('Я выбираю значение "05.1 Уголь" в поле с выпадающим списком "Код ОКПД-2"')
.And('Я сохраняю новый КПГЗ')
.Then('Я ожидаю, что заголовок содержит "Информация о КПГЗ"')
.Comment('перейти к подразделу системы КПГЗ')
.Comment('@@GotoSubsection[v1.0.0]')
.When('Я выбираю в меню "Справочник КПГЗ", "КПГЗ"')
.Then('Я ожидаю, что заголовок содержит "Список КПГЗ"')
.When('Я нажимаю на кнопку создания')
.And('Я заполняю поле "Наименование КПГЗ" сгенерированным тегом "ТЕСТОВЫЙ КПГЗ 2G2"')
.And('Я выбираю сгенерированный тег "ТЕСТОВЫЙ КПГЗ 1G1" в поле с выпадающим списком "Вышестоящий КПГЗ"')
.And('Я выбираю в поле с выпадающим списком "Код ОКПД"')
.And('Я выбираю значение "05.1 Уголь" в поле с выпадающим списком "Код ОКПД-2"')
.And('Я сохраняю новый КПГЗ')
.Then('Я ожидаю, что заголовок содержит "Информация о КПГЗ"')
.Comment('перейти к подразделу системы КПГЗ')
.Comment('@@GotoSubsection[v1.0.0]')
.When('Я выбираю в меню "Справочник КПГЗ", "КПГЗ"')
.Then('Я ожидаю, что заголовок содержит "Список КПГЗ"')
.When('Я нажимаю на кнопку создания')
.And('Я заполняю поле "Наименование КПГЗ" сгенерированным тегом "ТЕСТОВЫЙ КПГЗ 3G2"')
.And('Я выбираю сгенерированный тег "ТЕСТОВЫЙ КПГЗ 1G1" в поле с выпадающим списком "Вышестоящий КПГЗ"')
.And('Я выбираю в поле с выпадающим списком "Код ОКПД"')
.And('Я выбираю значение "05.1 Уголь" в поле с выпадающим списком "Код ОКПД-2"')
.And('Я сохраняю новый КПГЗ')
.Then('Я ожидаю, что заголовок содержит "Информация о КПГЗ"')
.Comment('перейти к подразделу системы КПГЗ')
.Comment('@@GotoSubsection[v1.0.0]')
.When('Я выбираю в меню "Справочник КПГЗ", "КПГЗ"')
.Then('Я ожидаю, что заголовок содержит "Список КПГЗ"')
.When('Я нажимаю на кнопку создания')
.And('Я заполняю поле "Наименование КПГЗ" сгенерированным тегом "ТЕСТОВЫЙ КПГЗ 4G2"')
.And('Я выбираю сгенерированный тег "ТЕСТОВЫЙ КПГЗ 2G1" в поле с выпадающим списком "Вышестоящий КПГЗ"')
.And('Я выбираю в поле с выпадающим списком "Код ОКПД"')
.And('Я выбираю значение "05.1 Уголь" в поле с выпадающим списком "Код ОКПД-2"')
.And('Я сохраняю новый КПГЗ')
.Then('Я ожидаю, что заголовок содержит "Информация о КПГЗ"')
.Comment('перейти к подразделу системы КПГЗ')
.Comment('@@GotoSubsection[v1.0.0]')
.When('Я выбираю в меню "Справочник КПГЗ", "КПГЗ"')
.Then('Я ожидаю, что заголовок содержит "Список КПГЗ"')
.When('Я нажимаю на кнопку создания')
.And('Я заполняю поле "Наименование КПГЗ" сгенерированным тегом "ТЕСТОВЫЙ КПГЗ 5G2"')
.And('Я выбираю сгенерированный тег "ТЕСТОВЫЙ КПГЗ 2G1" в поле с выпадающим списком "Вышестоящий КПГЗ"')
.And('Я выбираю в поле с выпадающим списком "Код ОКПД"')
.And('Я выбираю значение "05.1 Уголь" в поле с выпадающим списком "Код ОКПД-2"')
.And('Я сохраняю новый КПГЗ')
.Then('Я ожидаю, что заголовок содержит "Информация о КПГЗ"')


.Comment(' шаблон ТЗ для третьего поколения')
.Comment('перейти к разделу системы Библиотека типовой документации')
.Comment('@@GotoAnotherSection[v1.0.0]')
.When('Я перехожу на главную страницу')
.Then('Я открываю раздел системы "Библиотека типовой документации"')
.Comment('перейти к подразделу системы Справочник шаблонов ТЗ')
.Comment('@@GotoSubsection[v1.0.0]')
.Then('Я выбираю в меню "Библиотека типовой документации", "Справочник шаблонов ТЗ"')
.Then('Я ожидаю, что заголовок содержит "Список шаблонов ТЗ"')
.Then('Я нажимаю на кнопку создания')
.When('Я ожидаю, что заголовок содержит "Создание шаблона ТЗ"')
.Then('Я заполняю поле "Наименование" сгенерированным тегом "ТЕСТОВЫЙ ШАБЛОН ТЗ 2G2"')
.And('Я выбираю в поле с выпадающим списком "Тип шаблона"')
.And('Я заполняю сгенерированным текстовый редактор "СОДЕРЖАНИЕ ТЕСТОВОГО ШАБЛОНА ТЗ"')
.And('Я выбираю сгенерированный тег "ТЕСТОВЫЙ КПГЗ 2G2" в поле с выпадающим списком "КПГЗ"')
.And('Я нажимаю на кнопку сохранения')
.Then('Я ожидаю, что заголовок содержит "Информация о шаблоне ТЗ"')
.Then('Я нажимаю на кнопку с текстом "Отправить на утверждение"')
.Then('Я нажимаю на кнопку с текстом "Утвердить"')
.Comment('перейти к подразделу системы Справочник шаблонов ТЗ')
.Comment('@@GotoSubsection[v1.0.0]')
.Then('Я выбираю в меню "Библиотека типовой документации", "Справочник шаблонов ТЗ"')
.Then('Я ожидаю, что заголовок содержит "Список шаблонов ТЗ"')
.Then('Я нажимаю на кнопку создания')
.When('Я ожидаю, что заголовок содержит "Создание шаблона ТЗ"')
.Then('Я заполняю поле "Наименование" сгенерированным тегом "ТЕСТОВЫЙ ШАБЛОН ТЗ 3G2"')
.And('Я выбираю в поле с выпадающим списком "Тип шаблона"')
.And('Я заполняю сгенерированным текстовый редактор "СОДЕРЖАНИЕ ТЕСТОВОГО ШАБЛОНА ТЗ"')
.And('Я выбираю сгенерированный тег "ТЕСТОВЫЙ КПГЗ 3G2" в поле с выпадающим списком "КПГЗ"')
.And('Я нажимаю на кнопку сохранения')
.Then('Я ожидаю, что заголовок содержит "Информация о шаблоне ТЗ"')
.Then('Я нажимаю на кнопку с текстом "Отправить на утверждение"')
.Then('Я нажимаю на кнопку с текстом "Утвердить"')
.Comment('перейти к подразделу системы Справочник шаблонов ТЗ')
.Comment('@@GotoSubsection[v1.0.0]')
.Then('Я выбираю в меню "Библиотека типовой документации", "Справочник шаблонов ТЗ"')
.Then('Я ожидаю, что заголовок содержит "Список шаблонов ТЗ"')
.Then('Я нажимаю на кнопку создания')
.When('Я ожидаю, что заголовок содержит "Создание шаблона ТЗ"')
.Then('Я заполняю поле "Наименование" сгенерированным тегом "ТЕСТОВЫЙ ШАБЛОН ТЗ 5G2"')
.And('Я выбираю в поле с выпадающим списком "Тип шаблона"')
.And('Я заполняю сгенерированным текстовый редактор "СОДЕРЖАНИЕ ТЕСТОВОГО ШАБЛОНА ТЗ"')
.And('Я выбираю сгенерированный тег "ТЕСТОВЫЙ КПГЗ 5G2" в поле с выпадающим списком "КПГЗ"')
.And('Я нажимаю на кнопку сохранения')
.Then('Я ожидаю, что заголовок содержит "Информация о шаблоне ТЗ"')
.Comment(' переводи шаблон ТЗ у корневого  КПГЗ')
.Comment('перейти к подразделу системы Справочник шаблонов ТЗ')
.Comment('@@GotoSubsection[v1.0.0]')
.Then('Я выбираю в меню "Библиотека типовой документации", "Справочник шаблонов ТЗ"')
.Then('Я ожидаю, что заголовок содержит "Список шаблонов ТЗ"')
.When('Я заполняю фильтр "Наименование" сгенерированным тегом "ТЕСТОВЫЙ ШАБЛОН ТЗ 1G0"')
.And('Я жду 5 сек.')
.And('Я нажимаю на ссылку "ТЕСТОВЫЙ ШАБЛОН ТЗ 1G"')
.Then('Я ожидаю, что заголовок содержит "Информация о шаблоне ТЗ"')
.Then('Я нажимаю на кнопку с текстом "Отправить в архив"')


.Comment(' признак стандартизированной позиции рекурсивно должен быть выставлен в положение нет')
.Comment(' у всех дочерних КПГЗ(и у их дочерних) если у них нет собственного шаблона ТЗ в статусе')
.Comment(' утвержден')
)
.Scenario('проставления значения признака стандартизованной позиции в карточке КПГЗ', new $Sequence()

.Comment('перейти к разделу системы НСИ')
.Comment('@@GotoAnotherSection[v1.0.0]')
.When('Я перехожу на главную страницу')
.Then('Я открываю раздел системы "НСИ"')

.Comment('перейти к подразделу системы КПГЗ')
.Comment('@@GotoSubsection[v1.0.0]')
.When('Я выбираю в меню "Справочник КПГЗ", "КПГЗ"')
.Then('Я ожидаю, что заголовок содержит "Список КПГЗ"')
.When('Я заполняю фильтр "Наименование КПГЗ" сгенерированным тегом "ТЕСТОВЫЙ КПГЗ 1G0"')
.And('Я жду 5 сек.')
.And('Я нажимаю на ссылку "ТЕСТОВЫЙ КПГЗ 1G0"')
.Then('Я ожидаю, что заголовок содержит "Информация о КПГЗ"')
.Then('Я нажимаю на кнопку редактирования')
.Then('Я ожидаю, что заголовок содержит "Редактирование КПГЗ"')
.Then('Я ожидаю что радиокнопка "Признак стандартизированной позиции" установлена в положении "Нет"')

.Comment('перейти к подразделу системы КПГЗ')
.Comment('@@GotoSubsection[v1.0.0]')
.When('Я выбираю в меню "Справочник КПГЗ", "КПГЗ"')
.Then('Я ожидаю, что заголовок содержит "Список КПГЗ"')
.When('Я заполняю фильтр "Наименование КПГЗ" сгенерированным тегом "ТЕСТОВЫЙ КПГЗ 1G1"')
.And('Я жду 5 сек.')
.And('Я нажимаю на ссылку "ТЕСТОВЫЙ КПГЗ 1G1"')
.Then('Я ожидаю, что заголовок содержит "Информация о КПГЗ"')
.Then('Я нажимаю на кнопку редактирования')
.Then('Я ожидаю, что заголовок содержит "Редактирование КПГЗ"')
.Then('Я ожидаю что радиокнопка "Признак стандартизированной позиции" установлена в положении "Нет"')

.Comment('перейти к подразделу системы КПГЗ')
.Comment('@@GotoSubsection[v1.0.0]')
.When('Я выбираю в меню "Справочник КПГЗ", "КПГЗ"')
.Then('Я ожидаю, что заголовок содержит "Список КПГЗ"')
.When('Я заполняю фильтр "Наименование КПГЗ" сгенерированным тегом "ТЕСТОВЫЙ КПГЗ 2G1"')
.And('Я жду 5 сек.')
.And('Я нажимаю на ссылку "ТЕСТОВЫЙ КПГЗ 2G1"')
.Then('Я ожидаю, что заголовок содержит "Информация о КПГЗ"')
.Then('Я нажимаю на кнопку редактирования')
.Then('Я ожидаю, что заголовок содержит "Редактирование КПГЗ"')
.Then('Я ожидаю что радиокнопка "Признак стандартизированной позиции" установлена в положении "Нет"')

.Comment('перейти к подразделу системы КПГЗ')
.Comment('@@GotoSubsection[v1.0.0]')
.When('Я выбираю в меню "Справочник КПГЗ", "КПГЗ"')
.Then('Я ожидаю, что заголовок содержит "Список КПГЗ"')
.When('Я заполняю фильтр "Наименование КПГЗ" сгенерированным тегом "ТЕСТОВЫЙ КПГЗ 3G1"')
.And('Я жду 5 сек.')
.And('Я нажимаю на ссылку "ТЕСТОВЫЙ КПГЗ 3G1"')
.Then('Я ожидаю, что заголовок содержит "Информация о КПГЗ"')
.Then('Я нажимаю на кнопку редактирования')
.Then('Я ожидаю, что заголовок содержит "Редактирование КПГЗ"')
.Then('Я ожидаю что радиокнопка "Признак стандартизированной позиции" установлена в положении "Да"')

.Comment('перейти к подразделу системы КПГЗ')
.Comment('@@GotoSubsection[v1.0.0]')
.When('Я выбираю в меню "Справочник КПГЗ", "КПГЗ"')
.Then('Я ожидаю, что заголовок содержит "Список КПГЗ"')
.When('Я заполняю фильтр "Наименование КПГЗ" сгенерированным тегом "ТЕСТОВЫЙ КПГЗ 1G2"')
.And('Я жду 5 сек.')
.And('Я нажимаю на ссылку "ТЕСТОВЫЙ КПГЗ 1G2"')
.Then('Я ожидаю, что заголовок содержит "Информация о КПГЗ"')
.Then('Я нажимаю на кнопку редактирования')
.Then('Я ожидаю, что заголовок содержит "Редактирование КПГЗ"')
.Then('Я ожидаю что радиокнопка "Признак стандартизированной позиции" установлена в положении "Нет"')

.Comment('перейти к подразделу системы КПГЗ')
.Comment('@@GotoSubsection[v1.0.0]')
.When('Я выбираю в меню "Справочник КПГЗ", "КПГЗ"')
.Then('Я ожидаю, что заголовок содержит "Список КПГЗ"')
.When('Я заполняю фильтр "Наименование КПГЗ" сгенерированным тегом "ТЕСТОВЫЙ КПГЗ 2G2"')
.And('Я жду 5 сек.')
.And('Я нажимаю на ссылку "ТЕСТОВЫЙ КПГЗ 2G2"')
.Then('Я ожидаю, что заголовок содержит "Информация о КПГЗ"')
.Then('Я нажимаю на кнопку редактирования')
.Then('Я ожидаю, что заголовок содержит "Редактирование КПГЗ"')
.Then('Я ожидаю что радиокнопка "Признак стандартизированной позиции" установлена в положении "Да"')

.Comment('перейти к подразделу системы КПГЗ')
.Comment('@@GotoSubsection[v1.0.0]')
.When('Я выбираю в меню "Справочник КПГЗ", "КПГЗ"')
.Then('Я ожидаю, что заголовок содержит "Список КПГЗ"')
.When('Я заполняю фильтр "Наименование КПГЗ" сгенерированным тегом "ТЕСТОВЫЙ КПГЗ 3G2"')
.And('Я жду 5 сек.')
.And('Я нажимаю на ссылку "ТЕСТОВЫЙ КПГЗ 3G2"')
.Then('Я ожидаю, что заголовок содержит "Информация о КПГЗ"')
.Then('Я нажимаю на кнопку редактирования')
.Then('Я ожидаю, что заголовок содержит "Редактирование КПГЗ"')
.Then('Я ожидаю что радиокнопка "Признак стандартизированной позиции" установлена в положении "Да"')

.Comment('перейти к подразделу системы КПГЗ')
.Comment('@@GotoSubsection[v1.0.0]')
.When('Я выбираю в меню "Справочник КПГЗ", "КПГЗ"')
.Then('Я ожидаю, что заголовок содержит "Список КПГЗ"')
.When('Я заполняю фильтр "Наименование КПГЗ" сгенерированным тегом "ТЕСТОВЫЙ КПГЗ 4G2"')
.And('Я жду 5 сек.')
.And('Я нажимаю на ссылку "ТЕСТОВЫЙ КПГЗ 4G2"')
.Then('Я ожидаю, что заголовок содержит "Информация о КПГЗ"')
.Then('Я нажимаю на кнопку редактирования')
.Then('Я ожидаю, что заголовок содержит "Редактирование КПГЗ"')
.Then('Я ожидаю что радиокнопка "Признак стандартизированной позиции" установлена в положении "Нет"')

.Comment('перейти к подразделу системы КПГЗ')
.Comment('@@GotoSubsection[v1.0.0]')
.When('Я выбираю в меню "Справочник КПГЗ", "КПГЗ"')
.Then('Я ожидаю, что заголовок содержит "Список КПГЗ"')
.When('Я заполняю фильтр "Наименование КПГЗ" сгенерированным тегом "ТЕСТОВЫЙ КПГЗ 5G2"')
.And('Я жду 5 сек.')
.And('Я нажимаю на ссылку "ТЕСТОВЫЙ КПГЗ 5G2"')
.Then('Я ожидаю, что заголовок содержит "Информация о КПГЗ"')
.Then('Я нажимаю на кнопку редактирования')
.Then('Я ожидаю, что заголовок содержит "Редактирование КПГЗ"')
.Then('Я ожидаю что радиокнопка "Признак стандартизированной позиции" установлена в положении "Нет"')
)
.finalize(callback);
};