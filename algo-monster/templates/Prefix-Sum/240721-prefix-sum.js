function prefixSumArray(arr) {
  const prefixSum = [];
  let curr = 0;
  for (const num of arr) {
    curr += num;
    prefixSum.push(curr);
  }

  return prefixSum;
}
