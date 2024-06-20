/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */

// do this with dfs
var canReach = function (arr, start) {
  const q = [start];
  const visited = new Set();

  while (q.length) {
    const curr = q.shift();

    if (arr[curr] === 0) return true;

    const upper = curr + arr[curr];
    const lower = curr - arr[curr];

    if (upper < arr.length && !visited.has(upper)) {
      q.push(upper);
      visited.add(upper);
    }
    if (lower >= 0 && !visited.has(lower)) {
      q.push(lower);
      visited.add(lower);
    }
  }

  return false;
};
