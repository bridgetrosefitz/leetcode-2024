function sliding(input, target) {
  let total = 0;
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < input.length; right++) {
    total += input[right];
    while (total > target) {
      total = total - nums[left];
      left++;
    }

    maxLength = Math.max(length, right - left + 1);
  }

  return length;
}
