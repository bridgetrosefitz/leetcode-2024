/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  // min 1, max 10

  // binary search between min and max

  // test if possible within days at given capacity

  // time complexity - nlogn
  // space - constant

  function canShipAtCapacity(capacity) {
    // 32
    // [1,2,3,4,5,6,7,8,9,10], days 5
    //   ^
    // fill up while loaded is less than capacity
    // increment days

    let currLoad = 0; // 1, 3, 6, 10, 15, 21, 28, 36
    let daysUsed = 1;
    for (const weight of weights) {
      if (currLoad + weight > capacity) {
        daysUsed++;
        currLoad = weight;
      } else {
        currLoad += weight;
      }

      if (daysUsed > days) {
        return false;
      }
    }

    return true;
  }

  // [1,2,3,4,5,6,7,8,9,10], days 5
  let smallest = Math.max(...weights); // 10
  let largest = weights.reduce((acc, curr) => acc + curr, 0); // 55
  let minCapacity = largest;

  while (smallest <= largest) {
    const mid = Math.floor((largest - smallest) / 2 + smallest);

    const canShip = canShipAtCapacity(mid);
    if (canShip) {
      minCapacity = mid;
      // test smaller
      largest = mid - 1;
    } else {
      smallest = mid + 1;
    }
  }

  return minCapacity;
};
