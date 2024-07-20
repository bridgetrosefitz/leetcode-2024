/*
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
frequency
 of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
Example 3:

Input: candidates = [2], target = 1
Output: []
*/

/**
[2,3,6,7]
 ^
i=0
j=0
_____
[2,3,6,7]
i=0
j=0
_____
[2,3,6,7]
i=0
j=0
_____
[2,3,6,7]
i=0
j=0
_____

temp=[2,2,2,2]
res=[2,2,2,2]
 */

function generateCombinations(candidates, target) {
  const temp = [];
  let currSum = 0;
  const res = [];

  function backtrack(i) {
    // if curr sum === target
    // put copy of temp into res
    // return
    // if curr sum > target
    // don't go further, assuming sorted
    // return
    // figure out my options
    // for(let j = i; j < candidates.length; j++) {
    // temp.push(candidates[j]))
    // currSum += candidates[j]
    // backtrack(j)
    // temp.pop()
    // currSum -= candiates[j]
    // }
    // [2,3,6,7]
    // i = 0
    // temp = [2]
    // i = 1
    // temp = [2, 3]
  }

  backtrack(0);

  return res;
}

// perfectly ok to go down a branch that doesn' tlead anywhere,
// as long as we have a way to enter all branches that may lead somewhere
