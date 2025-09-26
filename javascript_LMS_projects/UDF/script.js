function Addition(){
let b = parseInt(document.getElementById("num1").value)
let a = parseInt(document.getElementById("num2").value)
document.getElementById("addResult").innerText = "Result: " + (a + b);
}

  function EvenOdd() {
      let num = parseInt(document.getElementById("numEO").value);
      let result = "";
      if (num % 2 === 0) {
        result = num + " is Even";
      } else {
        result = num + " is Odd";
      }
      document.getElementById("evenoddResult").innerText = result;
    }
      function Square() {
      let num =  parseInt(document.getElementById("numSquare").value);
      document.getElementById("squareR").innerText = "Square: " + (n * n);
    }
        function capitalizeStr() {
      let str = document.getElementById("strCap").value;
      if (!str) return;
      let cap = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
      document.getElementById("capitalizeResult").innerText = "Result: " + cap;
    }