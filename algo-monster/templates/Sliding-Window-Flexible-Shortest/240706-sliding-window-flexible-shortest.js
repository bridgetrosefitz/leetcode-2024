// A "brute force" method is to use largest_sum_subarray_k as a subroutine
// to check whether there exists a subarray of each possible length k with a sum larger than target,
// and find the smallest k.
// WHAT???

function subarraySumShortest(nums, target) {
  let windowSum = 0;
  let length = nums.length;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    windowSum = windowSum + nums[right];

    while (windowSum >= target) {
      length = Math.min(length, right - left + 1); // window is guaranteed to be valid here
      windowSum = windowSum - nums[left];
      left++;
    }
  }

  return length;
}
