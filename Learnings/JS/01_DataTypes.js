let name = "shubh";
let age = 21;
let cg = 9.17;

console.log(name, typeof(name)); // string
console.log(age, typeof(age)); // number
console.log(cg, typeof(cg)); // number


// Even characters are considered as strings
let blood = 'B';
console.log(blood, typeof(blood));

let isAdult = true;
console.log(isAdult, typeof(isAdult));

// Let's try the array type.
let add = ["Maheru", "Lawgate", 144410];

console.log(add, typeof(add)); // object

var dt = {key: "value", arr: [1, 2, 3]};
console.log(dt, typeof(dt)); // object

console.log(dt.arr);

var kt;
console.log(kt, typeof(kt));

let gt;
console.log(gt, typeof(gt)); // undefined

gt = null;
console.log(gt, typeof(gt)); // object

// null is an object;

// functions 
function greet(name) {
    console.log(`Hello ${name}`);
}

console.log(greet, typeof(greet)); // function
// function itself is a data type.

// All the data types we encountered.
// Object
// Function
// Number
// String
// Boolean
// undefined
