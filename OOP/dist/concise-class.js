"use strict";
class Account2 {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0)
            throw new Error('Invalid value for balance');
        this._balance = value;
    }
}
let account2 = new Account2(1, 'Prem Kumar Amanchi', 0);
console.log(account2.balance);
//# sourceMappingURL=concise-class.js.map