function feasible(x) {
  return x % 2 === 0;
}

function binarySearch(list, target) {
  let left = 0;
  let right = list.length - 1;
  let firstViable = -1;

  while (left <= right) {
    if (feasible(mid)) {
      firstViable = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return firstViable;
}
