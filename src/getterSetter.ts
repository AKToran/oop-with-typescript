
class BankAccount {
  public readonly userId: number;
  public userName: string;
  private _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

  // addBalance(balance: number) {
  //   this._userBalance = this._userBalance + balance;
  // }

  //setter
  set addBalance(amount: number){
    this._userBalance = this._userBalance+amount;
  }

  // getBalance(){
  //   return this._userBalance;
  // }

  //getter
  get getBalance(){
    return this._userBalance;
  }
}

const myAccount = new BankAccount(111, "Abid", 100);

// myAccount.addBalance(100);
myAccount.addBalance = 300;
console.log(myAccount.getBalance);