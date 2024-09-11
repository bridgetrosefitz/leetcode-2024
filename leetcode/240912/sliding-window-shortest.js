function slidingWindowShortest(arr, target) {
  let windowSum = 0;
  let min = arr.length;
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    windowSum = windowSum + arr[right];

    while (windowSum >= target) {
      // condition here is the VALID condition, so optimize
      min = Math.min(min, right - left + 1);
      windowSum = windowSum - arr[left];
      left++;
    }
  }

  return min;
}
