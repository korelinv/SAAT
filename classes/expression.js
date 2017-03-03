class Expression {

    constructor(value, group, nonCaptureGroup, optional) {
        this.expression = (!!value) ? value : '';
        this.group = (!!group) ? group : false;
        this.nonCaptureGroup = (!!nonCaptureGroup) ? nonCaptureGroup : false;
        this.optional = (!!optional) ? optional : false;
    };

    str(text) {
        return new Expression(this.expression.concat((text instanceof Expression) ? text.render() : text),
                              this.group,
                              this.nonCaptureGroup,
                              this.optional);
    };

    //str aliace
    exp(text) {
        return this.str(text);
    };

    any(count) {
        return new Expression(this.expression.concat('.'.repeat(count || 1)),
                              this.group,
                              this.nonCaptureGroup,
                              this.optional);
    };

    symbol(symbols) {
        return new Expression(this.expression.concat(`[${symbols}]`),
                              this.group,
                              this.nonCaptureGroup,
                              this.optional);
    };

    dig(count) {
        return new Expression(this.expression.concat('\\d'.repeat(count || 1)),
                              this.group,
                              this.nonCaptureGroup,
                              this.optional);
    };

    noneOrMore() {
        return new Expression(this.expression.concat('*'),
                              this.group,
                              this.nonCaptureGroup,
                              this.optional);
    };

    atLeastOne() {
        return new Expression(this.expression.concat('+'),
                              this.group,
                              this.nonCaptureGroup,
                              this.optional);
    };

    exc(expression) {
        return new Expression((`[^${expression}]`).concat(this.expression),
                              this.group,
                              this.nonCaptureGroup,
                              this.optional);
    };

    or(option) {
        return new Expression(`${this.expression}|${(option instanceof Expression) ? option.render() : option}`,
                              this.group,
                              this.nonCaptureGroup,
                              this.optional);
    };

    asOptional() {
        return new Expression(this.expression,
                              this.group,
                              this.nonCaptureGroup,
                              true);
    };

    asNonCaptureGroup() {
        return new Expression(this.expression,
                              this.group,
                              true,
                              this.optional);
    };

    asGroup() {
        return new Expression(this.expression,
                              true,
                              this.nonCaptureGroup,
                              this.optional);
    };

    render() {
        if (this.group) {
            return `(${this.expression})${(this.optional) ? '?' : ''}`;
        } else if (this.nonCaptureGroup) {
            return `(?:${this.expression})${(this.optional) ? '?' : ''}`;
        }

        return this.expression;
    };

};

// primes macros
const prime = new Expression();
const any = (count) => prime.any(count);
const dig = (count) => prime.dig(count);
const str = (text) => prime.str(text);
const exc = (symbols) => prime.exc(symbols);
const exp = (text) => prime.str(text);
const present = (expr, cond, regex) => {
    if (regex) {
        return expr;
    } else if (cond) {
        return new Expression(expr.expression);
    }

    return prime;
};
const replace = (expr, value) => {
    return (!!value || '' === value) ? new Expression(value) : expr;
};

module.exports = {
    Expression: Expression,
    prime: prime,
    any: any,
    dig: dig,
    str: str,
    exc: exc,
    exp: exp,
    present: present,
    replace: replace
};
