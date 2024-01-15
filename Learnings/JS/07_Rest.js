const firstName = "Shubh";

function greet(name) {

    name = this.firstName + name;
    // This will not throw error, since normal functions has access 
    // to global lexical.

    return `Hello ${name}`;
}

const greet1 = (name) => {
    return `Hello ${name}`;
    // arrow function does not have access to global lexical. 
    // this.firstName ; will throw error, since first name is not 
    // defined inside the function block.
}

// destructuring the object.
var [first, middle, last] = ["Lovely", "Professional", "University"];

// Array destructured into variables.
console.log(first, middle, last);

// Spread Operator
const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [f, s, ...rest] = numb;

console.log(numb);
console.log(f);
console.log(s);
console.log(rest);

// WE can also use it skip or alter the order of spread.
// rest element must be the last element in spread operator.
const  [secondLast, last1, , , , ...r] = numb;

// console.log(n);
console.log(r);
console.log(secondLast, last1);

const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
