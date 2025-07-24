/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  /*
    
    min = 1
    profit = 0 4

    [7,1,5,3,6,4]
           ^
     // profit = max of profit and el - min
     // min = min of in and el     

    
    */

  let min = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    profit = Math.max(profit, prices[i] - min);
    min = Math.min(min, prices[i]);
  }

  return profit;
};
