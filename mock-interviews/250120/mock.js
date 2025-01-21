function knapsack(weights, values, cap) {
  // your code goes here

  /*
    Inputs:
    - type, number, hostile
    - array 1 (weights) - int[]
    - array 3 (values) - int[]
    - capacity - int
    - hostile: empty napsack, capacity 0, always positive capacity, always positive weights and values

    Output:
    - int, maximum value achievable

    Brute force O(n2)

    weights = [4, 2, 3]
    values = [10, 20, 15]
                  L  
                       R
    capacity = 5
    output: 35

    max = -Infinity > 35
    
    */

  let maxValue = -Infinity; // 10
  let currWeight = 0; // 0 > 4 > 6 > 2
  let currValue = 0; // 0 > 10 > 30 > 20

  // SUBSEQUENCES - pick and not pick

  for (let i = 0; i < weights.length; i++) {
    // 1
    for (let j = i; j < weights.length; j++) {
      if (currWeight + weights[i] > cap) {
        continue;
      } else {
        maxValue = Math.max(maxValue, currValue);
      }
    }
  }

  return maxValue;
}

// debug your code below
const weights = [10, 20, 30];
const values = [60, 100, 120];
const capacity = 50;
console.log(knapsack(weights, values, capacity));
