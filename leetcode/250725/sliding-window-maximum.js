/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const q = [];
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    // remove all elements which will be removed BEFORE curr, and which are less than (so we don't want them anyway)

    while (q.length && nums[q.at(-1)] <= nums[i]) {
      q.pop();
    }

    q.push(i);

    // if the oldest element is now outside the window, get rid of it
    if (q[0] <= i - k) {
      q.shift();
    }

    // find max from back (if we know we've passed the initial load)

    if (i < k - 1) {
      continue;
    }

    const maxIndex = q[0];
    res.push(nums[maxIndex]);
  }

  return res;
};
