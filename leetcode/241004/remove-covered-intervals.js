/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

  let count = 1;
  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const [currStart, currEnd] = intervals[i];
    if (currEnd > prevEnd) {
      count++;
      prevEnd = currEnd;
    }
  }

  return count;
};
