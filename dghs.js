const faker = require('casual-browserify');
const fs = require('fs');

// module.exports =
const call = () => {
  const arrayGenerator = (elements, length) => {
    const result = [];
    for (let i = 0; i < length; i++) {
      result.push(faker.random_element(elements));
    }
    return result;
  };

  const categories = [
    { id: 1, parent_id: 5, name: 'Корма' },
    { id: 13, parent_id: 5, name: 'Лакомства' },
    { id: 14, parent_id: 5, name: 'Игрушки' },
    { id: 2, parent_id: 1, name: 'Сухие' },
    { id: 3, parent_id: 1, name: 'Влажные' },
    { id: 4, parent_id: 1, name: 'Диета' },
    { id: 5, parent_id: null, name: 'Кошки' },
    { id: 6, parent_id: null, name: 'Собаки' },
    { id: 7, parent_id: null, name: 'Птицы' },
    { id: 8, parent_id: null, name: 'Грызуны' },
    { id: 10, parent_id: null, name: 'Хорьки' },
    { id: 11, parent_id: null, name: 'Рыбки' },
    { id: 12, parent_id: null, name: 'Ветеринария' },
  ];

  const shops = [
    {
      id: 1,
      name: 'На Юмашева',
    },
    {
      id: 2,
      name: 'На Сахалинской',
    },
    {
      id: 3,
      name: 'На Русской',
    },
  ];

  const length = 30;

  const data = {
    products: {
      count: length,
      page_size: 24,
      previous: 0,
      results: [],
    },
    products_raw: [],
    cities: [{ id: 1, name: 'Владивосток' }],
    categories,
    shops,
  };

  for (let i = 0; i < length; i++) {
    faker.seed(i);
    const product = {
      id: i,
      name: faker.random_element([
        'Forza10 Best Breeders Adult All Breeds Cer/Pat сухой корм для взрослых собак всех пород Олень/Картофель 20кг',
        'Forza10 Medium Diet Angello сухой корм для взрослых собак средних пород Ягненок 12кг',
        'Forza10 Legend Maintenance Evolution Skin сухой беззерновой корм для взрослых собак всех пород с чувствительной кожей 0,907кг',
        'Forza10 Legend New Zeland сухой беззерновой корм для взрослых собак всех пород Ягненок/Оленина 2,27кг',
        'Forza10 Oto Active диета сухой корм для собак всех пород при заболеваниях ушей 150гр',
      ]),
      image: faker.random_element([
        'https://doghouse.ru/images/uploads/products/46253/ca92f9ddcea4fcd12484ee04578891aa.png',
        'https://doghouse.ru/images/uploads/products/46915/3a90b5832117c8a0e89de6517ba61884.jpg',
        'https://doghouse.ru/images/uploads/products/45497/f97c4e106e5ac026a58a191deb4b3bbf.jpg',
        'https://doghouse.ru/images/uploads/products/43349/27cf4d31e768895548a1b2a29f88860f.jpg',
        'https://doghouse.ru/images/uploads/products/44702/2863258f0be915b8da9e60e0ff739c81.jpg',
      ]),
      brand: {
        id: 1,
        name: 'Forza',
      },
      price: faker.integer(10, 10000),
      category: faker.random_element(
        categories.filter(({ parent_id }) => parent_id),
      ),
      stocks: arrayGenerator(
        [
          { shop_id: 1, quantity: faker.integer(1, 15) },
          { shop_id: 2, quantity: faker.integer(1, 15) },
          { shop_id: 3, quantity: faker.integer(1, 15) },
          { shop_id: 4, quantity: faker.integer(1, 15) },
        ],
        faker.integer(0, 3),
      ),
    };
    data.products.results.push(product);
    data.products_raw.push(product);
  }
  return data;
};

fs.writeFile('exdb.json', JSON.stringify(call()), () => {});
