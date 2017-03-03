class Sequence {

    constructor() {
        this.seq = [];
    };

    step(prefix, defenition) {
        this.seq.push(`${prefix} ${(!!defenition.render) ? defenition.render() : defenition}`);

        return this;
    };

    given(defenition) {
        return this.step('Given', defenition);
    };

    when(defenition) {
        return this.step('When', defenition);
    };

    then(defenition) {
        return this.step('Then', defenition);
    };

    and(defenition) {
        return this.step(' And', defenition);
    };

    ifelse(condition, trueSequence, falseSequence) {

        if (condition) {
            trueSequence(this);
        } else if (!!falseSequence) {
            falseSequence(this);
        }

        return this;
    };

    comment(text) {
        this.seq.push(`#${text}`);

        return this;
    };

    append(seq) {
        if (seq instanceof Sequence) {
            this.seq = this.seq.concat(seq.content());
        }

        return this;
    };

    content() {
        return this.seq;
    };

};

module.exports = Sequence;
