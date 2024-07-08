function flexibleLongest(arr, target) {
  let total = 0;
  let max = 0;
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    total += arr[right];

    while (total > target) {
      total -= arr[left];
      left++;
    }

    max = Math.max(max, right - left + 1);
  }
  return max;
}
