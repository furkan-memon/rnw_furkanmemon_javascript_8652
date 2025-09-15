let name = prompt("Enter your name :")
let age = prompt("Enter your age :")
let number = prompt("Enter your mobile number for ticket confirmation:")
let day = prompt("Enter (1-7) 1 for monday 2 for tuesday 3 for wednesday 4 for thursday 5 for friday 6 for saturday 7 for sunday :")

if(age<18){
    console.log("Sorry " + name + " you are not allowed to watch this content.");
}
else{
    switch(day){
        case '1':
            console.log("Hello " + name + " todays show is Jolly LLB with discount of 10% ");
        console.log("and show timings are 9AM, 12PM, 3PM, 6PM, 9PM");
        break;
        case '2':
            console.log("Hello " + name + " todays show is The Shawshank Redemption with discount of 15% ");
            console.log("and show timings are 9AM, 12PM, 3PM, 6PM, 9PM");
            break;
        case '3':
            console.log("Hello " + name + " todays show is The Godfather with discount of 17% ");
            console.log("and show timings are 9AM, 12PM, 3PM, 6PM, 9PM");
            break;
        case '4':
            console.log("Hello " + name + " todays show is The Dark Knight with discount of 20% ");
            console.log("and show timings are 9AM, 12PM, 3PM, 6PM, 9PM");
            break;
        case '5':
            console.log("Hello " + name + " todays show is Pulp Fiction with discount of 25% ");
            console.log("and show timings are 9AM, 12PM, 3PM, 6PM, 9PM");
            break;
        case '6':
            console.log("Hello " + name + " todays show is Schindler's List with weekend special discount of 50% ");
            console.log("and show timings are 9AM, 12PM, 3PM, 6PM, 9PM");
            break;
        case '7':
            console.log("Hello " + name + " todays show is The Lord of the Rings: The Return of the King weekend special discount of 50%  ");
            console.log("and show timings are 9AM, 12PM, 3PM, 6PM, 9PM");
            break;
        default:
            console.log("Invalid day");
}
}
console.log("Your ticket is confirmed " + name + " with mobile number " + number);
console.log("we will send you the show details on your number " + number + " in 10 minutes.");



