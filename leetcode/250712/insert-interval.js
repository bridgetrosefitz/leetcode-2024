/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  intervals.push(newInterval);
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [intervals[0]];
  let prevIndex = 0;

  // [1,3],[1,2]

  for (let curr = 1; curr < intervals.length; curr++) {
    if (res[prevIndex][1] >= intervals[curr][0]) {
      res[prevIndex][1] = Math.max(res[prevIndex][1], intervals[curr][1]);
    } else {
      res.push(intervals[curr]);
      prevIndex++;
    }
  }

  return res;
};
