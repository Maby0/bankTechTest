describe("transaction", function () {
  beforeEach(function () {
    transaction = new Transaction();
  });

  describe("deposit", function () {
    it("adds the argument value to the balance", function () {
      transaction.deposit(1);
      expect(transaction.getBalance()).toEqual(1);
    })
  })

  describe("withdraw", function () {
    it("subtracts the argument value from the balance", function () {
      transaction.deposit(1);
      transaction.withdraw(1);
      expect(transaction.getBalance()).toEqual(0);
    })
  })
})