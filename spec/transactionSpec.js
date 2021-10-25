describe("Transaction", function () {
  it("updatedBalance is increased if transaction type = deposit", function () {
    transaction = new Transaction(0, "deposit", 1);
    expect(transaction.updatedBalance).toEqual(1);
  })

  it("updatedBalance is decreased if transaction type = withdraw", function () {
    transaction = new Transaction(1, "withdraw", 1);
    expect(transaction.updatedBalance).toEqual(0);
  })
})