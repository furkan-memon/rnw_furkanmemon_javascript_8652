{
    let username = prompt("Enter your username :")
    console.log("Username is: @" + username);
}
{
    for (let i =0 ;i<=100 ; i++){
        if(i%2==0){
            console.log(i);
        }
    }
}
{
    let num = 20;
    let userNum = prompt("Enter a number: ");
    while (userNum != num) {
    userNum = prompt("Increment  number ");
    }
    console.log("Correct!");
}