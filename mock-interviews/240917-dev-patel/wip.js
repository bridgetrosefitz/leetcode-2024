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

    for (let j = i; j < candidates.length; j++) {
      while (j > 0 && candidates[j] === candidates[j - 1]) continue;
      temp.push(candidates[j]);
      curr += candidates[j];
      backtrack(j + 1);
      curr -= candidates[j];
      temp.pop();
    }
  }

  backtrack(0);

  return res;
};
