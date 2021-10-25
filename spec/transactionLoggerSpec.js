describe("TransactionLogger", function () {
  beforeEach(function () {
    transaction = new TransactionLogger();
  });

  describe("deposit", function () {
    it("adds the argument value to the balance", function () {
      transaction.deposit(1);
      expect(transaction.getBalance()).toEqual(1);
    })

    it("adds the deposit transaciton to the log array", function () {
      transaction.deposit(1);
      expect(transaction.getLog().length).toEqual(1);
    })
  })

  describe("withdraw", function () {
    it("subtracts the argument value from the balance", function () {
      transaction.deposit(1);
      transaction.withdraw(1);
      expect(transaction.getBalance()).toEqual(0);
    })

    it("adds the withdraw transaction to the log array", function () {
      transaction.deposit(1);
      transaction.withdraw(1);
      expect(transaction.getLog().length).toEqual(2);
    })
  })
})