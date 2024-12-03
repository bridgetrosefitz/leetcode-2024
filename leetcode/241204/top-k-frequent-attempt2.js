/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

class Heap {
  constructor() {
    this.heap = [];
  }

  add(val) {
    this.heap.push(val);
    this.heap.sort((a, b) => b[1] - a[1]);
  }

  popTop() {
    return this.heap.pop();
  }

  balance() {
    this.heap.sort((a, b) => b[1] - a[1]);
  }

  peek() {
    return this.heap.at(-1);
  }

  getSize() {
    return this.heap.length;
  }
}

var topKFrequent = function (nums, k) {
  const minHeap = new Heap();

  const counts = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const isNewVal = !counts.hasOwnProperty(num);
    if (isNewVal) {
      counts[num] = [num, 1];
      if (minHeap.getSize() >= k) {
        if (counts[num][1] > minHeap.peek()[1]) {
          minHeap.popTop();
          minHeap.add(counts[num]);
        }
      } else {
        minHeap.add(counts[num]);
      }
    } else {
      counts[num][1] = counts[num][1] + 1;
      minHeap.balance();
    }
  }

  const res = [];

  for (let i = 0; i < k; i++) {
    res.push(minHeap.popTop()[0]);
  }

  return res;
};
