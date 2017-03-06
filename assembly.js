const steps = require('./exports/stepDefenitions');

const user = require('./exports/user');
const common = require('./exports/common');
const kpgz = require('./exports/kpgz');
const spgz = require('./exports/spgz');
const characteristic = require('./exports/characteristic');
const participant = require('./exports/participant');

steps(() => console.log('steps done!'));

user(() => console.log('user done!'));
common(() => console.log('common done!'));
kpgz(() => console.log('kpgz done!'));
spgz(() => console.log('spgz done!'));
characteristic(() => console.log('characteristic done!'));
participant(() => console.log('participant done!'));
