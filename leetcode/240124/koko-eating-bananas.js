/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  // what are the bounds of k
  // max = 11
  // min = 1

  // 1 2 3 4 5 6 ... 11

  // if h is less than piles, it's not possible

  // one pass to get max
  // log(max of piles) * length of piles
  // max possible search space for k is 10^9 (1 bill - huge) - if you tried every possible k for every item, you'd have to try up to k

  // [3,6,7,11]
  let left = 1; // 1 >> 4
  let right = Math.max(...piles); // 11 // 5 // 3
  let smallestSoFar = right; // 11 // 6 // 4

  while (left <= right) {
    // TO DO: check <=
    const mid = Math.floor(left + (right - left) / 2); // 6 >> 3 >> 4

    const canEatAll = checkGivenK(mid);

    if (canEatAll) {
      // see if we can go smaller
      smallestSoFar = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return smallestSoFar;

  function checkGivenK(k) {
    let hoursTaken = 0;
    for (const numberOfBananas of piles) {
      const minHours = Math.ceil(numberOfBananas / k);
      hoursTaken += minHours;
      if (hoursTaken > h) {
        return false;
      }
    }

    return true;
  }
};
