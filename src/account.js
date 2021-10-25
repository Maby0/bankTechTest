class Account {
  constructor(startingBalance = 0) {
    this.balance = startingBalance;
    this.transactionLog = [];
  }

  newTransaction(type, value) {
    return new Transaction(type, value);
  }
}