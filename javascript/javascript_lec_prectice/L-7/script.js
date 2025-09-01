{
    // 1. Simple IF Example
    let num = 10;

    if (num > 5) {
        console.log("IF: Number is greater than 5");
    }
}

{
    // 2. IF...ELSE Example
    let age = 17;

    if (age >= 18) {
        console.log("IF ELSE: You are eligible to vote");
    } else {
        console.log("IF ELSE: You are NOT eligible to vote");
    }
}

{
    // 3. ELSE IF Example
    let marks = 72;

    if (marks >= 90) {
        console.log("ELSE IF: Grade A");
    } else if (marks >= 75) {
        console.log("ELSE IF: Grade B");
    } else if (marks >= 50) {
        console.log("ELSE IF: Grade C");
    } else {
        console.log("ELSE IF: Fail");
    }
}

{
    // 4. SWITCH CASE Example
    let day = 3;

    switch (day) {
        case 1:
            console.log("SWITCH: Sunday");
            break;
        case 2:
            console.log("SWITCH: Monday");
            break;
        case 3:
            console.log("SWITCH: Tuesday");
            break;
        case 4:
            console.log("SWITCH: Wednesday");
            break;
        default:
            console.log("SWITCH: Invalid day");
    }
}
