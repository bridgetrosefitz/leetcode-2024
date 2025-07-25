/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function (nums, k) {
  // [2,-1,2]

  let n = nums.length;

  let prefixSum = new Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }

  // double ended queue
  const indices = [];
  let minLength = n + 1;

  for (let i = 0; i <= n; i++) {
    while (indices.length && prefixSum[i] - prefixSum[indices[0]] >= k) {
      minLength = Math.min(minLength, i - indices[0]);
      indices.shift();
    }

    while (indices.length && prefixSum[indices.at(-1)] >= prefixSum[i]) {
      indices.pop();
    }

    indices.push(i);
  }

  return minLength > n ? -1 : minLength;
};
