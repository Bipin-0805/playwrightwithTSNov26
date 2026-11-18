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

 x -=5
 console.log("value of x "+x)
}

//comparison operator > < >= <=  ==  ===  "10" 10

function comparisonoperator(){
    let a=15;
    let b=20;
    let c = 35, d=35;

    console.log( b>a)
    let e = c<=d
    console.log(e)
    console.log("check for equality")
   let x = 10
   let y = "10"
   console.log(x==y)
   console.log(x===y)

}
function logicaloperators(){
    let a = true, b= true
    console.log( a && b)
    console.log( a || b)
}

function ternaryoperator(){
// condition ? expression1:expression2
    let  age = 15;
    const result= age>=18 ?"yes your are eligible":"try next year"
    console.log(result)
}
//ternaryoperator()
//write a programm to find the maximum of three number a=23, b=56, c=48

function findmaxofthree(){
    const a=78,b=54,c=38
    let max=  (a>b)?((a>c)? a:c ): ((b>c)?b:c)
    console.log("Max of three is "+max)
}

 function unaryoperator(){
    let x = 12;
   // ++x    x++    --x  x--

   console.log(x++) //postincrement
   console.log(x)
   console.log(--x)
 
 
 }
 unaryoperator()