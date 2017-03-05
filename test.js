const Seq = require('./classes/sequence');

let seq = new Seq();

let subseq = new Seq()
    .Given('99')
    .Then('100');

seq
    .When('1')
    .Then('2')
    .If(false)
        .When('3')
        .If(true)
            .And('3.1')
            .And('3.2')
        .End()
        .Then('4')
    .End()
    .If(true)
        .When('5')
        .Then('6')
    .End()
    .And('7')
    .Sequence(subseq)
    .Then('8')

console.log(seq.content().join('\n'));
