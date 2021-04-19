// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll() {
  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async() => {
  const goods = await getAll();

  return goods
    .sort((first, second) => first.name.localeCompare(second.name))
    .slice(0, 5);
};

export const getRedGoods = async() => {
  const goods = await getAll();

  return goods.filter(product => product.color === 'red');
};