/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  /*
    
        4
        5
        0
        1
    */
  // 0 1 2 3 4
  // 0 1 2 3 4 5 6 7 8
  //    L
  //      R
  //    M

  // 0 1
  //  L
  //  R
  //  M

  let left = 0;
  let right = x;
  let closest = left;

  while (left <= right) {
    let mid = Math.floor((right - left) / 2) + left;

    let square = mid ** 2;

    if (square === x) {
      return mid;
    }

    if (square < x) {
      closest = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return closest;
};
