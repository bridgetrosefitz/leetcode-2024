/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

class MinHeap {
  constructor() {
    this.heap = [];
  }

  add(num) {
    this.heap.push(num);
    this.heap.sort((a, b) => b[1] - a[1]);
    console.log(this.heap);
  }

  popTop() {
    return this.heap.pop();
  }

  peek() {
    return this.heap.at(-1);
  }

  size() {
    return this.heap.length;
  }

  toArray() {
    return this.heap;
  }
}

var topKFrequent = function (nums, k) {
  // count object
  // heap

  const count = {};
  // count = {1: 3, 2: 2, 3: 1}
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    count[num] = (count[num] || 0) + 1;
  }

  const minHeap = new MinHeap();

  /*
    
            [2,2]
        [1,3]

    */

  for (const [num, freq] of Object.entries(count)) {
    if (minHeap.size() < k) {
      minHeap.add([num, freq]);
    } else {
      if (freq > minHeap.peek()[1]) {
        minHeap.popTop();
        minHeap.add([num, freq]);
      }
    }
  }

  return minHeap.toArray().map(el => parseInt(el[0]));
};
