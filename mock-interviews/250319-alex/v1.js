[1]
[1,2] max = 1
   ^
[2,1] max = 0
   ^
[2,1,3]
 ^
[2,1,3,4]

[4,2,1,3], expect = 2, max = 2
 ^

[1,4,3]
[2,5,1,3]
       

max = 3
min = 1
maxProfit -Infinity


// buy at lowest, sell at highest, with highest coming after lowest

function maxProfit(prices) {
  let maxPrice = -Infinity
  let minPrice = Infinity
  let maxProfit = -Infinity

  for(let i = prices.length - 1; i >= 0; i--) {
    if(prices[i] > maxPrice) {

    }
  }

}