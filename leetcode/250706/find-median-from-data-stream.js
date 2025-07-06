var MedianFinder = function () {
  // max heap for small numbers
  this.smallNumbers = new MaxPriorityQueue();
  this.largeNumbers = new MinPriorityQueue();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  // if number is equal or smaller than top of small pile
  // add to small
  // else
  // add to large

  if (num <= this.smallNumbers.front()) {
    this.smallNumbers.enqueue(num);
  } else {
    this.largeNumbers.enqueue(num);
  }

  const sizeDiff = this.smallNumbers.size() - this.largeNumbers.size();

  // small pile to large pile
  if (sizeDiff > 1) {
    const numberToTransfer = this.smallNumbers.dequeue();
    this.largeNumbers.enqueue(numberToTransfer);
    // large pile to small pile
  } else if (sizeDiff < -1) {
    const numberToTransfer = this.largeNumbers.dequeue();
    this.smallNumbers.enqueue(numberToTransfer);
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const sizeDiff = this.smallNumbers.size() - this.largeNumbers.size();

  if (sizeDiff > 0) {
    // small pile is bigger
    return this.smallNumbers.front();
  } else if (sizeDiff < 0) {
    return this.largeNumbers.front();
  } else {
    const small = this.smallNumbers.front();
    const large = this.largeNumbers.front();
    return (small + large) / 2;
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
