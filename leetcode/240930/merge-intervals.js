/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // sort intervals
  // create res variable

  // set prev to be first interval in list

  // iterate from second interval to end of list

  // if start of curr is less than or equal to end of prev
  // update prev end to be curr end

  // return res

  if (!intervals.length) return [];

  intervals.sort((a, b) => (a[0] < b[0] ? -1 : 1));
  const res = [intervals[0]];
  let prev = 0;
  let curr = 1;

  while (curr < intervals.length) {
    const prevInterval = res[prev];
    const currInterval = intervals[curr];
    if (currInterval[0] <= prevInterval[1]) {
      prevInterval[1] = Math.max(currInterval[1], prevInterval[1]);
    } else {
      res.push(currInterval);
      prev++;
    }

    curr++;
  }

  return res;
};
