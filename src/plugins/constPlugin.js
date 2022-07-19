const ALL_CONSTS = {
  MAIN_CURRENCY: "VGTB",
};

ALL_CONSTS.install = function (Vue) {
  Vue.prototype.$getConst = (key) => {
    return ALL_CONSTS[key];
  };
};
export default ALL_CONSTS;
