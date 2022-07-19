import products from "./data/products";

const SLEEP_TIME = 200;

const fetch = (fn) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fn);
    }, SLEEP_TIME);
  });
};

export const getProductsList = () => {
  return fetch(products);
};
