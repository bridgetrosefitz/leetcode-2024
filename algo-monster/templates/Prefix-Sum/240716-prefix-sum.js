// THIS ONE CONTAINS A ZERO

function generatePrefixSum(arr) {
  const prefixSum = [0];

  for (const num of arr) {
    prefixSum.push(prefixSum[-1] + num);
  }

  return prefixSum;
}

// THIS ONE DOES NOT CONTAIN A ZERO
function prefixSumArray(arr) {
  let prefixSum = [];
  let currentSum = 0;
  for (let num of arr) {
    currentSum += num;
    prefixSum.push(currentSum);
  }
  return prefixSum;
}
