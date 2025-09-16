// // 1 JavaScript Program To Print Hello World
// {

//     console.log("Hello, World!");
// }

// // 2 JavaScript Program to Add Two Numbers
// {
//     let num1 = 5;
//     let num2 = 10;
//     let sum = num1 + num2;
//     console.log("The sum is: " + sum);
// }

// // 5 JavaScript Program to Find the Square Root
// {
//  let number = 16;
//     let result = 0;

//     for (let i = 1; i <= number; i++) {
//         if (i * i === number) {
//             result = i;
//             break;
//         }
//     }

//     if (result === 0) {
//         console.log("Square root is not a whole number");
//     } else {
//         console.log("Square root of " + number + " is " + result);
//     }

// }

// // 4 JavaScript Program to Calculate the Area of a Triangle
// {
//       let b = parseInt(prompt("Enter the base : "))
//      let h = parseInt(prompt("Enter the height :"))
 
//      let area = 0.5 * b * h
 
//      console.log("Area of triangle is : ", area)
// }
// // 6 JavaScript Program to Swap Two Variables
// {

//     let a = 5;
//     let b= 10;
//      console.log("Before swapping: a = " + a + ", b = " + b);
    
//     let temp =a ;
//     a =  b ;
//     b = temp;
    
//     console.log("After swapping: a = " + a + ", b = " + b);
// }
// // 7 JavaScript Program to Convert Kilometres to Miles
// {
//     let Kilometres = 10;
//     let miles = Kilometres * 0.621371;
//     console.log(Kilometres + " kilometers is equal to " + miles + " miles.");
// }
// // 8 JavaScript Program to Convert Celsius to Fahrenheit
// {
//     let celsius = 25;
//     let Fahrenheit = (celsius * 9/5) + 32;
//     console.log( celsius + "°C is equal to " + Fahrenheit + "°F." );
// }
// // 9 JavaScript Program to Check if a number is Positive, Negative, or Zero
// {
//     let num = parseInt(prompt("Enter a number: "));
//     if (num >0){
//         console.log("The number is positive.");
//     }
//     else if(num<0){
//         console.log("the number is negative.");
//     }
//     else{
//         console.log("The number is zero.");
//     }
// }
// // 10 JavaScript Program to Check if a Number is Odd or Even
// {
//     let number = parseInt(prompt("Enter a number: "));
//     if (number % 2 === 0) {
//         console.log(number + " is an even number.");
//     } else {
//         console.log(number + " is an odd number.");
//     }
// }
// // 11 JavaScript Program to Find the Largest Among Three Numbers
// {
//      let num1 = parseFloat(prompt("Enter first number: "));
//     let num2 = parseFloat(prompt("Enter second number: "));
//     let num3 = parseFloat(prompt("Enter third number: "));
//     let largest;

//     if (num1 >= num2 && num1 >= num3) {
//         largest = num1;
//     } else if (num2 >= num1 && num2 >= num3) {
//         largest = num2;
//     } else {
//         largest = num3;
//     }
//     console.log("The largest number is: " + largest);
// }
// // 12 JavaScript Program to Check Prime Number
// {
//     let number = parseInt(prompt("Enter a positive integer: "));
//     let isPrime = true;
//     if (number <= 1) {
//         isPrime = false;
//     } else {
//         for (let i = 2; i <= Math.sqrt(number); i++) {
//             if (number % i === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
// }
//     if (isPrime) {
//         console.log(number + " is a prime number.");
//     }
//     else {
//         console.log(number + " is not a prime number.");
//     }
// }
// // 13 JavaScript Program to Print All Prime Numbers in an Interval
// {
//     let lower = parseInt(prompt("Enter the lower bound: "));
//     let upper = parseInt(prompt("Enter the upper bound: "));
//     console.log("Prime numbers between " + lower + " and " + upper + " are:");
//     for (let num = lower; num <= upper; num++) {
//         let isPrime = true;
//         if (num <= 1) {
//             isPrime = false;
//         } else {
//             for (let i = 2; i <= Math.sqrt(num); i++) {
//                 if (num % i === 0) {
//                     isPrime = false;
//                     break;
//                 }
//             }
//         }
//         if (isPrime) {
//             console.log(num);

//         }
//     }
// }
// // 14 JavaScript Program to Find the Factorial of a Number
// {
//     let number = parseInt(prompt("Enter a positive integer: "))
//     let  sum = 1;
//     for (let i = 1; i <= number; i++) {
//    sum =sum*i ;
        
