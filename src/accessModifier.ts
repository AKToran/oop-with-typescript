
class BankAccount {
  public readonly userId: number;
  public userName: string;
  // private _userBalance: number;
  protected _userBalance: number; //accessible in derived classes

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

  addBalance(balance: number) {
    this._userBalance = this._userBalance + balance;
  }
}

class StudentBankAccount extends BankAccount {
  test() {
    this._userBalance;
  }
}

const myAccount = new BankAccount(111, "Abid", 300);

myAccount.addBalance(100);
myAccount.addBalance(50);

console.log(myAccount);