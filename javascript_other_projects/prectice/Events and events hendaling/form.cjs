   
        let form = document.querySelector("form")
        let inp = document.querySelectorAll("input")
        let main = document.querySelector(".form")
            form.addEventListener("submit",function(val){
                val.preventDefault()
               let card = document.createElement("div")
               card.classList.add("card")
               let profile = document.createElement("div")
               profile.classList.add("profile")
          
               let img = document.createElement("img")
               
               
               img.setAttribute("src",inp[3].value )
               profile.appendChild(img)
               let h1 =document.createElement("h1")
               h1.textContent =  inp[0].value
               let h5 =document.createElement("h5")
               h5.textContent = inp[1].value
               let p =document.createElement("p")
               p.textContent = inp[2].value
               profile.appendChild(img)
               card.appendChild(profile)
               card.appendChild(h1)
               card.appendChild(h5)
               card.appendChild(p)
                main.appendChild(card)
                inp.forEach(function (inp){
                    if ( inp.type != "submit"){
                        inp.value = ""
                    }
                })
            })