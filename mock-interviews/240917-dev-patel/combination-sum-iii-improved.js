/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const temp = [];
  const res = [];
  let curr = 0;

  function backtrack(i, sum) {
    if (curr === n && temp.length === k) {
      return res.push([...temp]);
    }
    if (curr > n) return;
    if (temp.length > k) return;

    for (let j = i; j <= 9; j++) {
      curr += j;
      temp.push(j);
      backtrack(j + 1, sum + j);
      temp.pop();
      curr -= j;
    }
  }

  backtrack(1, 0);

  return res;
};
