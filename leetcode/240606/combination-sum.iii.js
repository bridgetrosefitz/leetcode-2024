/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const res = [];
  const temp = new Set();
  let currTotal = 0;
  let prev = 0;

  function backtrack() {
    if (currTotal > n) return; // if you check if > n in for loop, you don't need this
    if (temp.size > k) return;

    if (currTotal === n && temp.size === k) {
      res.push(Array.from(temp));
      return;
    }

    let start = prev + 1;
    for (let i = start; i <= 9; i++) {
      if (temp.has(i)) continue; // start prevents this ever happening
      temp.add(i);
      currTotal += i;
      prev = i;
      backtrack();
      currTotal -= i;
      prev = start - 1;
      temp.delete(i);
    }
  }

  backtrack();

  return res;
};