// }
// console.log(sum);

// }
// // 15 Javascript Program to Generate a Random Number
// {
//     let randomNumber = Math.floor(Math.random() * 10000) ;
//     console.log("Random number between " + randomNumber);
// }
// // 16 JavaScript Program to Display the Multiplication Table
// {

//     let number = parseInt(prompt("Enter a number to display its multiplication table: "))
//     console.log("Multiplication table of " + number + ":")
//     for (let i = 1; i <= 10; i++) {
//         console.log(number + " x " + i + " = " + (number * i))
//     }
// }
// // 17 JavaScript Program to Print the Fibonacci Sequence
// {
//     let n = parseInt(prompt("Enter the number of terms for the Fibonacci sequence: "))
//     let a = 0, b = 1, c
//     console.log("Fibonacci sequence:")
//     for (let i = 1; i <= n; i++) {
//         console.log(a)
//         c = a + b
//         a = b
//         b = c
//     }
// }
// 18 JavaScript Program to Check if the Numbers Have Same Last Digit
// {
//     let num1 = parseInt(prompt("Enter the first number: "))
//     let num2 = parseInt(prompt("Enter the second number: "))
//     if (num1 % 10 === num2 % 10) {
//         console.log("Both numbers have the same last digit.")
//     } else {
//         console.log("The numbers do not have the same last digit.")
//     }
// }
// 19 JavaScript Program to Find HCF or GCD
// {
//     let num1 = parseInt(prompt("Enter the first number: "))
//     let num2 = parseInt(prompt("Enter the second number: "))
//     let hcf
//     for (let i = 1; i <= num1 && i <= num2; i++) {
//         if (num1 % i === 0 && num2 % i === 0) {
//             hcf = i
//         }
//     }
//     console.log("HCF of " + num1 + " and " + num2 + " is: " + hcf)
// }
// // 20 JavaScript Program to Find LCM
// {
//     let num1 = parseInt(prompt("Enter the first number: "))
//     let num2 = parseInt(prompt("Enter the second number: "))
//     let lcm = (num1 * num2) / hcf
//     console.log("LCM of " + num1 + " and " + num2 + " is: " + lcm)
// }
// // 20 JavaScript Program to Find the Factors of a Number
// {
//     let number = parseInt(prompt("Enter a positive integer: "))
//     console.log("Factors of " + number + " are:")
//     for (let i = 1; i <= number; i++) {
//         if (number % i === 0) {
//             console.log(i)
//         }
//     }
// }
// 21 JavaScript Program to Convert Decimal to Binary
// {
//     let decimal = parseInt(prompt("Enter a decimal number: "))
//     let binary = decimal.toString(2)
//     console.log("Binary representation of " + decimal + " is: " + binary)
// }
// 22 JavaScript Program to Find ASCII Value of Character
// {
//     let char = 'hello'
//     for (let i = 0; i < char.length; i++) {
//         console.log("ASCII value of " + char.charAt(i) + " is: " + char.charCodeAt(i))
//     }

// }
// 23 JavaScript Program to Check Whether a String is Palindrome or Not
// {
//     let str = "Hello, World!"
//     let r = ""
//     for (let i = str.length - 1; i >= 0; i--) {
//         r += str[i]
//     }
//     console.log(r)
//     if (str === r) {
//         console.log("The string is a palindrome.")
//     }
//     else {
//         console.log("The string is not a palindrome.")
//     }
// }
// 24 JavaScript Program to Count the Number of Vowels in a String
// {
//     function vowels(str) {
//         let count = 0
//         for (let i = 0; i < str.length; i++) {
//             let char = str.charAt(i).toLowerCase()
//             if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//                 count++
//             }
//         }
//         return count
//     }
//     let inputString = "Hello, World!"
//     console.log("Number of vowels in '" + inputString + "': " + vowels(inputString))
// }
// 25 JavaScript Program to Replace Characters of a String
// {
    
//     let inputString = "Hello, World!"
//     let Replace = /hi/i
//     let result = inputString.replace(Replace, "hi")
//     console.log("Original string: " + inputString)
//     console.log("Modified string: " + result)
    
