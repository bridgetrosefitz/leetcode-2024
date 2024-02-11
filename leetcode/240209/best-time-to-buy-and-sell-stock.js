var maxProfit = function (prices) {
  if (prices.length === 1) return 0;

  let leftPointer = 0;
  let rightPointer = 1;
  let max = 0;

  while (rightPointer < prices.length) {
    const leftPrice = prices[leftPointer];
    const rightPrice = prices[rightPointer];
    const testPrice = rightPrice - leftPrice;

    if (testPrice > max) max = testPrice;

    if (rightPrice < leftPrice) leftPointer = rightPointer;

    rightPointer++;
  }

  return max;
};
