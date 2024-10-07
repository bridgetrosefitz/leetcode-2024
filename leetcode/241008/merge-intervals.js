/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // ---
  //  ----
  //        --
  //              ----------

  //    --
  // --

  // --
  //     --

  // ---
  //  ---

  // ------
  //. -  -

  // --
  //.  --

  // sort by starting time
  intervals.sort((a, b) => (b[0] < a[0] ? 1 : -1));
  const res = [intervals[0]]; //[[1,5]] // [[1,10]] // [[1,3],[4,5],[6,7]]
  let prevIndex = 0; // 0 // 0 // 0 1

  // iterate from left to right, starting at index 1
  // if overlap (start of curr interval is less than end of prev)
  // update end of prev in res to be max of curr end and prev end
  // else
  // push curr into res
  // increment prevIndex

  // [[1,4][4,5]]
  // [[1,10],[2,3],[8,9]]
  // [[1,3],[4,5],[6,7]]

  for (let i = 1; i < intervals.length; i++) {
    const [currStart, currEnd] = intervals[i]; // 4, 5 // 2,3 // 4,5 // 6,7
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
