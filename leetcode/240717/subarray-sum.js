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

//// ALGOMONSTER SOLUTION \\\\

function subarraySumTotal(arr, target) {
  const prefixSums = new Map();
  prefixSums.set(0, 1); // since empty array's sum is 0
  let curSum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    curSum += arr[i];
    const complement = curSum - target;
    if (prefixSums.has(complement)) {
      count += prefixSums.get(complement);
    }
    if (prefixSums.has(curSum)) {
      prefixSums.set(curSum, prefixSums.get(curSum) + 1);
    } else {
      prefixSums.set(curSum, 1);
    }
  }
  return count;
}
