const steps = {
    given: require('../steps/given'),
    then: require('../steps/then'),
    when: require('../steps/when')
};

// basic
class Basic {
    constructor(config) {
        this.config = !!(config) ? config : {};
        this.method = () => {};
        this.class = Basic;
    }

    render() {
        return this.method(this.config);
    };

    regex() {
        return this.method({mode: true});
    };
};
class Focused extends Basic{
    constructor (config) {
        super(config);
        this.class = Focused;
    };

    inBlock(name) {
        return new this.class(Object.assign({}, this.config, {btype: 'блоке', block: name}));
    };

    inField(name) {
        return new this.class(Object.assign({}, this.config, {btype: 'поле', block: name}));
    };

    inModal() {
        return new this.class(Object.assign({}, this.config, {modal: 'модального окна'}));
    };
};

//given
class Login extends Basic{

    constructor(config) {
        super(config);
        this.method = steps.given.login;
        this.class = Login;
    };

    generated(flag) {
        return new Login(Object.assign({}, this.config, {generated: (flag) ? 'сгенерированным' : ''}));
    };

    asUser(user) {
        return new Login(Object.assign({}, this.config, {user: user}));
    };

};
class Logout extends Basic{

    constructor(config) {
        super(config);
        this.method = steps.given.logout;
        this.class = Logout;
    };

};
class SelfRegistration extends Basic{

    constructor(config) {
        super(config);
        this.method = steps.given.selfRegistration;
        this.class = SelfRegistration;
    };

};

//then
class CheckTitleHtml extends Basic{

    constructor(config) {
        super(config);
        this.method = steps.then.checkTitleHtml;
        this.class = CheckTitleHtml;
    };

    withText(text) {
        return new CheckTitleHtml(Object.assign({}, this.config, {text: text}));
    };

};
class CheckTitle extends Basic{

    constructor(config) {
        super(config);
        this.method = steps.then.checkTitle;
        this.class = CheckTitle;
    };

    withText(text) {
        return new CheckTitle(Object.assign({}, this.config, {text: text}));
    };

};
class CheckCountElementsTable extends Basic{

    constructor(config) {
        super(config);
        this.method = steps.then.checkCountElementsTable;
        this.class = CheckCountElementsTable;
    };

    withName(text) {
        return new CheckCountElementsTable(Object.assign({}, this.config, {parent: text}));
    };

    count(value) {
        return new CheckCountElementsTable(Object.assign({}, this.config, {count: value}));
    };

};
class WaitUntilLoaded extends Basic{

    constructor(config) {
        super(config);
        this.method = steps.then.waitUntilLoaded;
        this.class = WaitUntilLoaded;
    };

    timeout(value) {
        return new WaitUntilLoaded(Object.assign({}, this.config, {timeout: value}));
    };

};
class CheckRadioValue extends Basic{

    constructor(config) {
        super(config);
        this.method = steps.then.checkRadioValue;
        this.class = CheckRadioValue;
    };

    withName(name) {
        return new CheckRadioValue(Object.assign({}, this.config, {name: name}));
    };

    hasValue(value) {
        return new CheckRadioValue(Object.assign({}, this.config, {value: value}));
    };

};

//when
class Home extends Basic{

    constructor(config) {
        super(config);
        this.method = steps.when.home;
        this.class = Home;
    };

};
class Section extends Basic{

      constructor(config) {
          super(config)
          this.method = steps.when.section;
          this.class = Section;
      };

      withName(name) {
          return new Section(Object.assign({}, this.config, {sectionName: name}));
      };

}
class Menu extends Basic{

    constructor(config) {
        super(config);
        this.method = steps.when.menu;
        this.class = Menu;
    };

    main(text) {
        return new Menu(Object.assign({}, this.config, {parent: text}));
    };

    secondary(text) {
        return new Menu(Object.assign({}, this.config, {child: text}));
    };

}
class Button extends Focused{
    constructor(config) {
        super(config);
        this.method = steps.when.button;
        this.class = Button;
    };

    create() {
        return new Button(Object.assign({}, this.config, {action: 'создания'}));
    };

    save() {
        return new Button(Object.assign({}, this.config, {action: 'сохранения'}));
    };

    edit() {
        return new Button(Object.assign({}, this.config, {action: 'редактирования'}));
    };

    delete() {
        return new Button(Object.assign({}, this.config, {action: 'удаления'}));
    };

