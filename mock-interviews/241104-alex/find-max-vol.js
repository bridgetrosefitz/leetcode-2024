// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

/*
input: arr (height), of length n [1,10,8,32] (0,0) (0,1) // (1,0) (1,10)

output: integer (max amount of water) > height x width

// keep track of max
// test new volume at each i by incrementing x by 1 and checking for max shared height
// sliding window?
// two pointer

maxVol  = 6 49
currWidth = 0 1 2
currVol = 1 2 

length 100 array
[1,1,1,......50, 50, 1, 1, .....1 ]

height = [1,8,6,2,5,4,8,3,7]
            L             
                        R
                  

/////////////////////////////
// get rid of everything smaller than current
stack = [[8,1],[6,2]] 

// how would the mono stack help me explore every potential max option

///////

// pointers at outside indices
// test vol
// move pointer at smaller element



O: output
I: input
C: constraints
E: edge cases

*/

function findMaxVol(height) {
  // height = [1,8,6,2,5,4,8,3,7]
  let maxVol = -Infinity; //8 //49
  let left = 0; //1
  let right = height.length - 1; // 7 6

  while (left < right) {
    const width = right - left + 1; // 8 7
    const maxHeight = Math.min(height[left], height[right]); // check syntax // 1 7

    const vol = width * maxHeight; //7 49
    maxVol = Math.max(maxVol, vol);

    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }

  return maxVol === -Infinity ? 0 : maxVol;
}
