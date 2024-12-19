/*
- Input: [8, 4, [5, [9], 3], 6], Output: 1*(8+4 + 2*(5 + 3*(9) + 3) + 6) ==> 88 >> 16 + 27 + 18 = 62
3*9  >> 27
2 * [5 + *27 + 3] >> 70
1 * [8 + 4 + *70 + 6] >> 88

- Input: [1, [[1], 1], 1], Output: 10

write a function called depthSum
- takes in an arr of numbers or arrays of numbers
- calculates what we call depthSum - sum of numbers in an arr multiplied by depth
- depth is level of nesting

time O(n)
space O(depth)

Inputs:
- type, length, hostile
-- nested array 
-- [] >> return 0
-- negative, positive, 0

Output:
- integer (depth sum)

*/

function depthSum(nestedArr) {
  // [8, 4, [5, 3], 6]
  // []

  function helper(arr, depth) {
    let sum = 0; // 8 + 4 + 16
    // 5 + 3

    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
      if (typeof el !== number) {
        // TO DO: check syntax
        // recurse
        sum += helper(el, depth + 1);
      } else {
        sum += el;
      }
    }

    return sum * depth;
  }

  return helper(nestedArr, 1);
}

// Array.isArray(el) // true or false
// (typeof el === 'number')

// given an array of numbers, return the second largest num

/**
 *
 * Input:
 * - type, length, hostile
 * - num[]
 * - friendly intput - always have an ans
 * - not sorted
 * - negative, postive
 * - could be duplicates
 *
 * Output:
 * - num (second largest)
 *
 * Brute force: sort desc, grab 1st index O(nlogn) time O(1) space
 *
 * - heap
 * - >> he will ask me to generalize to not just second largest
 *
 * [-1,1,0,2] >> 1 (k = 2) O(nlogk) O(k) space
 *
 * Min heap (knock off things that are smaller)
 * At each item, knock off top if item is larger than smallest (top)
 *
 * What is the vlaue we always get from min heap > smallest
 * Numbers I want to eliminate are: everything smaller than the second largest
 *
 *   1
 * 2
 *
 *
 */

// class MinHeap {
//   popTop
//   add
//   peek
//   size
// }

function findKthLargestNumber(arr, k) {
  // [-1,2,1,1,0]

  //   1
  // 2
  const minHeap = new Heap();

  for (const el of arr) {
    if (minHeap.size < k) {
      minHeap.add(el);
    } else if (el > minHeap.peek()) {
      // else if el is larger than top of heap
      minHeap.popTop();
      minHeap.add(el);
    }
  }

  return minHeap.popTop();
}
