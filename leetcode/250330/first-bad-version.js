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
 *
 * 1 2 3 4 5
 *   L
 *   R
 *   M
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1;
    let right = n;
    let earliestBadVersion = -1;

    while (right >= left) {
      const mid = Math.floor((right - left) / 2) + left;

      if (isBadVersion(mid)) {
        earliestBadVersion = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return earliestBadVersion;
  };
};
