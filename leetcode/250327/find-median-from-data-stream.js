var MedianFinder = function () {
  // Initialize minHeap and maxHeap
  this.largeNumbers = new MinPriorityQueue();
  this.smallNumbers = new MaxPriorityQueue();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  // [1,2]
  // [1,2,3]
  // when you insert, have it be ordered in a good time complexity
  // > HEAP; how do we find the mid point

  // Keep diff between heap size <= 0

  // Check which heap the new number should go in
  /** 
        SMALL NUMBERS
        5.     1.       5
       1               1

        LARGE NUMBERS
       6.      5        7
              6        9
       >4.    >4        >7

        */

  // smaller or equal to max of small numbers > put it on the small pile
  // or not > put it on the big pile
  // rearrange if size diff > 1

  if (num <= this.smallNumbers.front()) {
    this.smallNumbers.enqueue(num);
  } else {
    this.largeNumbers.enqueue(num);
  }

  if (this.smallNumbers.size() - this.largeNumbers.size() > 1) {
    const numberToTransfer = this.smallNumbers.dequeue();
    this.largeNumbers.enqueue(numberToTransfer);
  } else if (this.largeNumbers.size() - this.smallNumbers.size() > 1) {
    const numberToTransfer = this.largeNumbers.dequeue();
    this.smallNumbers.enqueue(numberToTransfer);
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  // if small is bigger than big, return top of small
  // else if big is bigger than small, return top of big
  // else return mid of two top numbers

  if (this.smallNumbers.size() > this.largeNumbers.size()) {
    return this.smallNumbers.front();
  } else if (this.largeNumbers.size() > this.smallNumbers.size()) {
    return this.largeNumbers.front();
  } else {
    return (this.smallNumbers.front() + this.largeNumbers.front()) / 2;
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
