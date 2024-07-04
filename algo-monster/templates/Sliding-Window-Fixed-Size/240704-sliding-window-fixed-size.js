function slidingWindow(input, windowSize) {
  let max = -Infinity;
  let curr = 0;

  for (let i = 0; i < windowSize; i++) {
    curr += input[i];
  }

  for (let right = windowSize; right < input.length; right++) {
    const left = right - windowSize;
    curr -= input[left];
    curr += input[right];
    max = Math.max(max, curr);
  }

  return ans;
}

// windowSize = 2

// L     R
// 0  1  2  3  4
// 10 9  8  7  6
