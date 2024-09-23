// PASTE FROM PAST ATTEMP

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// sort by first index in each interval
// variable for current interval = 0
// while current.end >= current + 1.start
// make a new merged interval (start)
// increment current

var merge = function (intervals) {
  const res = [];
  let curr = 0;
  let next = 1;
  let start = 0;
  let end = 0;

  intervals.sort((a, b) => (a[0] < b[0] ? -1 : 1));

  while (curr < intervals.length) {
    while (
      intervals[curr][0] >= intervals[next][0] &&
      next <= intervals.length
    ) {
      const nextInterval = intervals[next];
      start = intervals[curr][0];
      end = Math.max(intervals[curr][1], nextInterval[1]);
      next++;
    }
    res.push([start, end]);
    curr++;
  }

  return res;
};
