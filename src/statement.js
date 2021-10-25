class Statement {
  constructor(transactionLog) {
    this.date = transactionLog["date"];
    this.credit = transactionLog["credit"];
    this.debit = transactionLog["debit"];
    this.balance = transactionLog["balance"];
  }

  print() {
    console.log(
      "date || credit || debit || balance"
    )
    console.log(
      `${this.date} || ${this.credit} || ${this.debit} || ${this.balance}`
    )
  }
}