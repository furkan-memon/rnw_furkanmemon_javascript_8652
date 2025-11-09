

let add = document.querySelector('#add-btn');
let formContainer = document.querySelector('.form-container');
let close = document.querySelector('#close');
const form = document.querySelector("form");
const imageUrlInput = document.querySelector("#imageUrl");
const fullNameInput = document.querySelector("#fullName");
const homeTownInput = document.querySelector("#homeTown");
const purposeInput = document.querySelector("#purpose");
const categoryRadios = document.querySelectorAll('input[name="category"]');
const submitBtn = document.querySelector(".create-note-btn");
const stack = document.querySelector(".card-stack-wrapper")
const up = document.querySelector(".upbtn")
const down = document.querySelector(".downbtn")

function savelocalStorage(obj) {
    if (localStorage.getItem("task") === null) {
        let oldTasks = []
        oldTasks.push(obj)
        localStorage.setItem("task", JSON.stringify(oldTasks))
    }
    else {
        let oldTasks = localStorage.getItem("task")
        oldTasks = JSON.parse(oldTasks)
        oldTasks.push(obj)
        localStorage.setItem("task", JSON.stringify(oldTasks))
    }
}
add.addEventListener('click', function () {
    formContainer.style.display = 'block';
    document.querySelector('.main-component-wrapper').style.display = 'none';
});
close.addEventListener('click', function () {
    formContainer.style.display = 'none';
    document.querySelector('.main-component-wrapper').style.display = 'flex';
});

