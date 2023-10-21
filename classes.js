class BankAccount {
    #customerName;
    #balance;
    constructor(customerName, balance = 0){
        this.#customerName = customerName;
        this.#balance = balance;
        this.accountNumber = Date.now();
    }

    deposit(amount){
        this.#balance += amount;
    }

    withdraw(amount){
     this.#balance -= amount;
    }

    showBalance(){
        console.log(this.#balance)
    }
}

const myAccount = new BankAccount("John Doe");
myAccount.deposit(4000000);
myAccount.withdraw(3000);
console.log(myAccount);
myAccount.showBalance()