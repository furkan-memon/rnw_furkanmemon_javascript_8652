// settimeout and setinterval
{
  setTimeout(function() {
    console.log("Hello after 2 seconds");
  }, 2000);
  setInterval(function() {
    console.log("Hello after 2 seconds");
  }, 2000);
}
// cleartimeout and clearinterval
{
  let timeoutId = setTimeout(function() {
    console.log("This will not be logged");
  }
  , 3000);

  clearTimeout(timeoutId);
  let intervalId = setInterval(function() {
    console.log("This will not be logged either");
  }, 3000);

  clearInterval(intervalId);  
}
{
  let count = 0;
  let intervalId = document.querySelector(".progress")
  setInterval(function(){
    if(count>=100){
      clearInterval()
      return
    }
  count++
  intervalId.style.width = count + "%"
  document.querySelector(".percent").textContent = count + "%"
  },30)
}
