function findBusiestPeriod(data) {
  let count = 0;
  let maxCount = 0;
  let maxPeriodTime = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i][2] == 1) {
      count += data[i][1];
    } else {
      count -= data[i][1];
    }

    // don't update max if we have further activity at same timestamp
    if (i < n - 1 && data[i][0] === data[i + 1][0]) {
      continue;
    }

    if (count > maxCount) {
      maxCount = count;
      maxPeriodTime = data[i][0];
    }
  }
}
