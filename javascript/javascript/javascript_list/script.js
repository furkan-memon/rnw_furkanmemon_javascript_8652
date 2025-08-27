// JavaScript Program To Print Hello World
{

    console.log("Hello, World!");
}

// JavaScript Program to Add Two Numbers
{
    let num1 = 5;
    let num2 = 10;
    let sum = num1 + num2;
    console.log("The sum is: " + sum);
}

// JavaScript Program to Find the Square Root
{
 let number = 16;
    let result = 0;

    for (let i = 1; i <= number; i++) {
        if (i * i === number) {
            result = i;
            break;
        }
    }

    if (result === 0) {
        console.log("Square root is not a whole number");
    } else {
        console.log("Square root of " + number + " is " + result);
    }

}

// JavaScript Program to Calculate the Area of a Triangle
{
      let b = parseInt(prompt("Enter the base : "))
     let h = parseInt(prompt("Enter the height :"))
 
     let area = 0.5 * b * h
 
     console.log("Area of triangle is : ", area)
}
// JavaScript Program to Swap Two Variables
let a = 5;
let b= 10;
 console.log("Before swapping: a = " + a + ", b = " + b);

let temp =a ;
a =  b ;
b = temp;

console.log("After swapping: a = " + a + ", b = " + b);
