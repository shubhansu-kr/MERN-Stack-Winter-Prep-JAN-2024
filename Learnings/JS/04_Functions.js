// Functions in JS 

// Normal Function(Using keyword)
// Callback
// Arrow
// IIFE
// Closure

function greet(name){
    return (`Hello ${name}`);
}

const greeting = greet("Anu");
console.log(greeting); 

function add(a, b) {
    return a + b;
}

// Default parameters.
function multiply(a, b = 1) {
    return a * b;
}

// Anonymous Functions 
const subtract = function sub(a, b) {
    return a-b;
}

// let a = sub(4, 2); -> Error
let a = subtract(4, 2);
console.log(a);

// Arrow Functions 
const divide = (x, y) => (x/y);


// Callback functions
// When we pass function as a parameter. 
const ba = function square(num, callback) {
    return callback(num, num);
}

console.log(ba(4, multiply));

// Closures
function outer(){
    const msg = "Outer fxn";

    function inner() {
        console.log(msg);
    }

    // function returning function
    return inner;
}

const innerFunction = outer();
innerFunction();

// IIFE
(function () {
    var msg = "IIFE Fxn";
    console.log(msg);
})();

// in nested function, the inner functions are not 
// accesible in the global context.

// So if we want to access any private function we can assign it 
// to the window object accesible in the global context.

// Closure - Nested functions 
var num = 100;
function out() {
    // var num = 10;
    function ini() {
        // var num = 1;
        console.log(num);
    }
    // ini();
    return ini;
}

out()();

var x = 21, b = 10;
console.log(x, b);
function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
}
console.log(x, b);

