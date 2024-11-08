// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

/* 
IN: array of nums
OUT: true or false (if can reach last index) - can exceed it, but don't get stuck

const nums = [0,2,1] // false
const nums = [1,1,1] // true
const nums = [2,1,1] // true
const nums = [1,0,1] // false
const nums = [2,2,0,3,0] // true
const nums = [2,1,0,3,0] // false
                  |
[2,2,_,_,_]
[_,_,_,T,F]

const nums = [2,2,0,3,0] 
                      X
max = 6

// backtracking - try every option at each index
// O(n) time hmmmm
// 
// each time I step backwards, I have to step forwards and say does this lead to a T

// greedy
// max >> can we reach the last index

// DP

// store max
// at each index
  // update max to be max of max and curr index + number at curr index
  // if max is greater than or equal to length of nums, return true
// return false

*/

function canReachEnd(nums) {
  // const nums = [1,0,0,3,0] length=5
  //                   i
  let maxIndex = 0; // 1
  for (let i = 0; i < nums.length; i++) {
    // 0 1
    const maxJumps = nums[i]; // 1 0
    if (i > maxIndex) {
      return false;
    }
    // if our new max is the same as current max, we are stuck
    maxIndex = Math.max(maxIndex, i + maxJumps);
    if (maxIndex >= nums.length - 1) {
      return true;
    }
  }
  return false;
}
