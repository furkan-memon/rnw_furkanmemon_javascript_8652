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
{

    let a = 5;
    let b= 10;
     console.log("Before swapping: a = " + a + ", b = " + b);
    
    let temp =a ;
    a =  b ;
    b = temp;
    
    console.log("After swapping: a = " + a + ", b = " + b);
}
// JavaScript Program to Convert Kilometres to Miles
{
    let Kilometres = 10;
    let miles = Kilometres * 0.621371;
    console.log(Kilometres + " kilometers is equal to " + miles + " miles.");
}
// Javascript Program to Convert Celsius to Fahrenheit
{
    let celsius = 25;
    let Fahrenheit = (celsius * 9/5) + 32;
    console.log( celsius + "°C is equal to " + Fahrenheit + "°F." );
}
// Javascript Program to Check if a number is Positive, Negative, or Zero
{
    let num = parseInt(prompt("Enter a number: "));
    if (num >0){
        console.log("The number is positive.");
    }
    else if(num<0){
        console.log("the number is negative.");
    }
    else{
        console.log("The number is zero.");
    }
}
// Javascript Program to Check if a Number is Odd or Even
{
    let number = parseInt(prompt("Enter a number: "));
    if (number % 2 === 0) {
        console.log(number + " is an even number.");
    } else {
        console.log(number + " is an odd number.");
    }
}
// JavaScript Program to Find the Largest Among Three Numbers
{
     let num1 = parseFloat(prompt("Enter first number: "));
    let num2 = parseFloat(prompt("Enter second number: "));
    let num3 = parseFloat(prompt("Enter third number: "));
    let largest;

    if (num1 >= num2 && num1 >= num3) {
        largest = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        largest = num2;
    } else {
        largest = num3;
    }
    console.log("The largest number is: " + largest);
}
// JavaScript Program to Check Prime Number
{
    let number = parseInt(prompt("Enter a positive integer: "));
    let isPrime = true;
    if (number <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
}
    if (isPrime) {
        console.log(number + " is a prime number.");
    }
    else {
        console.log(number + " is not a prime number.");
    }
}
// JavaScript Program to Print All Prime Numbers in an Interval
{
    let lower = parseInt(prompt("Enter the lower bound: "));
    let upper = parseInt(prompt("Enter the upper bound: "));
    console.log("Prime numbers between " + lower + " and " + upper + " are:");
    for (let num = lower; num <= upper; num++) {
        let isPrime = true;
        if (num <= 1) {
            isPrime = false;
        } else {
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) {
            console.log(num);

        }
    }
}
{
    let number = parseInt(prompt("Enter a positive integer: "))
    let  sum = 1;
    for (let i = 1; i <= number; i++) {
   sum =sum*i ;
        
}
console.log(sum);

}
