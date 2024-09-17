// Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

// Only numbers 1 through 9 are used.
// Each number is used at most once.
// Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

// Example 1:

// Input: k = 3, n = 7
// Output: [[1,2,4]]
// Explanation:
// 1 + 2 + 4 = 7
// There are no other valid combinations.
// Example 2:

// Input: k = 3, n = 9
// Output: [[1,2,6],[1,3,5],[2,3,4]]
// Explanation:
// 1 + 2 + 6 = 9
// 1 + 3 + 5 = 9
// 2 + 3 + 4 = 9
// There are no other valid combinations.
// Example 3:

// Input: k = 4, n = 1
// Output: []
// Explanation: There are no valid combinations.
// Using 4 different numbers in the range [1,9], the smallest sum we can get is 1+2+3+4 = 10 and since 10 > 1, there are no valid combination.

// EDGE CASES
/*
k = length
n = target

n < k
k = 0

1,2,3,4,5,6,7,8,9 , target = 7

                                    []
                        [1]                   []
                 curr = 1 temp = x  [1,2]     [1]
              [1,2,3] [1,2]
        [1,2,3,4]    [1,2,4] [1,2]
                  [1,2,4,5]



//base case
  if length of array > or sum is > return 


                  
*/

function generateCombinations(k, n) {
  const temp = [];
  const res = [];
  let curr = 0;

  /* 

  curr = 1
  temp = [1]
  res = []
  i = 1

    curr = 3
    temp = [1, 2]
    res = []
    i = 2

      curr = 6
      temp = [1, 2, 3]
      res = []
      i = 3

        curr = 6
        temp = [1, 2, 3]
        res = []
        i = 4

      curr = 7
      temp = [1, 2, 4]
      res = []
      i = 3
      j = 4

  */
  function backtrack(i, sum) {
    // base case
    // if curr equals n, add to res and return
    // if curr exceeds n, return
    // if i surpasses 9, return
    // if temp length surpasses k

    // generate options
    // iterate left to right
    // add option to curr
    // if curr > target
    // decrement curr by option
    // break
    // add an option
    // backtrack(j + 1)
    // remove option
    // decrement curr

    if (curr === n && temp.length === k) {
      return res.push([...temp]);
    }
    if (curr > n) return;
    // if(i > 9) return
    if (temp.length > k) return;

    for (let j = i; j <= 9; j++) {
      curr += j;
      if (curr > n) {
        curr -= j;
        break;
      }

      temp.push(j);
      backtrack(j + 1, sum + j);
      temp.pop();
      curr -= j;
    }
  }

  backtrack(1, 0);

  return res;
}

console.log(generateCombinations(3, 7));

// Read the problems
// Explained the combinations
// Edge cases

// Specific assignments for variables
// Talks about approach -- seems like you already know the answer

// Not working through examples - Should do that first
// Not sure what variables to keep track off
// Working through examples
// Understands base case
