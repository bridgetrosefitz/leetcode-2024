/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 1;
  let right = x;
  let currentClosest = -1;

  if (x === 0) return 0;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (mid ** 2 >= x) {
      currentClosest = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  if (currentClosest * currentClosest !== x) return currentClosest - 1;
  return currentClosest;
};
