/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [intervals[0]];
  let prevIndex = 0;

  for (let i = 1; i < intervals.length; i++) {
    const [currStart, currEnd] = intervals[i];
    const [_, prevEnd] = res[prevIndex];

    if (currStart <= prevEnd) {
      res[prevIndex][1] = Math.max(currEnd, prevEnd);
    } else {
      res.push(intervals[i]);
      prevIndex++;
    }
  }

  return res;
};
