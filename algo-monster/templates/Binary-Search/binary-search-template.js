function feasible(x) {
  return x % 2 === 0;
}

function binarySearch(list, target) {
  let left = 0;
  let right = list.length - 1;
  let firstTrueIndex = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (feasible(mid)) {
      firstTrueIndex = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return firstTrueIndex;
}
