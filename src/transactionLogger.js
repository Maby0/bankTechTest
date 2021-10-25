class TransactionLogger {
  constructor() {
    this.balance = 0;
    this.log = [];
    this.transaction;
    this.DATE = new Date();
  }

  deposit(value) {
    this.balance += value;
    this.transaction = {
      date: this.DATE, 
      credit: value, 
      debit: null, 
      balance: this.balance
    };

    this.log.push(this.transaction);
  }

  withdraw(value) {
    this.balance -= value;
    this.transaction = {
      date: this.DATE, 
      credit: null, 
      debit: value, 
      balance: this.balance
    };
    
    this.log.push(this.transaction);
  }

  getBalance() {
    return this.balance;
  }

  getLog() {
    return this.log;
  }
}