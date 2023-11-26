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

//// setup static and middleware
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.status(200).send('Home Page');
});

app.get('/about', (req, res) => {
  res.status(200).send('Home Page');
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
