class Sequence {

    constructor(condition, parent) {
        this.seq = [];
        this.parent = parent;
        this.condition = condition;
    };

    Step(prefix, defenition) {
        this.seq.push(`${prefix} ${(!!defenition.render) ? defenition.render() : defenition}`);

        return this;
    };

    Given(defenition) {
        return this.Step('Given', defenition);
    };

    When(defenition) {
        return this.Step('When', defenition);
    };

    Then(defenition) {
        return this.Step('Then', defenition);
    };

    And(defenition) {
        return this.Step(' And', defenition);
    };

    If(condition) {
        return new Sequence(condition, this);
    };

    End() {
        return (this.condition) ? this.parent.Sequence(this) : this.parent;
    };

    Comment(text) {
        this.seq.push(`#${text}`);

        return this;
    };

    Sequence(sequence) {
        if (sequence instanceof Sequence) {
            this.seq = this.seq.concat(sequence.content());
        }

        return this;
    };

    content() {
        return this.seq;
    };

};

module.exports = Sequence;
