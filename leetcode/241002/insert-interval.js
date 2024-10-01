/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  // guard clause for <= 1 length

  const res = [];
  // iterate left to right across intervals
  // if start of curr is less than start of new, push curr into res
  // else (if curr equal or greater)
  // find where merged / new interval should start
  // if start of new is less than end of prev, start is start of prev
  // else, start is start of new
  // find where merged / new interval should end
  //
  // update prev
};