form.addEventListener("submit", function (eve) {
    eve.preventDefault();
    let urlregex = /^(https?:\/\/)[^\s$.?#].[^\s]*$/i;
    let nameregex = /^[A-Za-z\s]{2,50}$/;
    let hometownregex = /^[A-Za-z\s\.\-]{2,}$/;
    let purposeregex = /^[A-Za-z0-9\s.,'"\-!?]{5,200}$/;
    let urlmatch = urlregex.test(imageUrlInput.value);
    let namematch = nameregex.test(fullNameInput.value);
    let hometownmatch = hometownregex.test(homeTownInput.value);
    let purposematch = hometownregex.test(purposeInput.value);

    let valid = true;
    if (imageUrlInput.value.trim().length == 0) {
        document.querySelector(".URL-error").textContent = "Please fill out this fild"
        document.querySelector("#imageUrl").style.border = "1px solid red"
        document.querySelector(".URL-error").style.color = "red"
    }
    else if (!urlmatch) {
        document.querySelector(".URL-error").textContent = "URL is incorrect"
        document.querySelector("#imageUrl").style.border = "1px solid red"
        document.querySelector(".URL-error").style.color = "red"
        valid = false;
    }
    else {
        document.querySelector(".URL-error").textContent = ""
        document.querySelector("#imageUrl").style.border = "1px solid #e0e0e0";
    }
    if (fullNameInput.value.trim() == "") {
        document.querySelector(".name-error").textContent = "Please fill out this fild"
        document.querySelector("#fullName").style.border = "1px solid red"


        document.querySelector(".name-error").style.color = "red"

    }
    else if (!namematch) {
        document.querySelector(".name-error").textContent = "Name is incorrect"
        document.querySelector("#fullName").style.border = "1px solid red"
        document.querySelector(".name-error").style.color = "red"
        valid = false;
    }
    else if (fullNameInput.value.length > 10 || fullNameInput.value.length < 3) {
        document.querySelector(".name-error").textContent = "Name length must be between 3 and 10 characters"
        document.querySelector("#fullName").style.border = "1px solid red"
        document.querySelector(".name-error").style.color = "red"
    }
    else {
        document.querySelector(".name-error").textContent = ""
        document.querySelector("#fullName").style.border = "1px solid #e0e0e0";
    }
    if (homeTownInput.value.trim().length == 0) {
        document.querySelector(".home-error").textContent = "Please fill out this fild"
        document.querySelector("#homeTown").style.border = "1px solid red"
        document.querySelector(".home-error").style.color = "red"
    }
    else if (!hometownmatch) {
        document.querySelector(".home-error").textContent = "Home Town is incorrect"
        document.querySelector("#homeTown").style.border = "1px solid red"
        document.querySelector(".home-error").style.color = "red"
        valid = false;
    }

    else {
        document.querySelector(".home-error").textContent = ""
        document.querySelector("#homeTown").style.border = "1px solid #e0e0e0";
    } if (purposeInput.value.trim().length == 0) {

        document.querySelector(".purpose-error").textContent = "Please fill out this fild"
        document.querySelector("#purpose").style.border = "1px solid red"
        document.querySelector(".purpose-error").style.color = "red"
    } else if (!purposematch) {
        document.querySelector(".purpose-error").textContent = "purposeis incorrect"
        document.querySelector("#purpose").style.border = "1px solid red"
        document.querySelector(".purpose-error").style.color = "red"
        valid = false;
    }
    else {
        document.querySelector(".purpose-error").textContent = ""
        document.querySelector("#purpose").style.border = "1px solid #e0e0e0";
    }

    let categorySelected = false;
    categoryRadios.forEach((redio) => {
        if (redio.checked) {
            categorySelected = redio.value;
        }
    });
    if (!categorySelected) {
        document.querySelector(".redio-error").textContent = "Please select a category"
        document.querySelector(".redio-error").style.color = "red"
        return;
    } else {
        document.querySelector(".redio-error").textContent = ""

    }
    savelocalStorage({
        imageUrl: imageUrlInput.value,
        fullName: fullNameInput.value,
        homeTown: homeTownInput.value,
        purpose: purposeInput.value,
        category: categorySelected
    })
    form.reset()
    formContainer.style.display = "none"
    document.querySelector('.main-component-wrapper').style.display = 'flex';

})
function addcards() {
    let alltask = JSON.parse(localStorage.getItem("task"))
    alltask.forEach(function(task,index){
        // Create the main card
       
        
  const card = document.createElement("div");
    card.classList.add("profile-card");
    card.id = `card-${index + 1}`;
  
// Profile image container
const imageContainer = document.createElement('div');
imageContainer.classList.add('profile-image-container');

// Profile image
const profileImage = document.createElement('div');
profileImage.classList.add('profile-image');
const img = document.createElement('img')
img.src = task.imageUrl;
profileImage.appendChild(img)
// Append image to container
imageContainer.appendChild(profileImage);

// Profile details container
const details = document.createElement('div');
details.classList.add('profile-details');

// User name
const userName = document.createElement('h2');
userName.classList.add('user-name');
userName.textContent = task.fullName;

// Info rows
const homeRow = document.createElement('div');
homeRow.classList.add('info-row');
homeRow.innerHTML = `
  <span class="info-label">Home town</span>
  <span class="info-value">${task.homeTown}</span>
`;

const bookingsRow = document.createElement('div');
bookingsRow.classList.add('info-row');
bookingsRow.innerHTML = `
  <span class="info-label">Purpose</span>
  <span class="info-value">${task.purpose}</span>
`;

// Action buttons container
const actionButtons = document.createElement('div');
actionButtons.classList.add('action-buttons');

// Call button
const callBtn = document.createElement('button');
callBtn.classList.add('action-btn', 'call-btn');
callBtn.innerHTML = `<i class="fas fa-phone-alt"></i> Call`;

// Message button
const messageBtn = document.createElement('button');
messageBtn.classList.add('action-btn', 'message-btn');
messageBtn.textContent = 'Message';

// Append buttons
actionButtons.appendChild(callBtn);
actionButtons.appendChild(messageBtn);

// Append all details
details.appendChild(userName);
details.appendChild(homeRow);
details.appendChild(bookingsRow);
details.appendChild(actionButtons);

// Build final card
card.appendChild(imageContainer);
card.appendChild(details);

// Append to page (e.g., body or container)
document.querySelector(".card-stack-wrapper").appendChild(card);


    })
}
function updetstack(){
    let cards = document.querySelectorAll(".profile-card")
    cards.forEach(function(cards,index){
        cards.style.zIndex = 3 - index
        cards.style.transform = `translateY(${index * 10}ps) scale(${1-index * 0.02})`
  cards.style.opacity = `${1 - index * 0.02}px`;
    })
}
addcards()
up.addEventListener("click",function(){
let lastchilde = stack.lastElementChild
if(lastchilde){
    stack.insertBefore(lastchilde,stack.firstElementChild)
    updetstack()
}
})
down.addEventListener("click",function(){
    let firstchilde = stack.firstElementChild
if(firstchilde){
    stack.insertBefore(firstchilde,stack.lastElementChild)
    updetstack()
}
})
    
