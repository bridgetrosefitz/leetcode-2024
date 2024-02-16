// Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

// Implement the MovingAverage class:

// MovingAverage(int size) Initializes the object with the size of the window size.
// double next(int val) Returns the moving average of the last size values of the stream.

// CLARIFICATIONS
// A stream - calling the function at different points in time

class MovingAverage {
  constructor(windowSize) {
    this.windowSize = windowSize;
    this.queue = [];
    this.currentSum = 0;
  }

  next(value) {
    // 1, 10, 3
    if (this.queue.length < this.windowSize) {
      this.queue.push(value);
      this.currentSum = this.currentSum + value;
      return value / this.queue.length;
    }
    const newSum = this.currentSum - this.queue.unshift() + value;
    const newAverage = newSum / queue.length;
  }
}

// Test
const movingAverage = new MovingAverage(3); // 3 is the size, return null
// the max denominator for calculating the moving average
// max number of past (and present) values included in the average
// the number of values the class needs to store
movingAverage.next(1); // return 1.0
movingAverage.next(10); // return 5.5
movingAverage.next(3); // return 4.66667 // 4.66667 * 3 - 1
movingAverage.next(5); // return 6.0
// We are gonna be making 10^30 calls to the next() method

// 1, 10, 3, 5

// usually interviewers are more than happy to let you use a suboptimal data structure if you acknowledge what the optimal data structure is. So we can just assume that popping from the front is O(1)

// make sure to call it a queue in the constructor
