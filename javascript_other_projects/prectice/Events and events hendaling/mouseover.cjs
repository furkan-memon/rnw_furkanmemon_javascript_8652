let elem  = document.querySelector(".elem")
elem.addEventListener("mouseover",function(){
    elem.style.backgroundColor = "darkblue"
})
elem.addEventListener("mouseout`",function(){
    elem.style.backgroundColor = "red"
})

window.addEventListener("mousemove",function(val){
    console.log(val);
    let x = val.clientX
    let y = val.clientY

    
    
elem.style.top = val.clientY+"px"
elem.style.left = val.clientX+"px"

})
window.addEventListener("keydown",function(val){
    document.querySelector("body").textContent = "aman memon"
})
