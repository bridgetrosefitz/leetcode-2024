// You are looking to move house and you have a set of amenities that you would like to have access to from your new home.

// Each block in your neighborhood of interest contains zero or more of the amenities you require.

// Write an algorithm to select the optimal block for your home, such that the farthest distance to any amenity on your list is minimized.

// Example 1:

// Your list contains { school, grocery }, and the blocks are as follows:
// 1: restaurant, grocery
// 2: movie theater
// 3: school
// 4:
// 5: school

// The ideal choice would be block 2, such that the distances to the grocery and the nearest school are 1 each. Living on block 1 or 3 would make one of the distances zero, but the other one 2.

const blocks = [
  { restaurant: true, school: false, cinema: false, grocery: true },
  { restaurant: false, school: false, cinema: true, grocery: false },
  { restaurant: false, school: true, cinema: false, grocery: false },
  { restaurant: false, school: false, cinema: false, grocery: false },
  { restaurant: false, school: true, cinema: false, grocery: false },
];

const requirements = ["school", "grocery"];

// Example 2:

blocks = [
  { gym: false, school: true, store: false },
  { gym: true, school: false, store: false },
  { gym: true, school: true, store: false },
  { gym: false, school: true, store: false },
  { gym: false, school: true, store: true },
];

requirements = ["gym", "school", "store"];

// how would my approach differ if it was acceptable to have total distance to any amenity minimized

function optimalBlock(blocks, requirements) {
  let left = 0;
  let minLength = Infinity; // 2
  let start = 0; // 0
  let end = 0; // 2
  const count = {};
  const requirementsSet = new Set(requirements);

  // make freq counter for each amenity in requirements

  // for each block from left to right
  // go over each amenity at that block and increment key in count
  // while left <= right and count is > 0 for all amenities << TO DO: make this constant time
  // update minLength to be min of minLength and right - left
  // update start to be left
  // update end to be right
  // increment left

  /*
    count = {
      school: 1, 
      grocery: 1
    }
  */

  function hasAllAmenities(frequencyMap) {
    // TO DO: constant time function to check if all amenities

    for (const [_, count] of Object.entries(frequencyMap)) {
      if (count === 0) return false;
    }

    return true;
  }

  for (const requirement of requirements) {
    count[requirement] = 0;
  }

  for (let right = 0; right < blocks.length; right++) {
    // 1 2
    const newBlock = blocks[right];
    for (const [amenity, hasAmenity] of Object.entries(newBlock)) {
      if (requirementsSet.has(amenity) && hasAmenity) {
        count[amenity] += 1;
      }
    }

    while (left <= right && hasAllAmenities(count)) {
      minLength = Math.min(minLength, right - left);
      start = left;
      end = right;
      for (const [amenity, hasAmenity] of Object.entries(blocks[left])) {
        if (requirementsSet.has(amenity) && hasAmenity) {
          count[amenity] -= 1;
        }
      }
      left++;
    }
  }

  return Math.floor(start + (start - end) / 2);
}