// }
// // 26 JavaScript Program to Reverse a String
// {
//     let str = "hello javascript"
//     let r=""
//     for(let i=str.length-1;i>=0;i--){
//         r+=str[i]
//     }
//     console.log(r);
// }
// 27 JavaScript Program to Convert the First Letter of a String into UpperCase
// {
//     let str = "hello javascript"
//     let result = str.charAt(0).toUpperCase() + str.slice(1)
//     console.log(result)
// }
// 28 JavaScript Program to Trim a String
// {
//     let str = "    Hello world!   ";
//     console.log(str.trim());
// }
// 29 JavaScript Program to Print the Fibonacci Sequence
// {
//     let n = parseInt(prompt("Enter a number: "))
//     let num1 = 0, num2 = 1
//     let num3
//     console.log("Fibonacci Series:")
//     for (let i = 1; i <= n; i++) {
//         console.log(num1)
//         num3 = num1 + num2
//         num1 = num2
//         num2 = num3
//     }


// }
// 30 JavaScript Program to Display Date and Time
// {
//     let now = new Date();
//     console.log("Current date and time:", now);
    
// }
// //  31 JavaScript Program to Make a Simple Calculator
// {
//     let num1 = parseInt(prompt("Enter first number: "))
//     let num2 = parseInt(prompt("Enter second number: "))
//     let operator = prompt("Enter an operator (+, -, *, /): ")
//     let result
//     switch (operator) {
//         case "+":
//             result = num1 + num2
//             break
//         case "-":
//             result = num1 - num2
//             break
//         case "*":
//             result = num1 * num2
//             break
//         case "/":
//             result = num1 / num2
//             break
//         default:
//             console.log("Invalid operator")
//     }
//     console.log("Result: " + result)
// }
// // 32 JavaScript Program to Find the Sum of Natural Numbers
// {
//     let n = parseInt(prompt("Enter a positive integer: "))
//     let sum = 0
//     for (let i = 1; i <= n; i++) {
//         sum += i
//     }
//     console.log("Sum of natural numbers up to " + n + " is: " + sum)
// }
// // 33 JavaScript Program to Check Leap Year
// {
//     let year = parseInt(prompt("Enter a year: "))
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         console.log(year + " is a leap year.")
//     } else {
//         console.log(year + " is not a leap year.")
//     }
// }
// 34 JavaScript Program to Format the Date
// {
//     let date = new Date()
//     let day = date.getDay()
//     let month =date.getMonth() + 1
//     let year = date.getFullYear()
//     console.log("Formatted Date: " + day + "/" + month + "/" + year)
// }
// 35 Javascript Program to Display Current Date
// {
//  let date = new Date()
//  console.log(date.toDateString());
 
// }
// 36 JavaScript Program to Compare The Value of Two Dates
// {
//     let date = new Date(2006, 6, 19)
//     let date1 = new Date(2010, 7, 20)
//     if(date > date1){
//         console.log("date is after date1");
//     }
//     else if(date < date1){
//         console.log("date1 is after date");
//     }
//     else{
//         console.log("BOth dates are equal");
        
// }
// }
// 37 JavaScript Program to Convert Date to Number
// {
//     let num= new Date(2020, 4, 15)
//     console.log(num.getTime());
    
// }


// 
// // 38 JavaScript Program to Remove a Property from an Object
// {
//     let obj = { name: "John", age: 30, city: "New York" }
//     delete obj.age
//     console.log(obj);
// }
// 39 JavaScript Program to Check if a Key Exists in an Object
// {
//     let obj = { name: "John", age: 30, city: "New York" }
//     console.log("age" in obj);
// }
// 40 JavaScript Program to Clone a JS Object
// {
//     let obj = { name: "John", age: 30, city: "New York" }
//     let clone = Object.assign({}, obj)
//     console.log(clone);
// }
// 41 JavaScript Program to Loop Through an Object
{
    let obj = { name: "John", age: 30, city: "New York" }
    for (let key in obj) {
        console.log(key + ": " + obj[key]);
    }
}
// 42 JavaScript Program to Merge Property of Two Objects
{
    let obj1 = { name: "John", age: 30 }
    let obj2 = { city: "New York", country: "USA" }
    let merged = Object.assign({}, obj1, obj2)
    console.log(merged);
}
// 43 JavaScript Program to Count the Number of Keys/Properties in an Object
{
    let obj = { name: "John", age: 30, city: "New York" }
    console.log(Object.keys(obj).length);
}
// 44 JavaScript Program to Add Key/Value Pair to an Object
{
    let obj = { name: "John", age: 30, city: "New York" }
    obj.country = "USA"
    console.log(obj);
}
// 45 JavaScript Program to Convert Objects to Strings
{
    let obj = { name: "John", age: 30, city: "New York" }
    let jsonString = JSON.stringify(obj)
    console.log(jsonString);
}
