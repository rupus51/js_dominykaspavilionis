/* ------------------------------ TASK 10 ----------------------------------------------------------------
Sukurkite klasę "BankAccount" ir jos išvestines klases "SavingsAccount" ir "CheckingAccount" (naudokite ES6).

Klasė "BankAccount":
Savybės: accountNumber, ownerName, balance
Metodai: deposit(amount), withdraw(amount), getBalance()

Klasė "SavingsAccount" (išplėčia "BankAccount"):
Papildoma savybė: interestRate
Metodai: addInterest() - prideda palūkanas prie balanso pagal interestRate

Klasė "CheckingAccount" (išplėčia "BankAccount"):
Papildoma savybė: overdraftLimit
Metodai: withdraw(amount) - leidžia neigiamą balansą iki nurodyto overdraftLimit

------------------------------------------------------------------------------------ */
class BankAccount {
  constructor(accountNumber, ownerName, balance = 0) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.balance}`);
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    } else {
      console.log("Insufficient funds.");
    }
  }

  getBalance() {
    return this.balance;
  }
}

// SAV
class SavingsAccount extends BankAccount {
  constructor(accountNumber, ownerName, balance = 0, interestRate = 0) {
    super(accountNumber, ownerName, balance);
    this.interestRate = interestRate;
  }

  addInterest() {
    const interestEarned = this.balance * this.interestRate;
    this.balance += interestEarned;
    console.log(`Interest added. New balance: $${this.balance.toFixed(2)}`);
  }
}

// CHECK
class CheckingAccount extends BankAccount {
  constructor(accountNumber, ownerName, balance = 0, overdraftLimit = 100) {
    super(accountNumber, ownerName, balance);
    this.overdraftLimit = overdraftLimit;
  }

  withdraw(amount) {
    if (amount <= this.balance + this.overdraftLimit) {
      this.balance -= amount;
      console.log(
        `Withdrew $${amount}. New balance: $${this.balance.toFixed(2)}`
      );
    } else {
      console.log("Transaction denied. Overdraft limit exceeded.");
    }
  }
}

// Test
const savings = new SavingsAccount("12345", "John Doe", 1000, 0.05);
const checking = new CheckingAccount("67890", "Jane Doe", 500, 200);

savings.addInterest();
console.log(savings.getBalance()); // Rezultatas: 1050

checking.withdraw(600);
console.log(checking.getBalance()); // Rezultatas: -100
