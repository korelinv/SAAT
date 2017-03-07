module.exports = function(callback) {
new $Feature('dist/features/nsi/kpgz-spgz/Создание, Редактирование, Удаление - СПГЗ')
.Tag('Создание')
.Tag('Редактирование')
.Tag('Удаление')
.Tag('НСИ')
.Tag('Справочники-КПГЗ-СПГЗ')
.Tag('СПГЗ')

.Feature('СПГЗ с обязательными полями')

.Comment('Создаем КПГЗ и СПГЗ')
.Background('Создание КПГЗ и СПГЗ к нему', new $Sequence()
.Given('Я логинюсь под пользователем "modifier"')

.Comment('перейти к разделу системы НСИ')
.Comment('@@GotoSection[v1.0.0]')
.When('Я открываю раздел системы "НСИ"')

.Comment('перейти к подразделу системы КПГЗ')
.Comment('@@GotoSubsection[v1.0.0]')
.When('Я выбираю в меню "Справочник КПГЗ", "КПГЗ"')
.Then('Я ожидаю, что заголовок содержит "Список КПГЗ"')

.Comment('создать новый КПГЗ')
.Comment('@@CreateNew.KPGZ.blank[v1.0.0]')
.When('Я нажимаю на кнопку создания')
.Then('Я заполняю поле "Наименование КПГЗ" сгенерированным тегом "ТЕСТОВЫЙ КПГЗ ДЛЯ СПГЗ"')
.Then('Я выбираю в поле с выпадающим списком "Вышестоящий КПГЗ"')
.Then('Я выбираю значение "01.11.11.111 Зерно озимой твердой пшеницы" в поле с выпадающим списком "Код ОКПД"')
.Then('Я выбираю значение "01.11.11.111 Зерно озимой твердой пшеницы" в поле с выпадающим списком "Код ОКПД-2"')
.And('Я сохраняю новый КПГЗ')
.Then('Я ожидаю, что заголовок содержит "Информация о КПГЗ"')

.Comment('перейти к подразделу системы СПГЗ')
.Comment('@@GotoSubsection[v1.0.0]')
.When('Я выбираю в меню "Справочник КПГЗ", "CПГЗ"')
.Then('Я ожидаю, что заголовок содержит "Список СПГЗ"')

.Comment('создать новый СПГЗ')
.Comment('@@CreateNew.SPGZ.blank[v1.0.0]')
.When('Я нажимаю на кнопку создания')
.And('Я заполняю поле "Наименование СПГЗ" сгенерированным тегом "Тестовый СПГЗ"')
.And('Я выбираю сгенерированный тег "ТЕСТОВЫЙ КПГЗ ДЛЯ СПГЗ" в поле с выпадающим списком "КПГЗ"')
.Comment('And  Я выбираю значение "02.01.11.110 Лесоматериалы круглые хвойных пород для распиловки" в поле с выпадающим списком "Код ОКПД"')
.And('Я выбираю значение "01.11.11.111 Зерно озимой твердой пшеницы" в поле с выпадающим списком "Код ОКПД-2"')
.And('Я выбираю значение "Полугодие" в поле с выпадающим списком "Единицы измерения"')
.And('Я выбираю радиокнопку "Признак стандартизированной позиции", "Нет"')
.And('Я выбираю радиокнопку "Признак возможности определения поставщика путем проведения конкурса с ограниченным участием", "Нет"')
.And('Я выбираю радиокнопку "Признак применимости критерия жизненного цикла (в соответствии с частью 3 статьи 32 44-ФЗ)", "Нет"')
.And('Я выбираю радиокнопку "Признак результата интеллектуальной деятельности либо НИОКР (в соответствии с частью 6 статьи 32 44-ФЗ)", "Нет"')
.And('Я выбираю радиокнопку "Признак создания произведения искусства (в соответствии с частью 6 статьи 32 44-ФЗ)", "Нет"')
.And('Я выбираю радиокнопку "Признак возможности определения поставщика путем проведения двухэтапного конкурса", "Нет"')
.And('Я выбираю радиокнопку "Признак возможности определения поставщика путем проведения запроса предложений", "Нет"')
.And('Я выбираю радиокнопку "Преподавательские услуги физическим лицом", "Нет"')
.And('Я выбираю радиокнопку "Услуги экскурсоводов физическим лицом", "Нет"')
.And('Я выбираю радиокнопку "Признак возможности проведения закупки на единицу продукции", "Нет"')
.And('Я выбираю радиокнопку "Требует нормирования", "Нет"')
.And('Я скроллю наверх')
.And('Я нажимаю на кнопку сохранения')
.Then('Я ожидаю, что заголовок содержит "Информация о СПГЗ"')

.Comment('ищем СПГЗ в таблице и удаляем.')
.Comment('https://wiki.proitr.ru/pages/viewpage.action?pageId=126189631')
)
.Scenario('Удаление', new $Sequence()

.Comment('перейти к подразделу системы <string>')
.Comment('@@GotoSubsection[v1.0.0]')
.When('Я выбираю в меню "Справочник КПГЗ", "CПГЗ"')
.Then('Я ожидаю, что заголовок содержит "Список СПГЗ"')

.When('Я заполняю фильтр "Наименование СПГЗ" сгенерированным тегом "Тестовый СПГЗ"')
.And('Я жду 5 сек.')
.Then('Я ожидаю, что в списке будет элементов = 1')

.When('Я выбираю элемент таблицы под номером 1')
.And('Я нажимаю на кнопку удаления')
.And('Я нажимаю на кнопку подтверждения')
.And('Я нажимаю на кнопку подтверждения')
.And('Я жду 5 сек.')
.Then('Я ожидаю, что в списке будет элементов = 0')


.Comment('создаем второй КПГЗ и Изменяем СПГЗ')
)
.Scenario('Редактирование', new $Sequence()

.Comment('перейти к подразделу системы КПГЗ')
.Comment('@@GotoSubsection[v1.0.0]')
.When('Я выбираю в меню "Справочник КПГЗ", "КПГЗ"')
.Then('Я ожидаю, что заголовок содержит "Список КПГЗ"')
.Comment('создать новый КПГЗ')
.Comment('@@CreateNew.KPGZ.blank[v1.0.0]')
.When('Я нажимаю на кнопку создания')
.Then('Я заполняю поле "Наименование КПГЗ" сгенерированным тегом "ТЕСТОВЫЙ КПГЗ ДЛЯ СПГЗ 2"')
.Then('Я выбираю в поле с выпадающим списком "Вышестоящий КПГЗ"')
.Then('Я выбираю значение "01.11.11.111 Зерно озимой твердой пшеницы" в поле с выпадающим списком "Код ОКПД"')
.Then('Я выбираю значение "01.11.11.111 Зерно озимой твердой пшеницы" в поле с выпадающим списком "Код ОКПД-2"')
.And('Я сохраняю новый КПГЗ')
.Then('Я ожидаю, что заголовок содержит "Информация о КПГЗ"')
.Comment('перейти к подразделу системы СПГЗ')
.Comment('@@GotoSubsection[v1.0.0]')
.Then('Я выбираю в меню "Справочник КПГЗ", "CПГЗ"')
.Then('Я ожидаю, что заголовок содержит "Список СПГЗ"')
.When('Я заполняю фильтр "Наименование СПГЗ" сгенерированным тегом "Тестовый СПГЗ"')
.And('Я жду 5 сек.')
.And('Я нажимаю на ссылку "Тестовый СПГЗ"')
.Then('Я ожидаю, что заголовок содержит "Информация о СПГЗ"')
.When('Я нажимаю на кнопку редактирования')
.And('Я заполняю поле "Наименование СПГЗ" сгенерированным тегом "Измененный тестовый СПГЗ"')
.And('Я выбираю сгенерированный тег "ТЕСТОВЫЙ КПГЗ ДЛЯ СПГЗ 2" в поле с выпадающим списком "КПГЗ"')
.And('Я выбираю значение "02.01.11.110 Лесоматериалы круглые хвойных пород для распиловки" в поле с выпадающим списком "Код ОКПД"')
.And('Я выбираю значение "02.10.30.000 Деревья лесные" в поле с выпадающим списком "Код ОКПД-2"')
.And('Я скроллю наверх')
.And('Я нажимаю на кнопку сохранения')
.Then('Я ожидаю, что заголовок содержит "Информация о СПГЗ"')
.When('Я выбираю в меню "Справочник КПГЗ", "CПГЗ"')
.Then('Я ожидаю, что заголовок содержит "Список СПГЗ"')
.When('Я заполняю фильтр "Наименование СПГЗ" сгенерированным тегом "Тестовый СПГЗ"')
.And('Я жду 5 сек.')
.Then('Я ожидаю, что в списке будет элементов = 0')
.When('Я заполняю фильтр "Наименование СПГЗ" сгенерированным тегом "Измененный тестовый СПГЗ"')
.And('Я жду 5 сек.')
.Then('Я ожидаю, что в списке будет элементов = 1')
.When('Я выбираю элемент таблицы под номером 1')
.And('Я нажимаю на кнопку удаления')
.And('Я нажимаю на кнопку подтверждения')
.Then('Я нажимаю на кнопку подтверждения')
.When('Я заполняю фильтр "Наименование СПГЗ" сгенерированным тегом "Измененный тестовый СПГЗ"')
.And('Я жду 5 сек.')
.Then('Я ожидаю, что в списке будет элементов = 0')
)
.finalize(callback);
};