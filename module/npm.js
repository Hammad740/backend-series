//! https://course-api.com/

//// some common npm commands :- https://www.freecodecamp.org/news/npm-cheat-sheet-most-common-commands-and-nvm/
//**NPM, or Node Package Manager, is a tool used by Node.js developers to install third-party packages or modules in their applications.0 It is a command-line interface (CLI) that allows developers to manage dependencies, scripts, and package.json files.1 Some of the most common commands used with npm include 'install package.json dependencies', 'install npm i', 'uninstall npm un', and 'update npm' */

//? package.json - manifest file(stores important info about project/package)
//? manual approach (create package.json in the root,create properties etc);
//? npm init(step by step process,press enter to skip);
//? npm init -y(everything default)

//// https://nodesource.com/blog/the-basics-of-package-json

//// https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/

//? Blocking methods execute synchronously and non-blocking methods execute asynchronously.

//** https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick */
//** What is the Event Loop?
//* The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible. */

//// asynchronous code is always offloaded first and immediate code is run,after that callback is executed.
