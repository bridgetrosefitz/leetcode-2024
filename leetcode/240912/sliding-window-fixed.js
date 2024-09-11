function fixedSize(arr, windowSize) {
  let max = -Infinity;
  let curr = 0;

  // set up first window
  for (let i = 0; i < windowSize; i++) {
    curr += arr[i];
  }
  max = Math.max(max, curr);

  // find best ans
  for (let right = windowSize; right < arr.length; right++) {
    const left = right - windowSize;
    curr -= arr[left];
    curr += arr[right];
    max = Math.max(max, curr);
  }

  return max;
}
