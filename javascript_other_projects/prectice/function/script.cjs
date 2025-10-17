{// function declaration
function sub(a, b) {
  return a - b;
}
// function expression
const add = function (a, b) {
  return a + b;
};
// fat arrow function
let mul = (a,b) => a * b ;
// parameter vs argument
// parameter is variable in function definition
// argument is actual value passed to function
console.log(sub(10, 5)); // 5
console.log(add(10, 5)); // 15
console.log(mul(10, 5)); // 50
// default parameter
//  if user does not pass second argument, it will take default value 2
function div(a, b = 2) {
  return a / b;
}
console.log(div(10,5)); // 5
// rest parameter
// it will take all arguments and put them in an array
function sum(...numbers) {
  console.log(numbers);
  
}
sum(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
// spread operator
// it will take array and spread it into individual elements
let arr = [1, 2, 3];
console.log(...arr); // 1 2 3
// return statement
function getName() {
  return "John";
}
console.log(getName()); // John
// erly return
function checkAge(age) {
  if (age < 18) {
    return "Too young";
  }
    return "Old enough";
}
console.log(checkAge(16)); // Too young
// first-class functions
// functions are treated as first-class citizens
// can be assigned to variables, passed as arguments, returned from other functions
const greet = function(name) {
  return `Hello, ${name}`;
};
console.log(greet("Alice")); // Hello, Alice
// higher-order functions
// functions that take other functions as arguments or return functions
function applyOperation(a, b, operation) {
  return operation(a, b);
}
console.log(applyOperation(10, 5, add)); // 15
console.log(applyOperation(10, 5, sub)); // 5
console.log(applyOperation(10, 5, mul));
// pure vs impure functions
// pure function: same input always gives same output, no side effects
function pureAdd(a, b) {
  return a + b;
} // impure function: output can vary, has side effects
let counter = 0;
function impureIncrement() {
    counter++;
    return counter;
}
console.log(pureAdd(2, 3)); // 5
console.log(impureIncrement()); // 1
console.log(impureIncrement()); // 2
// IIFE (Immediately Invoked Function Expression)
// iffe is a function that runs as soon as it is defined
let an = (function() {
  console.log("Hello from IIFE");
})();
// closures
// closure is a function that remembers its outer variables
function outer() {

    let count = 0;
    return function inner() {
        count++;
        return count;
    }
}
const counter1 = outer();
console.log(counter1()); // 1
console.log(counter1()); // 2
const counter2 = outer();
console.log(counter2()); // 1
console.log(counter2()); // 2
// lexical scope
// inner function has access to outer function's variables
function parent() {
    let name = "Parent";
    function child() {
        console.log(name);
    }
    child();
}
// hoisting
// function declarations are hoisted
hoistedFunction();
function hoistedFunction() {
    console.log("This function is hoisted");
}
// function expressions are not hoisted
// unhoistedFunction(); // Error: unhoistedFunction is not defined
const unhoistedFunction = function() {
    console.log("This function is not hoisted");
};
}
{
  let x  = 0;
  function greet (...valu){
    for(let i of valu){
    x+=i;
 
    }
  }
  greet(1,2,3,4,5);
  console.log(x);
}
{

// writen a BMI calculator using function
function calculateBMI(weight, height) {
  return weight / (height * height);
}
calculateBMI(80,1.8);
console.log(calculateBMI(80,1.8).toFixed(2));
// }create a reusable discount calculator function
function calculateDiscount(discountPercent) {
return function(price) {
  return price - (price * discountPercent / 100);
}

}
let numbers = Number(prompt("Enter a number:"));
const tenPercentDiscount = calculateDiscount(numbers);
console.log(tenPercentDiscount(300));
}
{
  function double(val){
    return val * 2
  }
  console.log(double(22));
  
}
{
  (function(){
    let password = " aman "
    console.log(password);
    
  })
  // console.log(password);
  
}