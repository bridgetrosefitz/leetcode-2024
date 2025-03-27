class MinHeap {
  constructor() {
    this.heap = [];
  }

  add(val) {
    this.heap.push(val);
    this.heap.sort((a, b) => b - a);
  }

  popTop() {
    return this.heap.pop();
  }

  balance() {
    this.heap.sort((a, b) => b - a);
  }

  peek() {
    return this.heap.at(-1);
  }

  getSize() {
    return this.heap.length;
  }
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  add(val) {
    this.heap.push(val);
    this.heap.sort((a, b) => a - b);
  }

  popTop() {
    return this.heap.pop();
  }

  balance() {
    this.heap.sort((a, b) => a - b);
  }

  peek() {
    return this.heap.at(-1);
  }

  getSize() {
    return this.heap.length;
  }
}

class MedianFinder {
  constructor() {
    this.biggies = new MinHeap();
    this.smalls = new MaxHeap();
  }
}

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  // put it on the correct heap

  if (num >= this.biggies.peek()) {
    if (this.biggies.getSize() > this.smalls.getSize()) {
      const temp = this.biggies.popTop();
      this.smalls.add(temp);
    }
    this.biggies.add(num);
  } else if (num <= this.smalls.peek()) {
    if (this.smalls.getSize() > this.biggies.getSize()) {
      const temp = this.smalls.popTop();
      this.biggies.add(temp);
    }
    this.smalls.add(num);
  } else {
    if (this.biggies.getSize() > this.smalls.getSize()) {
      this.smalls.add(num);
    } else {
      this.biggies.add(num); // adding to bigs by default if heaps are same size
    }
  }
};

/**
 * @return {number}
 12,2,1

 B
 2
 3

 S
 1

 */
MedianFinder.prototype.findMedian = function () {
  // depending on length of nums, calc median
  if (this.smalls.getSize() > this.biggies.getSize()) {
    return this.smalls.peek();
  } else if (this.smalls.getSize() < this.biggies.getSize()) {
    return this.biggies.peek();
  } else {
    return (this.biggies.peek() + this.smalls.peek()) / 2;
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
