
   class BankAccount {
    constructor(name, balance) {
        this.holder = name;
        this.balance = balance;
    }

    deposit(amt) {
        if (amt > 0) {
            this.balance += amt;
            return `Success: $${amt} added.`;
        }
        return "Enter a valid amount.";
    }

    withdraw(amt) {
        if (amt > 0 && amt <= this.balance) {
            this.balance -= amt;
            return `Success: $${amt} withdrawn.`;
        }
        return "Insufficient funds or invalid amount.";
    }
}


let userAcc = null;

function createNewAccount() {
    const name = document.getElementById('newName').value;
    const deposit = parseFloat(document.getElementById('initialDeposit').value);

    if (name && deposit >= 0) {
 
        userAcc = new BankAccount(name, deposit);


        document.getElementById('setupSection').classList.add('hidden');
        document.getElementById('bankSection').classList.remove('hidden');
        
        document.getElementById('welcomeText').innerText = `Hello, ${userAcc.holder}!`;
        updateView();
    } else {
        alert("Please provide a name and initial deposit.");
    }
}

function updateView() {
    document.getElementById('balDisplay').innerText = userAcc.balance.toLocaleString();
}

function doDeposit() {
    const amt = parseFloat(document.getElementById('transactAmount').value);
    const msg = userAcc.deposit(amt); 
    document.getElementById('transactAmount').value=""
    document.getElementById('statusMsg').innerText = msg;
    updateView();
}

function doWithdraw() {
    const amt = parseFloat(document.getElementById('transactAmount').value);
    const msg = userAcc.withdraw(amt); 
    document.getElementById('transactAmount').value=""
    document.getElementById('statusMsg').innerText = msg;
    updateView();
}