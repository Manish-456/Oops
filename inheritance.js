class BankAccount {
  constructor(customerName, balance = 0){
  this.customerName = customerName;
  this.balance = balance;
  this.accountNumber = Date.now();
  }   

  deposit(amount){
    this.balance += amount;
  }

  withdraw(amount){
    this.balance -= amount;
  }
}

class CurrentAccount extends BankAccount{
    constructor(customerName, balance = 0){
        super(customerName, balance);
        this.transactionLimit = 50000;
    }

    takeBusinessLoan(loanAmount){
        console.log(`Business loan granted for ${loanAmount}`);
    }
}

class SavingAccount extends BankAccount{
    constructor(customerName, balance = 0){
        super(customerName, balance);
        this.transactionLimit = 10;
    }

    personalLoan(loanAmount){
        console.log(`Personal loan granted for ${loanAmount}`);
    }
}

// function BankAccount(customerName, balance = 0) {
//   this.customerName = customerName;
//   this.balance = balance;
//   this.accountNumber = Date.now();
// }

// BankAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
// };

// BankAccount.prototype.withdraw = function(amount){

//   this.balance -= amount;
// };

// function CurrentAccount(customerName, balance = 0) {
//   BankAccount.call(this, customerName, balance);
//   this.transactionLimit = 50000;
// }

// CurrentAccount.prototype = Object.create(BankAccount.prototype)

// CurrentAccount.prototype.takeBusinessLoan = function (loanAmount){
//   console.log(`Business loan granted for ${loanAmount}`);
// };


// function SavingAccount(customerName, balance = 0) {
//   BankAccount.call(this, customerName, balance);
//   this.transactionLimit = 10;
// }
// SavingAccount.prototype = Object.create(BankAccount.prototype)

// SavingAccount.prototype.takePersonalLoan = function (loanAmount){
//   console.log(`Personal loan granted for ${loanAmount}`);
// };



const bankAccount = new SavingAccount("Manish", 200);
bankAccount.deposit(9800);
bankAccount.withdraw(400)

console.log(bankAccount)