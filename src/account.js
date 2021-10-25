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

  _newTransactionInstance(type, value) {
    return new Transaction(this.balance, type, value);
  }
}