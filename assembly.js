const steps = require('./exports/snippets/stepDefenitions');
const sequences = require('./exports/snippets/sequences');

steps(() => console.log('steps done!'));
sequences(() => console.log('sequences done!'));
