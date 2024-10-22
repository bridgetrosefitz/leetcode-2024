/*
MaxHeap {
  add
  peek // looks at the top value
  popTop // looks at and removes the top value
}
*/

class Heap {
  constructor() {
    this.heap = [];
  }

  add(val) {
    this.heap.push();
    this.heap.sort((a, b) => a - b); // would be heapify
  }

  popTop() {
    this.heap.pop();
  }

  get size() {
    return this.heap.size;
  }

  peek() {
    return this.heap.at(-1);
  }
}

// not a real heap but has same api; would import a heap from library
class MaxHeap {
  constructor() {
    this.heap = [];
    this.size = 0;
  }

  add(point) {
    this.heap.push(point);
    this.heap.sort((a, b) => a[2] - b[2]);
    this.size++;
  }

  pop() {
    if (this.size === 0) return null;
    this.size--;
    this.heap.pop();
  }

  peek() {
    if (this.size === 0) return null;
    return this.heap[this.size - 1];
  }

  toArray() {
    return [...this.heap];
  }
}

var kClosest = function (points, k) {
  const maxHeap = new MaxHeap();

  // for each point
  // push distance into el

  // for each point
  // if heap.size is less than k
  // add el to heap
  // else
  // if el is smaller than max in heap
  // pop largest el from heap
  // add el to heap

  // return heap

  const pointsWithDistance = [...points];

  pointsWithDistance.forEach(point => {
    const dist = point[0] ** 2 + point[1] ** 2;

    point.push(dist);
  });

  pointsWithDistance.forEach(point => {
    if (maxHeap.size < k) {
      maxHeap.add(point);
    } else {
      if (point[2] < maxHeap.peek()[2]) {
        maxHeap.pop();
        maxHeap.add(point);
      }
    }
  });

  return maxHeap.toArray().map(([x, y, dist]) => [x, y]);
};
