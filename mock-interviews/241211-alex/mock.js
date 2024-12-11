// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

/**
 * Input:
 * - nums: int[]
 * - type / hostile: positive integers only + 0
 * - notes
 * -- any given jump has to land you AT MOST at last index
 * - e.g. [3, 5, 3, 1, 2, 1, 1, 1, 0] >> 1
 *         L
 *                  R
 *                           Re
 * - e.g. [3, 5, 3, 1, 2, 4, 1, 1, 0] >> 1
 *                     L
 *                           R
 *                                   Re
 * - e.g. [2, 0, 1] >> 1
 * - e.g. [1, 2, 1] >> 1
 *         L
 *               R
 *        [0,  1  ]
 *
 *
 *
 * Output:
 * - integer (minimum number of jumps to reach last index)
 * - notes
 * -- must last EXACTLY on last index
 *
 * APproaches
 * - backtracking
 *
 * - optimal solution is a greedy approach
 * - two pointers
 */

function minJumps(nums) {
  let currJumps = 1;
  let minJumps = Infinity;

  for (let i = 0; i < nums.length; i++) {
    // can't exceed nums.length
    // go as far as you can
  }

  return minJumps;
}
