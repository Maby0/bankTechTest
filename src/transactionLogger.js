const DECIMAL = 2;

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
      credit: value.toFixed(DECIMAL), 
      debit: null, 
      balance: this.balance.toFixed(DECIMAL)
    };

    this._logTransaction(transaction);
  }

  withdraw(value) {
    this.balance -= value;
    let transaction = {
      date: this.DATE, 
      credit: null, 
      debit: value.toFixed(DECIMAL), 
      balance: this.balance.toFixed(DECIMAL)
    };
    
    this._logTransaction(transaction);
  }

  getBalance() {
    return this.balance.toFixed(DECIMAL);
  }

  getLog() {
    return this.log;
  }

  _logTransaction(transaction) {
    this.log.push(transaction);
  }
}