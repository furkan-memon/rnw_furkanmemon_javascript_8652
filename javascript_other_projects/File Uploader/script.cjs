        let btn = document.querySelector(".btn")
        let inp = document.querySelector(".inp")
        
        
        const btnText = document.getElementById("btn-text");
        const btnIcon = document.getElementById("btn-icon");

        btn.addEventListener("click",function (){
            inp.click()
        })

        inp.addEventListener("change",function(val){
            let file = val.target?.files[0]
            
            if(file){
               
                btnText.textContent = file.name
                btnIcon.textContent = "✅" 
                btn.classList.add("file-selected")
            } else {
               
                btnText.textContent = "Select File to Upload"
                btnIcon.textContent = "📁" 
                btn.classList.remove("file-selected")
            }

        })
        

