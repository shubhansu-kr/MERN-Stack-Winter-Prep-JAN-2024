var name;
let number;

const address = [1, 2, 3];

address.push(21);

console.log(name, number, address);
// undefined undefined [1, 2, 3, 21];

// We are able to add elements to a constant array.
// But we cannot change the value if const is used with a variable.
// When we assign an array as const, we create an array object which cannot
// be changed, but object properties can be changed itself.

name = 10;
console.log(name);

var userDetails = "User name is userNameVar";
// Now to replace userNameVar with get result, we can either use string concatination or 
// we can use template literals.

// concatination : 
console.log("Hello, " + name + "! How are you?");

// Template literals : 
console.log(`Hello ${name}! How are you?`);

// Template literals are more standard than other approach.

