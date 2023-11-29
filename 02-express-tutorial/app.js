// const { log } = require('console');
// const http = require('http');
// const { readFileSync } = require('fs');
// const homePage = readFileSync('./navbar-app/index.html');
// const homeStyles = readFileSync('./navbar-app/styles.css');
// const homeImage = readFileSync('./navbar-app/logo.svg');
// const homeLogic = readFileSync('./navbar-app/browser-app.js');

// const server = http.createServer((req, res) => {
//   // console.log(req.method);
//   // console.log(req.url);

//   const url = req.url;
//   if (url === '/') {
//     res.writeHead(200, { 'content-type': 'text/html' });
//     console.log(`user hit the server`);
//     res.write(homePage);
//     res.end();
//   } else if (url === '/styles.css') {
//     res.writeHead(200, { 'content-type': 'text/css' });
//     res.write(homeStyles);
//     res.end();
//   } else if (url === '/browser-app.js') {
//     res.writeHead(200, { 'content-type': 'text/javascript' });
//     res.write(homeLogic);
//     res.end();
//   } else if (url === '/logo.svg') {
//     res.writeHead(200, { 'content-type': 'image/svg+xml' });
//     res.write(homeImage);
//     res.end();
//   } else {
//     res.writeHead(404, { 'content-type': 'text/html' });
//     console.log(`user hit the server`);
//     res.write('<h1>Page not found</h1>');
//     res.end();
//   }
// });

// server.listen(5500, () => {
//   console.log(`Server is listening on port 5500`);
// });

//// port :- https://www.scaler.com/topics/computer-network/what-is-port/

const express = require('express');
const app = express();
const path = require('path');
const { products } = require('./data.js');
//// setup static and middleware
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res
    .status(200)
    .send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

app.get('/api/products', (req, res) => {
  const newProduct = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.status(200).json(newProduct);
});
//? route parameters
//// whenever think of route parameters think of placeholders,whrer user provides some data and with the help of res and req and some kind of logic we can make our life easier.

app.get('/api/products/:productID', (req, res) => {
  // console.log(req);
  // console.log(req.params);
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send('Product does not exists');
  }
  res.json(singleProduct);
});

app.get('/api/v1/query', (req, res) => {
  console.log(req.query);

  const { search, limit } = req.query;

  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('No products match your search');
    res.status(200).send({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);
});
app.get('/about', (req, res) => {
  res.status(200).send('Home Page');
});

app.get('/products', (req, res) => {
  res.json(products);
});
app.get('/navbar', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
});
app.all('*', (req, res) => {
  res.status(404).send('<h1>Resource not found.</h1>');
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
