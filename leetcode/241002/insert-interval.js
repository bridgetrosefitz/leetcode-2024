/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  intervals.push(newInterval);
  intervals.sort((a, b) => (a[0] < b[0] ? -1 : 1));
  const res = [intervals[0]];
  let prevInt = 0;

  for (let currInt = 1; currInt < intervals.length; currInt++) {
    const curr = intervals[currInt];
    const prev = res[prevInt];
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(curr[1], prev[1]);
    } else {
      res.push(curr);
      prevInt++;
    }
  }

  return res;
};
