class Account {
  constructor(startingBalance = 0) {
    this.balance = startingBalance;
    this.transactionLog = [];
  }

  newTransaction(type, value) {
    let transaction = this._newTransactionInstance(type, value);
    this.transactionLog.push(transaction);
  }

  getTransactionLog() {
    return this.transactionLog;
  }

  getBalance() {
    this._updateBalance();
    return this.balance.toFixed(2);
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