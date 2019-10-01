const faker = require('casual-browserify');

module.exports = () => {
  const data = { products: [], cities: [{ id: 1, name: 'Владивосток' }] };
  // Create 1000 users
  for (let i = 0; i < 30; i++) {
    faker.seed(i);
    data.products.push({
      id: i,
      name: faker.company_name,
      image: faker.url,
      brand: {
        id: i,
        name: faker.company_name,
      },
      price: faker.integer(10, 10000),
      category: {
        id: i,
        name: faker.company_name,
        parent_id: i + 1,
      },
      stocks: [{ shop_id: i, quantity: faker.integer(1,15) }],
    });
  }
  return data;
};
