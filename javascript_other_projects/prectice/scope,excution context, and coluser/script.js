// // this keywaord              
//   console.log(this);
//   function abcd() {
//     console.log(this);

//   }
//   abcd()
//   let abg = {
//     name : "amaan",
//   sayname : function() {
//     console.log(this.name);

//   }
//   }
//   abg.sayname()  

// //   even hedler
// // class
// class Abcd {
//     constructor (){
//         console.log("Anime");

//     }
// }
// new Abcd()
// // Call apply bind
//   let abg1 = {
//     name : "amaan",
//    age :23

//   }
//   function efgh (){
//     console.log(this);

//   }
//   efgh.call(abg1)

//   let abg2 = {
//     name : "amaan",
//    age :23

//   }
//   function ijkl (a,b,c){
//     console.log(this , a,b,c);

//   }
//   ijkl.apply(abg2 , [20,23,42])
//   function mnop(a,b,c){
//     console.log(this , a,b,c);

//   }
//   let fnc = mnop.bind(abg2 , 20,23,42)
// fnc()
let form = document.querySelector("form")
let uname = document.querySelector("#name")
let role = document.querySelector("#role")
let bio = document.querySelector("#bio")
let img = document.querySelector("#photo")


const userManager = {
  user: [],
  init: function () {
    form.addEventListener("submit", this.submitform.bind(this))
  },
  submitform: function (e) {
    e.preventDefault()
    this.adduser()
  },
  adduser: function () {
    this.user.push({
      uname: uname.value,
      role: role.value,
      bio: bio.value,
      img: img.value
    });
    form.reset()
    this.renderui();
  },
  renderui: function () {
    document.querySelector(".users").innerHTML = "";

    this.user.forEach( (user , index) => {
      const card = document.createElement("div");
      card.className =
        "bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blue-100 hover:scale-105 transition";

      card.addEventListener("click", () => {
        this.user.splice(index,1); 
        this.renderui();
      });

      // Image
      const img = document.createElement("img");
      img.className =
        "w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-200 shadow";
      img.src = user.img;
      img.alt = "User Photo";
      card.appendChild(img);

      // Name
      const name = document.createElement("h2");
      name.className = "text-2xl font-bold mb-1 text-blue-700";
      name.textContent = user.uname;
      card.appendChild(name);

      // Role
      const role = document.createElement("p");
      role.className = "text-purple-500 mb-2 font-medium";
      role.textContent = user.role;
      card.appendChild(role);

      // Description
      const desc = document.createElement("p");
      desc.className = "text-gray-700 text-center";
      desc.textContent = user.bio;
      card.appendChild(desc);
      document.querySelector(".users").appendChild(card);
    })
  }


}
userManager.init()