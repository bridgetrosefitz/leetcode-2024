/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  // -
  //. -
  //.  -
  // --

  // -
  // --
  //  -
  //.  -
  // sorted asc end time, then asc start time

  // -
  // -
  // -

  // -
  //. -

  // -
  // if length is one, return 1

  // --
  // -----

  // APPROACH IDEA
  // return 0 if length 1
  // sort asc by end time, then asc by start time
  // keep count of intervals removed, starts at 0
  // keep variable for currEnd
  // iterate from i 1 to end
  // if overlap between prev and interval at i (if start of curr interval is less than currEnd)
  // increment count
  // else
  // update currEnd to be end of curr

  // return count

  // intervals = [[1,2],[2,3],[3,4],[1,3]]
  // intervals sorted = [[1,2],[1,3],[2,3],[3,4]]
  if (intervals.length === 1) return 0;

  intervals.sort((a, b) => a[1] - b[1] || a[0] - b[0]); // TO DO CHECK THIS
  // intervals.sort((a, b) => {
  // if (a[1] === b[1]) {
  //     return a[0] - b[0];
  // } else {
  //     return a[1] - b[1];
  // }
  // });
  let count = 0; //1
  let currEnd = intervals[0][1]; //2 //3 //4

  for (let i = 1; i < intervals.length; i++) {
    const curr = intervals[i]; // [1,3] //[2,3] //[3,4]
    if (curr[0] < currEnd) {
      // 1 < 2 // 2 < 2
      count++;
    } else {
      currEnd = curr[1];
    }
  }

  return count;
};
