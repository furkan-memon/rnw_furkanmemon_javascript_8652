
    let totalSeconds = 3600;
    let timer;
    let running = false;

    function updateDisplay() {
      let hours = Math.floor(totalSeconds / 3600);
      let minutes = Math.floor((totalSeconds % 3600) / 60);
      let seconds = totalSeconds % 60;

      document.getElementById("hours").textContent = String(hours).padStart(2, "0");
      document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
      document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
    }

    function startTimer() {
      if (!running) {
        running = true;
        timer = setInterval(() => {
          if (totalSeconds > 0) {
            totalSeconds--;
            updateDisplay();
          } else {
            clearInterval(timer);
            running = false;
            alert("Time's up!");
            showQuote(); 
          }
        }, 1000);
      }
    }

    function stopTimer() {
      clearInterval(timer);
      running = false;
    }

    function resetTimer() {
      clearInterval(timer);
      totalSeconds = 3600;
      running = false;
      updateDisplay();
    }

    updateDisplay();

 
    let quotes = [
      { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
      { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
      { text: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown" },
      { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
      { text: "Dream it. Wish it. Do it.", author: "Unknown" },
      { text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
    ];

    function showQuote() {
      let random = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById("quote").textContent = `"${random.text}"`;
      document.getElementById("author").textContent = `– ${random.author}`;
    }

    setInterval(showQuote, 30000);
