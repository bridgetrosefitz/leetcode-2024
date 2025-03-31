var MedianFinder = function () {
  this.bigNumbers = new MinPriorityQueue();
  this.smallNumbers = new MaxPriorityQueue();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  console.log("num to add", num);
  // add to either biggerNums or smallerNums
  // if val is greater than or equal to smallest in smallNumbers
  // if size of max heap is greater than size of min heap
  // transfer top of smallNumbers to smallNumbers
  // add value to smallNumbers
  // else
  // if size of smallNumbers is greater than size of max heap
  // transfer top of smallNumbers to smallNumbers
  // add value to smallNumbers
  if (this.bigNumbers.size() === 0) {
    this.bigNumbers.enqueue(num);
    return null;
  }

  if (num > this.bigNumbers.front().element) {
    if (this.bigNumbers.size() > this.smallNumbers.size()) {
      const itemToTransfer = this.bigNumbers.dequeue().element;
      this.smallNumbers.enqueue(itemToTransfer);
    }

    this.bigNumbers.enqueue(num);
  } else {
    if (this.smallNumbers.size() > this.bigNumbers.size()) {
      const itemToTransfer = this.smallNumbers.dequeue().element;
      this.bigNumbers.enqueue(itemToTransfer);
    }
  }

  console.log("this.bigNumbers.front()", this.bigNumbers.front());
  console.log("this.smallNumbers.front()", this.smallNumbers.front());

  /**
    5

    2          3

    2           3
            4

*/
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  // return number at top of heap with larger size
  // else, if same size, return middle of those two numbers
  let returnVal;
  if (this.smallNumbers.size() === this.bigNumbers.size()) {
    returnVal =
      (this.smallNumbers.front().element + this.bigNumbers.front().element) / 2;
  } else if (this.smallNumbers.size() > this.bigNumbers.size()) {
    returnVal = this.smallNumbers.front().element;
  } else {
    returnVal = this.smallNumbers.front().element;
  }
  console.log("median", returnVal);
  return returnVal;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
