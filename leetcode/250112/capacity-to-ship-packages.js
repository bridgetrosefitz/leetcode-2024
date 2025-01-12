/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  let l = Math.max(...weights);
  let r = weights.reduce((acc, curr) => acc + curr, 0);
  let lowest = Infinity;

  const tryShip = capacity => {
    // returns how many days you need if you have a ship of x capacity
    let days = 1;
    let curr = 0;
    for (let i = 0; i < weights.length; i++) {
      if (curr + weights[i] > capacity) {
        days++;
        curr = weights[i];
      } else {
        curr += weights[i];
      }
    }
    return days;
  };

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    const daysRequired = tryShip(mid);

    if (daysRequired <= days) {
      lowest = Math.min(lowest, mid);
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return lowest;
};
