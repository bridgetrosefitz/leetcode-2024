/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

class MinHeap {
  constructor() {
    this.heap = [];
  }

  add(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  popTop() {
    if (this.size() === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  bubbleUp() {
    let i = this.heap.length - 1;
    while (i > 0) {
      let p = Math.floor((i - 1) / 2);
      if (this.heap[i] >= this.heap[p]) break;
      [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
      i = p;
    }
  }

  bubbleDown() {
    let i = 0;
    const n = this.heap.length;
    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let smallest = i;

      if (left < n && this.heap[left] < this.heap[smallest]) smallest = left;
      if (right < n && this.heap[right] < this.heap[smallest]) smallest = right;

      if (smallest === i) break;
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
  }
}
var findKthLargest = function (nums, k) {
  /*
        [3,2,1,5,6,4], 2 >> 5
                   ^
         5
         6

        [3,2,3,1,2,4,5,5,6], k = 4
                         ^
         
         4
         5
         5
         6   
         
        [3,3], 2 >> 3
        []
        []
        [1]

        // iterate left to right
        // If heap is less than k, just add the number to heap
        // else, if el is greater than num at top of min heap, pop and add
        // return number at top of heap

        time: nlogk
        space: k
    
    */

  const minHeap = new MinHeap();

  for (let i = 0; i < nums.length; i++) {
    if (minHeap.size() < k) {
      minHeap.add(nums[i]);
    } else {
      if (nums[i] > minHeap.peek()) {
        minHeap.popTop();
        minHeap.add(nums[i]);
      }
    }
  }

  return minHeap.peek();
};
