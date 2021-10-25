class TransactionLogger {
  constructor() {
    this.balance = 0;
    this.log = [];
    this.DATE = new Date();
  }

  deposit(value) {
    this.balance += value;
    let transaction = {
      date: this.DATE, 
      credit: value, 
      debit: null, 
      balance: this.balance
    };

    this._logTransaction(transaction);
  }

  withdraw(value) {
    this.balance -= value;
    let transaction = {
      date: this.DATE, 
      credit: null, 
      debit: value, 
      balance: this.balance
    };
    
    this._logTransaction(transaction);
  }

  getBalance() {
    return this.balance;
  }

  getLog() {
    return this.log;
  }

  _logTransaction(transaction) {
    this.log.push(transaction);
  }
}