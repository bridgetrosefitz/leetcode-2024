function flexibleLongest(arr, target) {
  let total = 0;
  let max = 0;
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    total += arr[right];

    // if we have made our ans invalid, go in the loop to ensure we get a valid answer
    while (total > target) {
      total -= arr[left];
      left++;
    }

    // once we've made it past the above check,
    // we know we have a valid answer

    max = Math.max(max, right - left + 1);
  }
  return max;
}
