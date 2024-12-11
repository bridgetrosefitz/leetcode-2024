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

function topKFrequent(nums, k) {
  const minHeap = new Heap();

  const heapRefs = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (heapRefs.hasOwnProperty(num)) {
      heapRefs[num][1] = heapRefs[num][1] + 1;
    } else {
      heapRefs[num] = [num, 1];
    }

    // if number of els in heap is less than k, just add it

    // else, if val is larger than frequency at top of heap, pop it and add

    if (heap.getSize() > k) {
      if (heapRefs[num][1] < minHeap.peek()[1]) {
        continue;
      } else {
        minHeap.popTop();
      }
    }
    minHeap.add([heapRefs[num]]);
  }

  const res = [];
  for (let i = 0; i < k; i++) {
    res.push(minHeap.popTop()[0]);
  }

  return res.map(num => parseInt(num));
}
