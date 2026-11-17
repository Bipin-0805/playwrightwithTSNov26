/*
variable are used to store data values. In JavaScript, we use the var, let, and const keywords to declare variables.
*/ 

//var: The var keyword is used to declare a variable, optionally initializing it to a value. Variables declared with var are function-scoped or globally-scoped and can be re-declared and updated.

var username = "John Doe"; 

console.log(username); // Output: John Doe

username = "Jane Smith"; // Updating the value of the variable
console.log(username); // Output: Jane Smith

var username = "Alice Johnson"; // Re-declaring the variable
console.log(username); // Output: Alice Johnson

// let: The let keyword is used to declare a block-scoped variable, optionally initializing it to a value. Variables declared with let can be updated but not re-declared within the same scope.
let sudentname = "John Doe";
console.log(sudentname); // Output: John Doe

//let sudentname = "Jane Smith"; // This will cause an error because sudentname has already been declared in the same scope
//console.log(sudentname); // Output: Jane Smith

studentname = "Jane Smith"; // Updating the value of the variable
console.log(studentname); // Output: Jane Smith

//const: The const keyword is used to declare a block-scoped variable that cannot be updated or re-declared. Variables declared with const must be initialized at the time of declaration.
const country = "USA";
console.log(country); // Output: USA    

//country = "Canada"; // This will cause an error because country is a constant and cannot be updated
// const country = "Canada"; // This will cause an error because country is a constant and cannot be re-declared

//JavaScript is dynamic typed language.

let  data = 25;
console.log(typeof data); // Output: 25

data = 235.41
console.log(typeof data); // Output: 235.41

data = "Hello, World!";
console.log(typeof data); // Output: Hello, World!