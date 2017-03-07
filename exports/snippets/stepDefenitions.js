const SnipetFile = require('../../classes/snippet');
const defenitions = require('../../steps/wrappers');

module.exports = function(callback) {

    let result = new SnipetFile('dist/snippets/steps').domain('.source.feature');

    for (let defenition in defenitions) {
        ['Given',
         'When',
         'Then',
         'And'].forEach((prefix) => {
            result.add({
                name: `${prefix}-${defenition}`,
                prefix: `${prefix}-${defenition}`,
                description: `${prefix}-${defenition}`,
                body: `${prefix} ${defenitions[defenition].regex()}`
            });
        });
    };

    return result.finalize(callback);
};
