class Statement {
  constructor(transactionLog) {
    this.transactionLog = transactionLog;
  }

  print() {
    console.log(
      "date || credit || debit || balance"
    );
    this.transactionLog.forEach(transaction => {
      console.log(
        `${transaction.date} || ${(transaction.transactionType == "deposit") ? transaction.transactionValue.toFixed(2) : ""} || ${(transaction.transactionType == "withdraw") ? transaction.transactionValue.toFixed(2) : ""} || ${transaction.updatedBalance.toFixed(2)}`
      )
    });
  }
}