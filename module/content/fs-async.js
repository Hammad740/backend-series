//// callback hell :- https://www.geeksforgeeks.org/what-to-understand-callback-and-callback-hell-in-javascript/

const { readFile, writeFile } = require('fs');

readFile('module/content/first.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = console.log(data);
});
