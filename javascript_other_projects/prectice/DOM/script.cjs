//  selecting element in dom
 {
    let abcd = document.getElementById("hi")
    let abcd1 = document.getElementsByClassName("hi")
   let abcd2 = document.querySelector("h1")
   let abcd3 = document.querySelectorAll("h1")
    console.log(abcd);
    console.log(abcd1);
    console.log(abcd2);
    console.log(abcd3);
    
 }
//  text content access and change
{
// text content access
    {
      let abcd2 = document.querySelector("h1")
      abcd2.textContent = "hii,amaan here"
    
    }
// innerHTML access
{
    let abcd2 = document.querySelector("h1")
    abcd2.innerHTML = "<strong>hii,amaan here</strong>"
    abcd2.hidden = true
}
// innerText access
{
    let abcd2 = document.querySelector("h1")
    abcd2.innerText = "hi,amaan here"
}
}
// Attribute access and change
{
    // setAttribute and getAttribute
    {

        let abcd2 = document.querySelector("a")
        abcd2.href = "https://www.google.com"
        abcd2.target = "_blank"
    }
    {
        let abcd2 = document.querySelector(".link1")
     console.log(abcd2.getAttribute("href"));
     
    }
    {
        let abcd2 = document.querySelector(".link1")
        console.log(abcd2.removeAttribute("href"));
    }
        
}
// DOM manipulation
{
    // createElement and appendChild
    {
       let el = document.createElement("p")
        el.textContent = "Kids who never seen peace and kids who never seen war have different values."
       document.body.prepend(el)
       document.querySelector("#kids").prepend(el)
    //    appendChild means add at last
    //   prepend means add at first
    }
    // remove
    {

        let parent = document.querySelector("#kids")
        
        let child = document.querySelector("#child")
        // parent.removeChild(child)
    // alternative of removeChild   
    //    parent.remove()
    }
    // style
    {
let name = document.querySelector("#child")
name.style.color = "#FFF2EF"
name.style.backgroundColor = "#1A2A4F"
name.style.margin = "10px"
name.style.padding = "10px"
name.style.borderRadius = "100%"
name.style.display = "flex"
name.style.alignItems = "center"
name.style.fontSize = "15px"
name.style.height = "100px"
name.style.width = "100px"



}
// CLASSLIST
{
    let luffy = document.querySelector(".luffy")
    luffy.classList.add("lu")
    luffy.classList.remove("luffy")
    luffy.classList.toggle, ("luffy")
     
}
}

{
  {
    let heading = document.getElementById("heading")
        heading.textContent = "Monky D luffy welcom to my ship"
    
  }
  {
    let lii = document.querySelectorAll("li")
   lii.forEach(function(val) {
    console.log(val.textConten
        
    );

   });
   for(let i = 0 ; i<lii.length;i++)
   {
    console.log(lii[i].textContent);
    
   }
  }

}
{
    let pe = document.querySelector(".pe")
    pe.innerHTML = "<b> Anime is a style of Japanese animation that is characterized by its distinct art style, which often includes expressive eyes and detailed lines,</b>"
}
{
    let src =  document.querySelector("img")
    src.src = "https://images.unsplash.com/photo-1761159021632-3cfad47be594?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
}
{
    let hj = document.querySelector(".link1")
        hj.href = "https://unsplash.com/photos/misty-mountains-with-pine-trees-and-dry-grass-0xJXFa7lIyo"
        hj.target = " _blank"    
}
{
    let div = document.querySelector("#kids")
    div.setAttribute("title" , "hi watchars")
}
{
 let l  = document.querySelector("ul")
  let i = document.createElement("li")
    i.textContent = "graps"
    l.appendChild(i)
    
}
{
    let ul = document.querySelector("ul")
    let li = document.querySelector("li")
    li.remove()
}
{
    let ul = document.querySelectorAll("ul li:nth-child(2n)")
    ul.forEach(function (val){
        val.classList.add("highlight")
    })
    
}