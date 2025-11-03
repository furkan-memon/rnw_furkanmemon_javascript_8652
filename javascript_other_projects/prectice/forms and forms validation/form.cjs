// let nm = document.querySelector(".name")
// let form = document.querySelector("form")
// form.addEventListener("submit" , function(val){
//     val.preventDefault()
// let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
// console.log(

//     regex.test("aman@test.com")
// );
// })
{
    let email = document.querySelector("#email")
    let password = document.querySelector("#password")
    let form = document.querySelector("form")

    form.addEventListener("submit",function(val){
        val.preventDefault()
    let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  let passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  let emailans = emailregex.test(email.value)
  let passwordans = passwordregex.test(password.value)
  if(!emailans){
     
      document.querySelector(".emailerror").textContent = "Email is incorreect"
  
  }
  if(!passwordans){
      document.querySelector(".passworderror").textContent = "Passworde is incorreect"

  }
    })
}