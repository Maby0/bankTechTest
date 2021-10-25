describe("Statement", function () {
  describe("print", function () {
    it("prints out a statement based on recent transaction logs", function () {
      spyOn(console, 'log');
      let transaction = jasmine.createSpyObj(
        'transaction', 
        {},
        {
          date: "01/01/2021",
          transactionType: "deposit",
          transactionValue: 1,
          updatedBalance: 1
        }
      );
      new Statement([transaction]).print();
      expect(console.log).toHaveBeenCalledWith(
        'date || credit || debit || balance'
      );
      expect(console.log).toHaveBeenCalledWith(
        '01/01/2021 || 1.00 ||  || 1.00'
      );
    })
  })
})