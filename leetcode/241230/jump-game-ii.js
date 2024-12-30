/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let i = 0;
  let maxIndex = 0;
  let currentPole = 0;
  let jumps = 0;

  while (currentPole < nums.length - 1) {
    maxIndex = Math.max(maxIndex, i + nums[i]);
    if (i === currentPole) {
      // aka if we've tested everything
      currentPole = maxIndex;
      jumps += 1;
    }

    i += 1;
  }

  return jumps;
};
