"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Invalid amount');
        }
        this._balance += amount;
    }
}
let account = new Account(1, 'Prem Kumar Amanchi', 0);
account.deposit(100);
// console.log(`ACCOUNT BALANCE : ${account.balance}`);
// account.deposit(-100);
// console.log(account.balance); 
// cannot perform below => readonly
// account.id = 2;
console.log(typeof account); // object
console.log(account instanceof Account); // true  
//# sourceMappingURL=index.js.map