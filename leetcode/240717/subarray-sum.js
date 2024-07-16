function subarraySumTotal(arr, target) {
  let counter = 0;
  const prefixSums = [];
  let currSum = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    currSum += num;

    if (currSum === target) counter += 1;

    prefixSums.push(currSum);
  }

  const complements = new Set();

  for (let i = 0; i < prefixSums.length; i++) {
    const sum = prefixSums[i];
    const complement = sum + target;
    if (complements.has(sum)) {
      counter += 1;
    } else if (sum === target) {
      counter += 1;
    } else {
      complements.add(sum);
    }
  }

  return counter;
}
