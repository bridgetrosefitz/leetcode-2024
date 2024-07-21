function subarraySum(arr, target) {
  const prefixSums = new Map([0, 0]);
  let curSum = 0;
  for (let i = 0; i < arr.length; i++) {
    curSum += arr[i];
    const complement = curSum - target;
    if (prefixSums.has(complement)) {
      return [prefixSums.get(complement), i + 1];
    }

    prefixSums.set(curSum, i + 1);
  }
}
