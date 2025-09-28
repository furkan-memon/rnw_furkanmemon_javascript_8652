// Function declaration
// function functionName(parameters) { // code block }
{
    function sum(a,b){
        return a+b;
    }
    let r = sum(2,5)
    console.log(r);
    
}
// Function expression
{
    let  sum = function sum(a ,b){
        return a +b
    }
    console.log(sum(2,5));
    
}
// Arrow function
{
    let sum = (a,b) => a+b 
 console.log(sum);
 
    
}
// Immediately Invoked Function Expression (IIFE)
{
    (function msg(){
   const secretMessage = "You can't see me!";
  console.log("This is an IIFE.");
    })
}
// Nested (inner) and outer functions
{
    function outer() {
  const outerVar = "I am an outer variable.";

  function inner() { 
    console.log(outerVar); 
  }

  inner();
}
outer();
}
// Function closures
{
    function count(){
        let count = 0;
        return function(){
            count +=1;
            return count
        }
    }
    let counter = count()
    console.log(counter());
    console.log(counter());
    console.log(counter());

    
}
