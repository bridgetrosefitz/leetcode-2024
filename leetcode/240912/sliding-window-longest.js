function slidingWindowLongest(arr, target) {
  let total = 0;
  let max = 0;
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    total += arr[right];

    // if we have made our ans invalid, go in the loop to make it valid again

    while (total > target) {
      // condition here is the INVALID condition, so shorten until valid
      total -= arr[left];
      left++;
    }

    // once we've made it here, we know we have a valid answer

    max = Math.max(max, right - left + 1);
  }

  return max;
}
