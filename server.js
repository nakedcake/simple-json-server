// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('exdb.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.use(
  jsonServer.rewriter({
    '/products/:id': '/products_raw?id=:id',
  }),
);

server.listen(1488, () => {
  console.log('JSON Server is running');
});
