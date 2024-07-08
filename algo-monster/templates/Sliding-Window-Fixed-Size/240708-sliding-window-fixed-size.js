function fixedSize(input, windowSize) {
  let max = -Infinity;
  let curr = 0;

  for (let i = 0; i < windowSize; i++) {
    curr += input[i];
  }

  max = Math.max(max, curr);

  for (let right = windowSize; right < input.length; right++) {
    const left = right - windowSize;
    curr -= input[left];
    curr += input[right];
    max = Math.max(max, curr);
  }

  return max;
}
