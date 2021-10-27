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

### Spec

*Requirements* 
You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)

Deposits, withdrawal.

Account statement (date, amount, balance) printing.

Data can be kept in memory (it doesn't need to be stored to a database or anything).

Acceptance criteria

Given a client makes a deposit of 1000 on 10-01-2023, 
and a deposit of 2000 on 13-01-2023,
and a withdrawal of 500 on 14-01-2023,
when she prints her bank statement, then she would see:

```
date || credit || debit || 
balance 14/01/2023 || || 500.00 || 2500.00 
13/01/2023 || 2000.00 || || 3000.00 
10/01/2023 || 1000.00 || || 1000.00
```

### Approach

##### Domain modelling

Transaction
Methods | Attributes
--------|-----------
calculateNewBalance | date: Date
. | transactionType: String
. | transactionValue: Integer
. | updatedBalance: Integer

Account
Methods | Attributes
--------|-----------
getBalance() | balance: Integer
getTransactionLog() | transactionLog: Array
newTransaction(type, value) |
printStatement() |

Statement
Methods | Attributes
--------|-----------
print() | transactionLog: Array


