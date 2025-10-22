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
      abcd2.getAttribute("href")
    }
}