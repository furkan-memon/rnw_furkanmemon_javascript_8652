window.addEventListener("keydown", function(val){
     let h1 = this.document.querySelector("h1")
     if(val.key == " "){
     h1.textContent = "Spacebar" // Changed from "space" to "Spacebar" for clarity

     }
     else{

         h1.textContent = val.key
     }
});