//// Modules
//* link for reference - https://www.geeksforgeeks.org/node-js-modules/
//* link for reference - https://www.geeksforgeeks.org/node-js-modules/
/*In Node.js, Modules are the blocks of encapsulated code that communicate with an external application on the basis of their related functionality. Modules can be a single file or a collection of multiple files/folders. The reason programmers are heavily reliant on modules is because of their reusability as well as the ability to break down a complex piece of code into manageable chunks. 

Modules are of three types:

Core Modules
local Modules
Third-party Modules
*/

//// modules are encapsulated code
//// commonjs - every file in nodejs is a module(by default)
const john = 'john';
const peter = 'peter';
const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};

sayHi();
sayHi(john);
sayHi(peter);