    view() {
        return new Button(Object.assign({}, this.config, {action: 'просмотра'}));
    };

    close() {
        return new Button(Object.assign({}, this.config, {action: 'закрытия'}));
    };

    select() {
        return new Button(Object.assign({}, this.config, {action: 'выбора'}));
    };

    confirm() {
        return new Button(Object.assign({}, this.config, {action: 'подтверждения'}));
    };

    withText(text) {
        return new Button(Object.assign({}, this.config, {option: 'текстом', value: text}));
    };

    withName(text) {
        return new Button(Object.assign({}, this.config, {option: 'названием', value: text}));
    };

    withCaption(text) {
        return new Button(Object.assign({}, this.config, {option: 'заголовком', value: text}));
    };
}
class ModalTab extends Focused{
    constructor(config) {
        super(config);
        this.method = steps.when.modalTab;
        this.class = ModalTab;
    };

    withName(text) {
        return new ModalTab(Object.assign({}, this.config, {name: text}));
    };
}
class Link extends Basic{

    constructor(config) {
        super(config);
        this.method = steps.when.link;
        this.class = Link;
    };

    generated(flag) {
        return new Link(Object.assign({}, this.config, {generate: (flag) ? 'сгенерированную' : ''}));
    };

    withText(text) {
        return new Link(Object.assign({}, this.config, {text: text}));
    };

};
class Wait extends Basic{

    constructor(config) {
        super(config);
        this.method = steps.when.wait;
        this.class = Wait;
    };

    seconds(value) {
        return new Wait(Object.assign({}, this.config, {s: value}));
    };

};
class Input extends Focused{

    constructor(config) {
        super(config);
        this.method = steps.when.input;
        this.class = Input;
    };

    field() {
        return new Input(Object.assign({}, this.config, {inputType: 'поле'}));
    };

    filter() {
        return new Input(Object.assign({}, this.config, {inputType: 'фильтр'}));
    };

    withName(name) {
        return new Input(Object.assign({}, this.config, {name: name}));
    };

    withText(value) {
        return new Input(Object.assign({}, this.config, {valueType: 'текстом', value: value}));
    };

    withUcode(value) {
        return new Input(Object.assign({}, this.config, {valueType: 'уникальным кодом', value: value}));
    };

    withInnFl(value) {
        return new Input(Object.assign({}, this.config, {valueType: 'новым кодом ИНН(ЮЛ)', value: value}));
    };

    withInnUl(value) {
        return new Input(Object.assign({}, this.config, {valueType: 'новым кодом ИНН(ФЛ)', value: value}));
    };

    withTag(value) {
        return new Input(Object.assign({}, this.config, {valueType: 'сгенерированным тегом', value: value}));
    };

    withSnils(value) {
        return new Input(Object.assign({}, this.config, {valueType: 'новым кодом СНИЛС', value: value}));
    };

    withEmail(value) {
        return new Input(Object.assign({}, this.config, {valueType: 'уникальным email\'ом', value: value}));
    };

};
class MultiselectFilter extends Focused{

    constructor(config) {
        super(config);
        this.method = steps.when.multiselectFilter;
        this.class = MultiselectFilter;
    };

    withName(name) {
        return new MultiselectFilter(Object.assign({}, this.config, {name: name}));
    };

    withValue(value) {
        return new MultiselectFilter(Object.assign({}, this.config, {value: value}));
    };

};
class Textarea extends Basic {

    constructor(config) {
        super(config);
        this.method = steps.when.textarea;
        this.class = Textarea;
    };

    generated(flag) {
        return new Textarea(Object.assign({}, this.config, {generate: (flag) ? 'сгенерированный' : ''}));
    };

    withName(name) {
        return new Textarea(Object.assign({}, this.config, {name: name}));
    };

    withText(value) {
        return new Textarea(Object.assign({}, this.config, {value: value}));
    };

};
class Ckeditor extends Basic {

    constructor(config) {
        super(config);
        this.method = steps.when.ckeditor;
        this.class = Ckeditor;
    };

    generated(flag) {
        return new Ckeditor(Object.assign({}, this.config, {generate: (flag) ? 'сгенерированный' : ''}));
    };

    withName(name) {
        return new Ckeditor(Object.assign({}, this.config, {name: name}));
    };

