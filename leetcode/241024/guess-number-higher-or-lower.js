/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let left = 1; // 6 /////// ///////
  let right = n; //10 /////// 1 //// 2

  // while left is less than or equal to right
  // call api
  // if mid point is the number, return mid

  // if mid is larger than number, make right mid - 1
  // else, make left mid + 1

  // (1 + 9) / 2 >> Math.floor((left + right - left) / 2)
  // 1 + ((10 - 1) /2)

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2); //5
    const response = guess(mid);

    if (response === 0) return mid;
    if (response === -1) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
};
