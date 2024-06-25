/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const temp = [];
  const res = [];

  // base case / add to res

  // work

  // get your options and backtrack

  function backtrack(i, currTotal) {
    console.log("i", i);
    console.log("currTotal", currTotal);
    temp.push(candidates[i]);
    currTotal += candidates[i];

    if (currTotal === target) {
      res.push([...temp]);
      return;
    }

    for (let j = i + 1; j < candidates.length; j++) {
      if (currTotal + candidates[j] <= target) backtrack(j, currTotal);
    }

    temp.pop();
    currTotal -= candidates[i];
  }

  for (let i = 0; i < candidates.length; i++) {
    backtrack(i, 0);
  }

  return res;
};
