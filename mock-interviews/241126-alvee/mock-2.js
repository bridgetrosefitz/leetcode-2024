/**
 * @param {number[][]} costs
 * @return {number}
 */

/*
Input: number[][]
- length: 
  - 3 vals per tuple - R-B-G
  - n will be at least 1; max 100
- output: number, min cost (with all adj houses being painted different color)

costs = [[17,2,17],
          |
         [16,16,5],
             |
         [14,3,19]]
               |
[]

// store min of all houses
// backtrack helper
// valid check (is not same color as at previous house)

// how am I optimizing - I have to go to the end to figure out the minimum
// e.g. the cost can vary drastically - there is no locally optimal solution

                       0
                    /             |  \
                  17               2   17
                 16 5           16 5


                       0
                    /             |  \
                  2               17   17
                 16 5           16 5
                
[[17,2,17],[5,1,1]]


// sorting

Input: costs = [[7,6,2]] [X]

*/
var minCost = function (costs) {
  let min = Infinity;

  function tryOptions(i, prevColor, currCost) {
    // currCost = 47
    // base case
    if (i === costs.length) {
      min = Math.min(min, currCost);
      return;
    }

    if (currCost > min) {
      return;
    }

    // try one option
    // backtrack on next option
    // remove option

    for (let color = 0; color < 3; color++) {
      if (prevColor === color) {
        continue;
      }
      tryOptions(i + 1, color, currCost + costs[i][color]);
    }
  }

  tryOptions(0, -1, 0);

  return min;
};
