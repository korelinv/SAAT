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

const common = require('./common').render;

function new_cost_rate(args) {
    return new Sequence()
        .Comment('создание нормы затрат')
        .Sequence(common.goto_cost_rate)
        .Then(button.create())
        .Then(button.withText('Далее'))
        .And(autocomplete.field().withName('КПГЗ').withGenereatedtag(args.name))
        .And(autocomplete.field().withName('Коэффициент потребности'))
        .And(input.field().withName('Норма затрат, руб.').withText('123123'))
        .And(autocomplete.field().withName('Организация'))
        .Then(button.save())
        .Then(checkTitle.withText('Информация о норме затрат'));
};

function new_rationing_parameters(args) {
    return new Sequence()
        .Comment('создание параметра нормирования')
        .Sequence(common.goto_rationing_parameters)
        .Then(button.create())
        .And(autocomplete.field().withName('СПГЗ').withGenereatedtag(args.name))
        .And(autocomplete.field().withName('Амортизационная группа'))
        .Then(button.save())
        .Then(checkTitle.withText('Информация о параметре нормирования'));
};

function new_requirement_ratio(args) {
    return new Sequence()
        .Comment('создание коэффициента потребности')
        .Sequence(common.goto_requirement_ratio)
        .Then(button.create())
        .And(autocomplete.field().withName('Наименование коэффициента').withGenereatedtag(args.name))
        .Then(button.save())
        .Then(checkTitle.withText('Информация о коэффициенте потребности'));
};


module.exports = {

    methods: {
        new_cost_rate: new_cost_rate,
        new_rationing_parameters: new_rationing_parameters,
        new_requirement_ratio: new_requirement_ratio
    },

    render: {

        __new_cost_rate_blank: 'создание новой нормы затрат',
        new_cost_rate_blank: new_cost_rate({
            name: '[string]'
        }),

        __new_rationing_parameters_blank: 'создание нового параметра нормирования',
        new_rationing_parameters_blank: new_rationing_parameters({
            name: '[string]'
        }),

        __new_requirement_ratio_blank: 'создание нового коэффициента потребности',
        new_requirement_ratio_blank: new_requirement_ratio({
            name: '[string]'
        })

    }
};
