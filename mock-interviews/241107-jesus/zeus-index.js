// We need a way to store and show transactions between Alice and Bob (a and B)
// We plan to call this a Ledger and we don't know anything else about it
// Allow A to transfer some money to B
// Print or visualize henever we want how much money A transfered to B, or B transfered to A.
// A -> $100 -> B (A owes $100 to B)
// B -> $50 -> A (B is owed $50 by A OR A owes $50 to B)

/*

- Give me all transactions in X time period (LATER)
- Give me all transactions (YES)
- Give me most recent transaction
- Give me planned transactions (individual transactions) (LATER)

====== 
- Give me balance owed to A or B // B to A (getBalance)
>> print: A is owed $XX (0 or an amount)
>> print: B is owed $YY (0 or an amount)
- Add a transaction, with amount and who the money is for (transfer)
>> adjust the totals 
A: 0 (owed)
B: 0 (owed)
ledger.transfer(100, 'A', 'B') // the person who is paying
A: 0 (owed)
B: 100 (owed)
ledger.transfer(150, 'B', 'A') 
A: 50 (owed)
B: 0 (owed) (if other person is greater than 0, subtract curr balance from amount owed, then add remainder to other person's balance owed)

A: 0
B: 100 >> -50

////////////////////

// create a new Ledger
// create an object storing person's id (empty when we create)
{
'A': 0
'B': 1
'C': 2
}
// create a nested array where row is ID of person being paid; col is ID of person paying
// set totals for every cell to 0

// showAllBalances
// get balances
// print

       0   1   2
   0   0 | 0 | 0
      ------------
   1   0 | 0 | 0
      ------------
   2   0 | 0 | 0

// add transaction
   
*/

// const ledger = new Ledger()
// ledger.transfer(100, 'A', 'B')
// ledger.transfer(50, 'B', 'A')
// ledger.showAllBalances() -> `A owes $50 to B`

class Ledger {
  constructor() {}
}
