describe("Account", function () {
  beforeEach(function () {
    account = new Account();
  })

  describe("newTransaction", function () {
    it("stores the transaction", function () {
      account.newTransaction("deposit", 1);
      expect(account.getTransactionLog().length).toEqual(1);
    })
  })

  describe("getCurrentBalance", function () {
    it("returns the correct balance value", function () {
      account.newTransaction("deposit", 1);
      expect(account.getBalance()).toEqual("1.00");
    })
  })
})