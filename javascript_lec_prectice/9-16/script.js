let num = new Number(5)
console.log(num)
console.log("the given value is a finite numberthe given value is a finite number"); 
console.log(Number.isFinite(10/20));
console.log("if the given value is an integer.");
console.log(Number.isInteger(10));
//  the given value is a number with value NaN
console.log("the given value is a number with value NaN");

console.log(Number.isNaN(NaN));
console.log("the given value is a number that is a safe integer");
console.log(Number.isSafeInteger(10));
// Number.parseFloat
console.log(Number.parseFloat("30 40 50"));
// Number.parseInt()
console.log(Number.parseInt("101",2));
