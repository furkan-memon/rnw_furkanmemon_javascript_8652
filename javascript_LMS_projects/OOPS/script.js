 // OOP Class
    class BankAccount {
      constructor(name) {
        this.name = name;
        this.balance = 0;
      }

      deposit(amount) {
        this.balance += amount;
      }

      withdraw(amount) {
        if (amount > this.balance) {
          alert("Insufficient balance");
        } else {
          this.balance -= amount;
        }
      }
    }

    let account;

    function createAccount() {
      const name = document.getElementById("name").value;
      if (!name) {
        alert("Enter name");
        return;
      }
      account = new BankAccount(name);
      updateUI();
    }

    function deposit() {
      if (!account) return alert("Create account first");
      const amount = Number(document.getElementById("amount").value);
      account.deposit(amount);
      updateUI();
    }

    function withdraw() {
      if (!account) return alert("Create account first");
      const amount = Number(document.getElementById("amount").value);
      account.withdraw(amount);
      updateUI();
    }

    function updateUI() {
      document.getElementById("output").innerText =
        `Name: ${account.name}\nBalance: ₹${account.balance}`;
    }