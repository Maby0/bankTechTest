class Account {
  constructor(startingBalance = 0) {
    this.balance = startingBalance;
    this.transactionLog = [];
  }

  getBalance() {
    return this.balance.toFixed(2);
  }

  getTransactionLog() {
    return this.transactionLog;
  }

  newTransaction(type, value) {
    let transaction = this._newTransactionInstance(type, value);
    this.transactionLog.push(transaction);
    this._updateBalance();
  }

  printStatement() {
    new Statement(this.transactionLog).print()
  }

  _newTransactionInstance(type, value) {
    return new Transaction(this.balance, type, value);
  }

  _updateBalance() {
    this.balance = this._getMostRecentBalance()
  }

  _getMostRecentBalance() {
    return this.transactionLog[this.transactionLog.length - 1].updatedBalance;
  }
}