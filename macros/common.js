const {Expression, prime, any, dig, str, exc, exp, present, replace} = require('../classes/expression');

//basic
const REXP_ANYTHING = any().noneOrMore();
const REXP_NUM = dig().atLeastOne();

//logic
const REXP_NAME_CAPTURE = (value) => replace(exc('"').noneOrMore().asGroup(), value).render();
const BLOCK_TYPE_CAPTURE = (btype) => replace(
    str('поле').or('блоке')
        .asGroup(),
    btype
).render();
const BLOCK_NAME_CAPTURE = (block) => replace(
      exp(`"${REXP_ANYTHING.render()}"`)
          .asGroup(),
      block
).render();
const BLOCK_OPT = (btype, block, mode) => present(
    exp(` в ${BLOCK_TYPE_CAPTURE(btype)} ${BLOCK_NAME_CAPTURE(block)}`)
        .asNonCaptureGroup()
        .asOptional(),
    !!block, mode
).render();
const MODAL_CAPTURE = (modal) => replace(
      str('модального окна')
          .asGroup(),
      modal
).render();
const MODAL_OPT = (modal, mode) => present(
    exp(` ${MODAL_CAPTURE(modal)}`)
        .asNonCaptureGroup()
        .asOptional(),
        !!modal, mode
).render();

module.exports = {
    //basic
    REXP_ANYTHING: REXP_ANYTHING,
    REXP_NUM: REXP_NUM,

    //logic
    REXP_NAME_CAPTURE: REXP_NAME_CAPTURE,
    BLOCK_TYPE_CAPTURE: BLOCK_TYPE_CAPTURE,
    BLOCK_NAME_CAPTURE: BLOCK_NAME_CAPTURE,
    BLOCK_OPT: BLOCK_OPT,
    MODAL_CAPTURE: MODAL_CAPTURE,
    MODAL_OPT: MODAL_OPT
};
