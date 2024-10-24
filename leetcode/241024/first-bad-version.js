/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    // left is 1 //1 // 4 //////// 1
    let left = 1;
    // right is n //5 //////// 1
    let right = n;
    let earliestBadVersion = -1; //4 //////

    while (right >= left) {
      const mid = Math.floor(left + (right - left) / 2);
      // get mid number //3 //4
      // get response from isBadVersion on mid number // false
      const response = isBadVersion(mid);
      if (response) {
        earliestBadVersion = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
      // if response is true
      // update earliestBadVersion to be mid
      // right = mid - 1
      // else
      // left = mid + 1
    }

    return earliestBadVersion;
  };
};
