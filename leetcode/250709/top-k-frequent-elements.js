/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  /*

  INPUTS type length hostile
  - int[] (nums) 
  - k (int)
  - [], k = 0 >> []
  - [1,1,1,1], k = 2 K WILL NOT BE GREATER THAN UNIQUE ELS
  - not sorted
  - negative and positive (doesnt matter)
  - [1,2,1,2,3,3], k = 2 >> [1,2] or [1,3] or [2,3]

  OUTPUTS type length mutate
  - int[], els which are most frequent - k of them
  - any order

  BRUTE FORCE
  - make a counter of all els
  - sort
  - grab top k els
  - time: O(nlogn) - sorting, space O(n)

  O(nlogk) time
  - heap with max k items
  - O(n) space

  {
      "a": 3
      "b": 2
      "c": 1

  }
  [1,1,1,2,2,3]
   ^
      [2,"b"]
   [3,"a"]

   // min heap
   
   // if fewer els than k, just add
   // if freq is greater than currMin, pop and replace
   // turn heap into array
   // return mapped to actual vals

   MinHeap {
      add
      popTop
      size
      peek
      toArray
   }

   TO DO: Check if this works with ties

   [1,1,1,2,2,3,3,3], k = 2
    ^
  */
  const counter = new Map();
  /*
   {
      1: 3,
      2: 2,
      3: 3,
      
   }
  */

  class MinHeap {
    constructor() {
      this.heap = [];
    }

    add(val) {
      this.heap.push(val);
      this.heap.sort((a, b) => b[0] - a[0]);
    }

    popTop() {
      return this.heap.pop();
    }

    size() {
      return this.heap.length;
    }

    peek() {
      return this.heap.at(-1);
    }

    toArray() {
      return this.heap;
    }
  }

  for (const num of nums) {
    // counter[num] = (counter[num] || 0) + 1
    counter.set(num, (counter.get(num) || 0) + 1);
  }

  const heap = new MinHeap();

  for (const [val, freq] of counter.entries()) {
    if (heap.size() < k) {
      heap.add([freq, val]);
    } else {
      if (heap.peek()[0] < freq) {
        heap.popTop();
        heap.add([freq, val]);
      }
    }
  }

  /*
      [2,2]
  [3,1]
  
  
  */

  return heap.toArray().map(([freq, val]) => val);
};
