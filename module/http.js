const http = require('http');

const server = http.createServer((req, res) => {
  //   console.log(req);
  //   res.write('Welcome to our home page');
  if (req.url === '/') {
    res.end('Welcome to our home page');
    return;
  }
  if (req.url === '/about') {
    res.end('Welcome to our about page');
    return;
  }
  res.end(`<h1>OOPS!</h1>
<p>We can't find the page.</p>
<a href='/'>home</a>`);
});

server.listen(5500);
