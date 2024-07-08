// shortest while greater than a target
function flexibleShortest(arr, target) {
  let total = 0;
  let min = arr.length; // start at max window size
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    total += arr[right];

    // only go in here if valid + optimiiiize
    while (windowSum >= target) {
      min = Math.min(min, right - left + 1);
      total = total - arr[left];
      left++;
    }
  }

  return min;
}
