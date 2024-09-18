/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  // do this without global variables
  // what is the actual diff (in terms of efficiency)
  // to check whether you add the element inside a for loop or in the next ball

  const temp = [];
  const res = [];
  let curr = 0;

  candidates.sort();

  function backtrack(i) {
    // base cases
    // when have we found a valid answer
    if (curr === target) {
      return res.push([...temp]);
    }

    // when is our answer no longer valid
    if (curr > target) {
      return;
    }

    if (i > candidates.length) {
      return;
    }

    curr += candidates[i];
    temp.push(candidates[i]);
    backtrack(i + 1);
    curr -= candidates[i];
    temp.pop();

    while (i < candidates.length - 1 && candidates[i + 1] === candidates[i]) {
      i += 1;
    }

    backtrack(i + 1);
  }
  backtrack(0);

  return res;
};