    withText(value) {
        return new Ckeditor(Object.assign({}, this.config, {value: value}));
    };

};
class Datapicker extends Basic {

    constructor(config) {
        super(config);
        this.method = steps.when.datepicker;
        this.class = Datapicker;
    };

    withName(name) {
        return new Datapicker(Object.assign({}, this.config, {name: name}));
    };

    withValue(value) {
        return new Datapicker(Object.assign({}, this.config, {value: value}));
    };

};
class Autocomplete extends Focused{

    constructor(config) {
        super(config);
        this.method = steps.when.autocomplete;
        this.class = Autocomplete;
    };

    withName(name) {
        return new Autocomplete(Object.assign({}, this.config, {name: name}));
    };

    withText(value) {
        return new Autocomplete(Object.assign({}, this.config, {valueType: 'значение', value: value}));
    };

    withGenereatedtag(value) {
        return new Autocomplete(Object.assign({}, this.config, {valueType: 'сгенерированный тег', value: value}));
    };

    field() {
        return new Autocomplete(Object.assign({}, this.config, {type: 'поле'}));
    };

    filter() {
        return new Autocomplete(Object.assign({}, this.config, {type: 'фильтре'}));
    };

};
class Select extends Focused{

    constructor(config) {
        super(config);
        this.method = steps.when.select;
        this.class = Select;
    };

    withName(name) {
        return new Select(Object.assign({}, this.config, {name: name}));
    };

    withValue(value) {
        return new Select(Object.assign({}, this.config, {value: value}));
    };

};
class Checkbox extends Focused{

    constructor(config) {
        super(config);
        this.method = steps.when.checkbox;
        this.class = Checkbox;
    };

    withName(name) {
        return new Checkbox(Object.assign({}, this.config, {name: name}));
    };

};
class Radio extends Basic{

    constructor(config) {
        super(config);
        this.method = steps.when.radio;
        this.class = Radio;
    };

    withName(name) {
        return new Radio(Object.assign({}, this.config, {name: name}));
    };

    withValue(value) {
        return new Radio(Object.assign({}, this.config, {value: value}));
    };

};
class File extends Focused{

    constructor(config) {
        super(config);
        this.method = steps.when.file;
        this.class = File;
    };

    withName(name) {
        return new File(Object.assign({}, this.config, {name: name}));
    };

    withValue(value) {
        return new File(Object.assign({}, this.config, {value: value}));
    };

};
class ScrollDirection extends Basic{

    constructor(config) {
        super(config);
        this.method = steps.when.scrollDirection;
        this.class = ScrollDirection;
    };

    up() {
        return new ScrollDirection(Object.assign({}, this.config, {direction: 'наверх'}));
    };

    down() {
        return new ScrollDirection(Object.assign({}, this.config, {direction: 'вниз'}));
    };

};
class ScrollBlock extends Basic{

    constructor(config) {
        super(config);
        this.method = steps.when.scrollBlock;
        this.class = ScrollBlock;
    };

    withName(name) {
        return new ScrollBlock(Object.assign({}, this.config, {name: name}));
    };

};
class ClickTableTd extends Focused{

    constructor(config) {
        super(config);
        this.method = steps.when.clickTableTd;
        this.class = ClickTableTd;
    };

    at(number) {
        return new ClickTableTd(Object.assign({}, this.config, {number: number}));
    };

};

module.exports = {
    login: new Login(),
    logout: new Logout(),
    selfRegistration: new SelfRegistration(),

    checkTitleHtml: new CheckTitleHtml(),
    checkTitle: new CheckTitle(),
    checkCountElementsTable: new CheckCountElementsTable(),
    waitUntilLoaded: new WaitUntilLoaded(),
    checkRadioValue: new CheckRadioValue(),

    input: new Input(),
    section: new Section(),
    home: new Home(),
    menu: new Menu(),
    button: new Button(),
    modalTab: new ModalTab(),
    link: new Link(),
    wait: new Wait(),
    multiselectFilter: new MultiselectFilter(),
    textarea: new Textarea(),
    ckeditor: new Ckeditor(),
    datapicker: new Datapicker(),
    autocomplete: new Autocomplete(),
    select: new Select(),
    checkbox: new Checkbox(),
    radio: new Radio(),
    file: new File(),
    scrollDirection: new ScrollDirection(),
    scrollBlock: new ScrollBlock(),
    clickTableTd: new ClickTableTd()
};
