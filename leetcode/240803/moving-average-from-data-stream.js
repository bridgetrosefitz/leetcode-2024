/**
 * @param {number} size
 */
class MovingAverage {
  constructor(size) {
    this.size = size;
    this.queue = [];
    this.runningTotal = 0;
    this.count = 0;
  }

  next(val) {
    if (this.count < this.size) {
      this.count++;
    } else {
      this.runningTotal -= this.queue.pop();
    }

    this.queue.unshift(val);
    this.runningTotal += val;

    return this.runningTotal / this.count;
  }
}

/**
 * @param {number} val
 * @return {number}
 */

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
