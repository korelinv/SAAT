const Feature = require('./classes/feature');
const Sequence = require('./classes/sequence');

global.$Feature = Feature;
global.$Sequence = Sequence;

const steps = require('./exports/snippets/stepDefenitions');

const user = require('./exports/snippets/user');
const common = require('./exports/snippets/common');
const kpgz = require('./exports/snippets/kpgz');
const spgz = require('./exports/snippets/spgz');
const characteristic = require('./exports/snippets/characteristic');
const participant = require('./exports/snippets/participant');

steps(() => console.log('steps done!'));

user(() => console.log('user done!'));
common(() => console.log('common done!'));
kpgz(() => console.log('kpgz done!'));
spgz(() => console.log('spgz done!'));
characteristic(() => console.log('characteristic done!'));
participant(() => console.log('participant done!'));

const features = require('./exports/features/index');

features();
