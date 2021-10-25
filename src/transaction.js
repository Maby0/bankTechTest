class Transaction {
  constructor() {
    this.balance = 0;
    this.log = [{}];
  }

  deposit(value) {
    this.balance += value;
  }

  withdraw(value) {
    this.balance -= value;
  }

  getBalance() {
    return this.balance;
  }
}