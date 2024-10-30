// You are looking to move house and you have a set of amenities that you would like to have access to from your new home.

// Each block in your neighborhood of interest contains zero or more of the amenities you require.

// Write an algorithm to select the optimal block for your home, such that the farthest distance to any amenity on your list is minimized.

// input : linear input
// object: { amenity: quantity }
// each block could have 0
// B, F, G, K
//      x.          x. x.          x
//.  0. 1. 2. 3. 4. 5. 6. 7. 8. 9. 10 11 12
// [ A. B. C. D. E. F. G. H. I. J. K. L. M]

// 1, 5, 6, 10
// low: 1
// hi: 10
// (10 - 1) / 2
// tree N
// LL N
// iteration/recursion N
// Dp N
// binary search logn N
// two pointer
// time: O(n)

// [{a: 0, b: 1}, {a: 1, b: 0}....]
// amenities {a: 1, b: 1} ....i

// input: arr of objects
// arr of amenities
// output: optimal block

// choose the middle of that sliding window
// two pointers

const findOptimalBlock = (neighborhood, needed) => {
  // if we assume it is 1 of each...
  let stillNeeded = Object.keys(needed).length;
  // amenities {a: 1, b: 1} => 2

  let l = 0;
  for (let r = 0; r < neighborhood.length; r++) {
    // check the right pointer
    const currBlock = neighborhood[r];
    // for (){
    // decrease current amenity from needed obj by 1
    // if the current amenity === 0
    // stillNeeded--
    // while (stillNeeded === 0)
    // if it is 0, while loop to move up left until it is not 0
    // overwrite the "shortest"
    // }
    // return middle of shortest window
  }
};

// https://docs.google.com/spreadsheets/d/1e-5OI55dzl8gYG74SKHfKjB6tZ3AET1dKjGXWkYdcKI/edit?usp=sharing
