
function getArray() {
    let input = document.getElementById("arrayInput").value;
    if (input.trim() === "") {
        document.getElementById("result").innerText = "⚠️ Please enter numbers!";
        return null;
    }

    let arr = input.split(",").map(function(num) {
        return parseFloat(num.trim());
    });

 
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            document.getElementById("result").innerText = "❌ Invalid input!";
            return null;
        }
    }

    return arr;
}


function displayResult(message) {
    document.getElementById("result").innerText = message;
}


function findSum() {
    let arr = getArray();
    if (arr === null) return;

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    displayResult("✅ Sum = " + sum);
}

function findAverage() {
    let arr = getArray();
    if (arr === null) return;

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let avg = sum / arr.length;
    displayResult("📊 Average = " + avg);
}


function findMax() {
    let arr = getArray();
    if (arr === null) return;

    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    displayResult("🔼 Max = " + max);
}


function findMin() {
    let arr = getArray();
    if (arr === null) return;

    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    displayResult("🔽 Min = " + min);
}
