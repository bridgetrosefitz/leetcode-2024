/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // [1,0,1,2] >> 1
  let totalVol = 0;
  // create left max seen
  const leftMaxSeen = [0]; // [0,1,1,2]
  let max = height[0]; // 1
  for (let i = 1; i < height.length; i++) {
    max = Math.max(max, height[i]);
    leftMaxSeen[i] = max;
  }

  // create right max seen
  const rightMaxSeen = []; // [2,2,2,0]
  max = height[height.length - 1]; // 2
  for (let i = height.length - 2; i >= 0; i--) {
    max = Math.max(max, height[i]);
    rightMaxSeen[i] = max;
  }
  rightMaxSeen.push(0);

  // iterate from left to right
  // add to totalVol: min of val at left and right max seen - val at index in height

  for (let i = 0; i < height.length; i++) {
    // [1, 100, 1]
    // totalVol = 0
    const vol = Math.min(leftMaxSeen[i], rightMaxSeen[i]) - height[i];
    const valAtVerticalSection = vol < 0 ? 0 : vol;
    totalVol += valAtVerticalSection;
  }

  return totalVol;
};
