function squareRoot(n) {
  let left = 0;
  let right = n;
  let currentClosest = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (mid ** 2 >= n) {
      currentClosest = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  if (currentClosest * currentClosest !== n) return currentClosest - 1;
  return currentClosest;
}

function squareRoot2(n) {
  let left = 0;
  let right = n;
  let currentClosest = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (mid ** 2 <= n) {
      currentClosest = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return currentClosest;
}
