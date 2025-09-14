let name = prompt("Enter your name :");

let isSure = confirm("Are you sure you want to continue?");

if (isSure) {
    alert("Hello " + name + "! You confirmed to continue.");
} else {
    alert("Hello " + name + "! You cancelled the action.");
}

