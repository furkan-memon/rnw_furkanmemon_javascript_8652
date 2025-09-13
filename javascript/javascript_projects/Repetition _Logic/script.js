
    let jokes = [
        "Teacher: Tum late kyu aaye? Student: Sir sapne me school gaya tha, usme bhi late ho gaya. 😂",
      "Pappu: Bhai tu itna gussa kyu hai? Gappu: WiFi slow hai, life bhi slow lag rahi hai! 😭",
      "GF: Tum mujhe ignore kar rahe ho! BF: Arre main to recharge kar raha tha... 😅",
      "Doctor: Aapko exercise karni hogi. Patient: Kya WhatsApp pe walking group join kar lu? 🤣",
      "Beta: Papa 500 do. Papa: Kyu? Beta: Game me offer aaya hai! Papa: Ye lo 50, dusre level tak to padhai karo. 😂",
      "Bhai: Tune result mummy ko dikhaya? Chhota Bhai: Nahi, Wi-Fi off kar diya… mummy busy hai TV dekhne me. 🤣",
      "Papa: Ye phone se chipka kyu rehta hai?",
      "Beta: Papa phone chipakta hai, main to bas scroll karta hu. 😆"
    ];

    function Joke() {
      let randomIndex = Math.floor(Math.random() * jokes.length);
      document.getElementById("joke").innerText = jokes[randomIndex];
    }

    
    function rollDice() {
      let diceValues = [];
      for (let i = 0; i < 2; i++) {
        diceValues[i] = Math.floor(Math.random() * 6) + 1;
      }

      document.getElementById("dice1").innerText = "🎲 " + diceValues[0];
      document.getElementById("dice2").innerText = "🎲 " + diceValues[1];

      if (diceValues[0] > diceValues[1]) {
        document.getElementById("diceResult").innerText = "Player 1 Wins! 🏆";
      } else if (diceValues[0] < diceValues[1]) {
        document.getElementById("diceResult").innerText = "Player 2 Wins! 🏆";
      } else {
        document.getElementById("diceResult").innerText = "It's a Tie! 🎯";
      }
    }