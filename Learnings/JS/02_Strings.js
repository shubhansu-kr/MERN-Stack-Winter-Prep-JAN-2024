let firstName = "Programming";
let lastName = "Pathshala";

console.log(firstName);
console.log(firstName.length);

// strings are indexed in JS. That too from 0
console.log(firstName[1]);

// we can concatinate two or more strings using + operator
let fullName = firstName+ " " + lastName;

console.log(fullName);

// WE also have template literals to inject variables in strings.


// CHange case 
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());

// Both the function returns the changed value instead of changing the 
// variable itself.

// FullName remained the same.
console.log(fullName);

// Trimming whitespaces
var data = "  dsf  ";
console.log(data.trim());

// Finding substrings 
console.log(fullName.indexOf("Pat"));

// Extracting substring
