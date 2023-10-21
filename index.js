const account_form = document.getElementById("account_form");
const customer_name = document.getElementById("customer_name");
const balance = document.getElementById("balance");

const deposit_form = document.getElementById("deposit_form");
const account_number = document.getElementById("account_number");
const amount = document.getElementById("amount");

const accountLists = [];

//? Abstraction
// Abstraction is a way of creating a simple model of a more complex real-world entities, which contains the only important properties from the perspective of the context of an application. Abstraction manages complexity of a system by hiding internal details and composing it in several smaller systems.

function BankAccount(customerName, balance = 0){
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;                     

}

BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
  }

BankAccount.prototype.withdraw = function(amount){
    this.balance -= amount;
  }


  account_form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newAccount = new BankAccount(customer_name.value, Number(balance.value))    
    accountLists.push(newAccount);
  })


  deposit_form.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = accountLists.find(account => account.accountNumber === Number(account_number.value))
    account.deposit(Number(amount.value));
  })