/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = [];
  const temp = [];

  function buildCombos(i) {
    if (temp.length === k) {
      res.push([...temp]);
      return;
    }

    for (let j = i; j <= n; j++) {
      temp.push(j);
      buildCombos(j + 1);
      temp.pop();
    }
  }

  buildCombos(1);
  return res;
};
