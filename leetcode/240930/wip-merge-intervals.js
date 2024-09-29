/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const res = [];
  let curr = 0;
  intervals.sort((a, b) => (a[0] < b[0] ? -1 : 1));

  while (curr < intervals.length) {
    if (curr === intervals.length - 1) {
      res.push(intervals[curr]);
      break;
    }

    const [currStart, currEnd] = intervals[curr];

    // while intervals[curr + 1][0] < currEnd
    // increment curr

    // push [currStart, intervals[curr][1] into res

    while (curr + 1 < intervals.length && intervals[curr + 1][0] <= currEnd) {
      curr++;
    }

    res.push([currStart, intervals[curr][1]]);

    // if(currEnd >= nextStart) {
    //     const end = currEnd > nextEnd ? currEnd : nextEnd
    //     res.push([currStart, end])
    //     curr += 2
    // } else {
    //     res.push(intervals[curr])
    //     curr += 1
    // }
  }

  // while curr is less than intervals length
  // if curr is intervals.length, push intervals[curr] into res and break
  // if end at interval i is bigger than start at interval i + 1
  // make a new interval from start i to end i + 1
  // push into res
  // curr += 2
  // else
  // push interval i into res
  // curr += 1

  // return res

  return res;
};
