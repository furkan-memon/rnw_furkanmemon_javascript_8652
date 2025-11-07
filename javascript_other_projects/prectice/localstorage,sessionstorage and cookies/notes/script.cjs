const users = [
{
name: "amisha rathore",
pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
bio: "silent chaos in a loud world not for everyone"},
{
name: "amna mehta",
pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
bio: "main character energy coffee > everything",
},
{
name: "isha oberoi",
pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
bio: "walking through dreams in doc martens | late night thinker",
},
{
name: "aman Oklawa",
pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
bio: "too glam to give a damn | filter free soul",

},

{
name: "diya bansal",
pic: "https://i.pinimg.com/736x/74/b0/67/74b067e6c5ece09d99f68c42c5f6754e.jpg",
bio: "a little chaos, a lot of art+ | just vibes",
},
{
  name: "tanay rawat",
pic: "https://i.pinimg.com/736x/9b/78/b9/9b78b95425278ee37e88869b8c5fb2c6.jpg",
bio: "don't text, just vibe soft heart, sharp mind",
},
{
  name: "mohit chhabra",
  pic: "https://i.pinimg.com/736x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
  bio: "aesthetic overload| living in lowercase",
}
];
function displayUsers(arr){
  arr.forEach(function(user){
    
const card = document.createElement('div');
card.classList.add('card');

const img = document.createElement('img');
img.src = user.pic;
img.classList.add('bg-img');

const blurredLayer = document.createElement('div');
blurredLayer.style.backgroundImage = user.pic;
blurredLayer.classList.add('blurred-layer');


const content = document.createElement('div');
content.classList.add('content');


const h3 = document.createElement('h3');
h3.textContent = user.name;

const p = document.createElement('p');
p.textContent = user.bio;


content.appendChild(h3);
content.appendChild(p);

card.appendChild(img);
card.appendChild(blurredLayer);
card.appendChild(content);


document.querySelector('.cards').appendChild(card);
  });
}

displayUsers(users);
let searchInput = document.querySelector('.inp');
searchInput.addEventListener('input',function(){
  let filteredUsers = users.filter((user) => {
    return user.name.startsWith(searchInput.value.toLowerCase()) || user.name.startsWith(searchInput.value.toUpperCase());
  });
  document.querySelector('.cards').innerHTML = "";
  
  displayUsers(filteredUsers);
  console.log(filteredUsers);
  if(filteredUsers.length === 0){
    document.querySelector('h2').innerHTML = "<h2>No users found</h2>";
  }
searchInput.addEventListener('input', function(){
  if(searchInput.value === ""){
    document.querySelector('h2').textContent = "All users";
  }

});
});
