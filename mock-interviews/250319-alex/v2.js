/**
 *
 *You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

[1]
max = 0

prices = [1,2,1]
              ^
hasStock = 

spent = 2
made = 0
profit = 1

output: 

[1]
[1,2] max = 1
   ^
[2,1] max = 0
   ^
[2,1,3]
 ^
[2,1,3,4]

[4,2,1,3], expect = 2
^
min = 1
max = 4
maxProfit = 2

[1,4,3]
 ^
max = 4
maxProfit = 3

[2,5,1,3]
 ^
max = 5
maxProfit = 3

[2,5,1,3]
       ^
[1,100,1,3]
 ^
max = 100
currProfit = 2
totalProfit = 2 // 101
maxProfit = 

[1,3,50,100]
         ^
99

[1,80,50,100], 99
   ^
         
79 + 50


max = 3
min = 1
maxProfit -Infinity


// buy at lowest, sell at highest, with highest coming after lowest
// any time I can make a profit, i should sell

//////

sell as soon as we hit greater value than currMin
update currMin to be val we sell at
update currMin to curr value if smaller
add profit to cumulatedProfit as we go

 * 
 */

function maxProfit(prices) {
  // [1,80,50,100], 99
  let currMin = Infinity; // Infinity 1 80 50
  let cumulativeProfit = 0; // 0 79 129

  for (let i = 0; i < prices.length; i++) {
    const currPrice = prices[i]; // 1 80 50 100
    if (currPrice < currMin) {
      currMin = currPrice;
    }
    if (currPrice > currMin) {
      cumulativeProfit += currPrice - currMin;
      currMin = currPrice;
    }
  }

  return cumulativeProfit;
}
