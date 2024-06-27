/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */

var distributeCookies = function (cookies, k) {
  const temp = new Array(cookies.length).fill(0);
  let min = Infinity;

  function dfs(i) {
    if (i === cookies.length) {
      min = Math.min(min, Math.max(...temp));
      return;
    }

    for (let j = 0; j < k; j++) {
      temp[j] += cookies[i];
      dfs(i + 1);
      temp[j] -= cookies[i];
    }
  }

  dfs(0);

  return min;
};
