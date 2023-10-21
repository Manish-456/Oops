class BankAccount {
  customerName;
  accountNumber;
  #balance = 0;
  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    this.#balance -= amount;
  }

  setBalance(amount) {
    if (isNaN(amount)) throw new Error("Amount is not a valid input.");
    this.#balance = amount;
  }

  showBalance() {
    console.log(this.#balance);
  }
}

class CurrentAccount extends BankAccount {
  #transactionLimit;
  constructor(customerName, balance) {
    super(customerName, balance);
    this.#transactionLimit = 10000;
  }

  takeBusinessLoan(amount) {
    console.log(`Business Loan of ${amount} granted ✅`);
  }

  showTransactionLimit() {
    return this.#transactionLimit;
  }

  withdrawAmount(amount) {
    if (amount > this.#transactionLimit) {
      console.log(
        `Transaction limit exceed. Amount should be less than ${this.showTransactionLimit()}`
      );
    } else {
      this.withdraw(amount);
    }
  }
}

const myAccount = new CurrentAccount("Manish Tamang", 9000);
console.log(myAccount);

// myAccount.takeBusinessLoan(4000)
myAccount.withdrawAmount(9000);

myAccount.showBalance();
