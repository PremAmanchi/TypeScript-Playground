class Account {
    readonly id: number;
    owner: string;
    private _balance : number;
    nickname?: string;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }

    deposit(amount: number): void{
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


console.log(typeof account) // object
console.log(account instanceof Account) // true  