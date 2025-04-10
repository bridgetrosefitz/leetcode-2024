function flexibleShortest(arr, target) {
  let total = 0;
  let min = arr.length;
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    total += arr[right];

    // if the total is valid, optimize - make that window smaller!!
    while (windowSum >= target) {
      min = Math.min(min, right - left + 1);
      total = total - arr[left];
      left++;
    }
  }

  return min;
}
