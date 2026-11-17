/*
 Assignment operator
 Arithmetic operator
 Logical operator
 Ternary operator
 unary operator
 comparison operator

*/

function arithmeticoperators() {
    let a = 12;
    let b = 5;

    let sum = a + b; // Addition
    let difference = a - b;
    let product = a * b;
    let quotient = a / b;
    let remainder = a % b;

    console.log("Sum: " + sum); // Output: Sum: 15
    console.log("Difference: " + difference);
    console.log("Product: " + product);
    console.log("Quotient: " + quotient);
    console.log("Remainder: " + remainder);

}

function assignmentoperators() {
 let x = 10;

  x +=5;
  // x = x+5;
console.log("Value of x " + x); // Output: Value of x after += 5: 15
}

//arithmeticoperators();
assignmentoperators();