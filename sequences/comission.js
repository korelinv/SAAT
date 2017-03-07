const Sequence = require('../classes/sequence');
const {login,
       logout,
       selfRegistration,
       checkTitleHtml,
       checkTitle,
       checkCountElementsTable,
       waitUntilLoaded,
       checkRadioValue,
       input,
       section,
       home,
       menu,
       button,
       modalTab,
       link,
       wait,
       multiselectFilter,
       textarea,
       ckeditor,
       datapicker,
       autocomplete,
       select,
       checkbox,
       radio,
       file,
       scrollDirection,
       scrollBlock,
       clickTableTd} = require('../steps/wrappers');

const common = require('./common').methods;

function add_commision_order_memeber(args) {
    let list = (true === Array.isArray(args)) ? args : [args];

    let result = new Sequence();
    list.forEach((member) => {
        result.Comment('добавление члена комиссии')
            .Then(scrollBlock.withName('Список членов комиссии'))
            .And(button.create())
            .And(clickTableTd.at(1).inField('Пользователь'))
            .Then(button.withName('Сохранение Создание члена комиссии'));
    });

    return result;
};

function add_commision_memeber(args) {
    let list = (true === Array.isArray(args)) ? args : [args];

    let result = new Sequence();
    list.forEach((member) => {
        result.Comment('добавление члена комиссии')
            .Then(button.withName('Создание Члены комиссии'))
            .Then(autocomplete.field().withName('Роль').withText(member.role))
            .If(true === !!member.fio)
                .And(autocomplete.field().withName('ФИО').withText(member.fio))
            .End()
            .If(false === !!member.fio)
                .And(autocomplete.field().withName('ФИО'))
            .End()
            .Then(button.withName('Сохранение Создание члена комиссии'));
    });

    return result;
};

function new_commision(args) {
    return new Sequence()
        .Comment('создание комиссии')
        .Sequence(common.goto_comission)
        .Then(button.create())
        .And(input.field().withName('Наименование').withText(args.name))
        .And(autocomplete.field().withName('Приказ').withGenereatedtag(args.order))
        .And(autocomplete.field().withName('Тип').withText('Единая'))
        .And(autocomplete.field().withName('Организация (владелец комиссии)'))
        .Sequence(add_commision_memeber(args.members))
        .Then(scrollDirection.up())
        .Then(button.save())
        .Then(checkTitle.withText('Информация о комиссии'));
};

function new_commision_order(args) {
    return new Sequence()
        .Comment('создание приказа')
        .Sequence(common.goto_comission_order)
        .Then(button.create())
        .And(input.field().withName('Наименование').withText(args.name))
        .And(input.field().withName('Номер приказа').withText('666'))
        .And(autocomplete.field().withName('Организация (владелец комиссии)').withText('Департамент города Москвы по конкурентной политике'))
        .And(checkbox.withName('Приказ/комиссия первого уровня'))
        .And(file.withName('Текст приказа').withValue('uploadFiles/test.jpg'))
        .And(datapicker.withName('Дата начала полномочий приказа').withValue('27.11.2016'))
        .And(datapicker.withName('Дата приказа').withValue('25.11.2016'))
        .Sequence(add_commision_order_memeber(args.members))
        .Then(scrollDirection.up())
        .Then(button.save())
        .Then(checkTitle.withText('Информация о приказе'));
};


module.exports = {

    methods: {
        add_commision_order_memeber: add_commision_order_memeber,
        add_commision_memeber: add_commision_memeber,

        new_commision: new_commision,
        new_commision_order: new_commision_order
    },

    render: {

        __add_commision_order_memeber: 'добавление члена комиссии (приказ)',
        add_commision_order_memeber_blank: add_commision_order_memeber({}),

        __add_commision_memeber: 'добавление члена комиссии (комиссия)',
        add_commision_memeber_blank: add_commision_memeber({
            role: '[string]',
            fio: '[string]'
        }),

        __new_commision: 'создание новой комиссии',
        new_commision_blank: new_commision({
            name: '[string]',
            order: '[string]',
            members: [
              {
                  role: 'Председатель'
              },
              {
                  role: 'Секретарь с правом голоса'
              },
              {
                  role: 'Член комиссии'
              },
              {
                  role: 'Член комиссии'
              },
              {
                  role: 'Член комиссии'
              }
            ]
        }),

        __new_commision_order: 'создание нового приказа',
        new_commision_order_blank: new_commision_order({
            name: '[string]',
            members: [
              {},
              {},
              {}
            ]
        })

    }

}
