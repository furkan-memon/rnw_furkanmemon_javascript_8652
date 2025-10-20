{
    let obj = {
    name : "amaan",
    age : 19,
}
console.log(obj.name);
console.log(obj['age']);
}
{
    let user = {
 name: "Amit",
 address: {
 city: "Delhi",
 pincode: 110001
 }
};
console.log(user.address.city); // Delhi
}
// Object Destructuring
{
   let user = {
 name: "Amit",
 address: {
 city: "Delhi",
 pincode: 110001
 }
};
let {pincode, city} = user.address
console.log(pincode);

}
// Looping Through Objects
{
    let user = {
        name: "Amit",
        address: {
            city: "Delhi",
            pincode: 110001
        }
    };
console.log(Object.keys(user));

 console.log(Object.entries(user));
 
    for (let key in user) {
        console.log(key, user[key]);
    }

}
// Copying Objects
{
    let user = {
        name: "Amit",
        address: {
            city: "Delhi",
            pincode: 110001
        }
    };
    let userCopy = {...user};
    let newOne = Object.assign({}, user);
    let deepCopy = JSON.parse(JSON.stringify(user)); // Deep copy
    console.log(userCopy);
    console.log(newOne);
    console.log(deepCopy);
}
{
    let student = {
        name: "John",
        age :19,
        isEnrolled: true
    };
    console.log(student);
}
{
    let key = "age"
    let student = {
        name: "John",
        age: 19,
        isEnrolled: true
    };
    console.log(student[age]);
}