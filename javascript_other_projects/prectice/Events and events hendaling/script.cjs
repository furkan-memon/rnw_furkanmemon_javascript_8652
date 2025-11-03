{
    let dof =  document.querySelector("#child")
dof.addEventListener("click",function(){
    dof.style.color = "green"
    dof.style.fontSize = "40px"

})
// dof.addEventListener("dblclick",function(){
//     dof.style.color = "red"
//     dof.style.fontSize = "100px"

// })
}
{
    let dof =  document.querySelector("#child")
function dblclick(){
    dof.style.color = "red"
    dof.style.fontSize = "100px"

}
  dof.addEventListener("dblclick",dblclick)  
dof.removeEventListener("dblclick",dblclick)
}
{
let input= document.querySelector("input")
input.addEventListener("input",function(data){
    console.log(data.data);
    
})
}
{
  let sel =  document.querySelector("select")
  sel.addEventListener("change",function(dets){
    let h1 = document.querySelector("h2")
    h1.textContent = `${dets.target.value}   divce selected`
    console.log(dets.target.value);
    
  })
}
{
    window.addEventListener("keydown",function(val){
     let h1 = this.document.querySelector("h1")
     if(val.key == " "){
     h1.textContent = "space"

     }
     else{

        h1.textContent = val.key
     }
 
    
    })
}
{
    let btn = document.querySelector(".btn")
    let inp = document.querySelector(".inp")

  btn.addEventListener("click",function (){
    inp.click()
  })
  inp.addEventListener("change",function(val){
      let file = val.target?.files[0]
      if(file){

          btn.textContent = file.name
      }
    
  })
}

// event bubling
{
document.querySelector(".second ").addEventListener("click", function () {
  alert("clickd")
})
}
{
  let count = document.querySelector(".count")
  // let c = 0;
  count.addEventListener("input", function(val){
      //  c++
  let le = 20 - count.value.length
  if (le < 0){

    document.querySelector(".text").textContent = le
    document.querySelector(".text").style.color = "red"
  }
  else{
    document.querySelector(".text").textContent = le
    document.querySelector(".text").style.color = "black"

  }
  })
 
}
{
  let l = document.querySelector("ul");
  l.addEventListener("click",function(val){
val.target.classList.toggle("lt")
 
  })
}