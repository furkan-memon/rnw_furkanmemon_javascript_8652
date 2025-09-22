
function getArray() {
    var input = document.getElementById("arrayInput").value;
    if (input.trim() === "") {
        document.getElementById("result").innerText = "⚠️ Please enter numbers!";
        return null;
    }

    var arr = input.split(",").map(function(num) {
        return parseFloat(num.trim());
    });

 
    for (var i = 0; i < arr.length; i++) {
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
    var arr = getArray();
    if (arr === null) return;

    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    displayResult("✅ Sum = " + sum);
}

function findAverage() {
    var arr = getArray();
    if (arr === null) return;

    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    var avg = sum / arr.length;
    displayResult("📊 Average = " + avg);
}


function findMax() {
    var arr = getArray();
    if (arr === null) return;

    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    displayResult("🔼 Max = " + max);
}


function findMin() {
    var arr = getArray();
    if (arr === null) return;

    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    displayResult("🔽 Min = " + min);
}
