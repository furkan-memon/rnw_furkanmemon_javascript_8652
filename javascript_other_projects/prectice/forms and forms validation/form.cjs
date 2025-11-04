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
      document.querySelector(".emailerror").textContent = ""

      document.querySelector(".passworderror").textContent = ""

    let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  let passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  let emailans = emailregex.test(email.value)
  let passwordans = passwordregex.test(password.value)
  let isvalid = true
  if(!emailans){
      document.querySelector(".emailerror").textContent = "Email is incorrect"
      document.querySelector("#email").style.border = "1px solid red"
      document.querySelector(".emailerror").style.display = "initial"
  isvalid = false
    
  }
  
 
  if(!passwordans){
      document.querySelector(".passworderror").textContent = "Password is incorrect"
      document.querySelector("#password").style.border = "1px solid red"
      document.querySelector(".passworderror").style.display = "initial"
  isvalid = false

  }
//   if(passwordans){
//       document.querySelector(".passworderror").textContent = "Password is correct"
//       document.querySelector(".passworderror").style.color = "green"

//       document.querySelector("#password").style.border = "1px solid green"
//       document.querySelector(".passworderror").style.display = "initial"
//   isvalid = false

//   }
//   if(emailans){
//       document.querySelector(".emailerror").textContent = "Email is correct"
//       document.querySelector(".emailerror").style.color = "green"

//       document.querySelector("#email").style.border = "1px solid green"
//       document.querySelector(".emailerror").style.display = "initial"
//   isvalid = false
    
//   }

  if(isvalid){
      let inp = document.querySelectorAll("input")  
        form.addEventListener("submit",function(val){
            inp.forEach(function (inp){
                        if ( inp.type != "submit"){
                            inp.value = ""
                        }
                    })
        })
     document.querySelector(".result").textContent = "Form Submitted Successfully"
  }
})
 

}

