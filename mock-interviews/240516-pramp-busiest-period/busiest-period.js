function findBusiestPeriod(data) {
  let maxNumber = 0;
  let maxTimestamp = 0;
  let pointer = 0;
  let runningTotal = 0;

  while (pointer < data.length) {
    const [timestamp, numberOfPeople, direction] = data[pointer];
    if (direction === 0) {
      runningTotal -= numberOfPeople;
    } else {
      runningTotal += numberOfPeople;
    }

    if (pointer === data.length - 1 || timestamp !== data[pointer + 1][0]) {
      if (runningTotal > maxNumber) {
        maxNumber = runningTotal;
        maxTimestamp = data[pointer][0];
      }
    }

    pointer++;
  }

  return maxTimestamp;
}
