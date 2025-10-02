
// Javascript Functions and Function Expression

{
  function greet(){
    console.log("Hello World!!!");
  }
  
  greet()
}

{
//   // Function with Expression
  
  let funcDis = function(){
    console.log(Math.PI);
  }
  
  funcDis()
}

{
  // Javascript Callback Function

  function greet(func){
    console.log("Hello World!!");
    func()
  }

  function sum(){
    console.log(10+20);
  }

  greet(sum)
}

{
//    // Timing Function

//   // Javascript SetTimeout()

  function greet(){
    console.log("Hello Javascript!!");
    
  }

  let setTimeoutId = setTimeout(greet , 3000)

  console.log(setTimeoutId);

  console.log("setTimeout Function");
  
}

{
  // every 5 seconds

  function timeShow(){

    let date = new Date()

    let time = date.toLocaleTimeString();

    console.log(time);
    
    setTimeout(timeShow , 1000)
  }

  timeShow()
}


{
  // javascript clearTimeout()

  let count = 0

  function increaseTime(){
    count+=1
    console.log(count)
  }

  let id = setTimeout(increaseTime , 2000)

  clearTimeout(id)

  console.log("stop timing function");
  
}

{
  // javascript setInterval() Function


  function greet(){
    console.log("Hello");
  }

  let id = setInterval(greet , 2000)

  console.log(id);
  
}
