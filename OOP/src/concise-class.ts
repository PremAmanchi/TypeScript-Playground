class Account2 {
    nickname?: string;
    constructor(
        public readonly id: number,
        public owner: string,
        private _balance: number,
    ) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }

    deposit(amount: number): void{
        this._balance += amount;
    }

    get balance(): number{
        return this._balance;
    }

    set balance(value: number) {
        if (value < 0)
            throw new Error('Invalid value for balance');
        this._balance = value;
    }
}


let account2 = new Account2(1, 'Prem Kumar Amanchi', 0);
console.log(account2.balance);