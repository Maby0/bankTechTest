class Transaction {
  constructor(currentBalance, type, value = 0) {
    this.date = new Date().toLocaleString().substring(0,10);
    this.transactionType = type;
    this.transactionValue = value;
    this.updatedBalance = this._calculateNewBalance(currentBalance, type, value);
  }

  _calculateNewBalance(currentBalance, type, value) {
    if (type === "deposit") {
      return currentBalance + value;
    } else if (type === "withdraw") {
      return currentBalance - value;
    }
  }
}
