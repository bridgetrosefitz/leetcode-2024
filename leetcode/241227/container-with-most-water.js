/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // maxSoFar

  // capacity is min of both pointers x distance

  // move smaller pointer

  let maxSoFar = 0;
  let left = 0;
  let right = height.length - 1;

  while (right > left) {
    const currWidth = right - left;
    const currHeight = Math.min(height[left], height[right]);

    const volume = currWidth * currHeight;

    maxSoFar = Math.max(maxSoFar, volume);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxSoFar;
};
