# Bank Tech Test

This app logs deposits and withdrawals from a bank account and is to be used from within the JavaScript console.

* The Account object acts as the interface for the app
* All transactions are stored within the Account's transaction log.
* The transaction log contains a list of Transaction objects with transaction details stored as properties.
* The transaction log can be printed to the console.

### To run

* Clone this repository `git clone https://github.com/Maby0/bankTechTest/`
* Install dependancies `npm install`
* Open the index.html in your browser and open the console (fn + f12)
* Create an account `let account = new Account;`
* initiate a transaction passing the type (deposit or withdraw) and value (integer) `account.newTransaction("deposit", 100)`
* print a statement including all recent transactions to the console using `account.printStatement()`
* other commands available to the account: `account.getBalance()`, `account.getTransactionLog()`

### Demo

![App demo](/images/bankTechTestDemo.gif)

### Testing

* This app was built using a TDD approach employing the Jasmine testing suite.
* 5 tests in total were written to ensure the desired output was generated from the 3 classes.

![Testing suite](/images/jasmineImage.png)
