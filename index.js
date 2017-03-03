const SnipetFile = require('./classes/snippet');
const steps = {
    given: require('./steps/given'),
    then: require('./steps/then'),
    when: require('./steps/when')
};
const DOMAIN_FEATURE = '.source.feature';
const M_REGEX = {mode: true};

// определения шагов
let stepDefenitions = new SnipetFile('stepDefenitions');

stepDefenitions.domain(DOMAIN_FEATURE);
for (let file in steps) {
    stepDefenitions.comment(`определения шагов ${file}`);
    for (let defenition in steps[file]) {
        stepDefenitions.add({
            name: `${file}-${defenition}`,
            prefix: `${file}-${defenition}`,
            description: `${defenition}.js`,
            body: steps[file][defenition](M_REGEX)
        });
    };
};
stepDefenitions.finalize();


// общие макросы
let commonMacros = new SnipetFile('commonMacros');
commonMacros.domain(DOMAIN_FEATURE);
commonMacros.comment('общие макросы');
commonMacros.finalize();
