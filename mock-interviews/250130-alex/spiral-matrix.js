/**
 *
 *Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.1:


input: array of ints (piles), int h (hours)
output: int k (speed of banana eating)

piles: [1, 1, 1]
h: 3
k: 1

piles: [1, 10, 5]
h: 3
k: 10

piles: [1, 10, 5]
h: 5
k: 5


binary search approach
l: 1
r: max(piles)

a function to test (T/F) if koko can eat ALL the bananas in h time given k speed


 * 
 */

const canKokoEatInH = (piles, h, k) => {
  let currH = 0;
  for (let i = 0; i < piles.length; i++) {
    let currEaten = 0;
    while (currEaten < piles[i]) {
      currEaten += k;
      currH++;
    }
  }
  return currH <= h;
};

const getKokoEatingSpeed = (piles, h) => {
  let l = 1;
  let r = Math.max(...piles);
  let lowest = r;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    const canEat = canKokoEatInH(piles, h, mid);
    if (canEat) {
      r = mid - 1;
      lowest = Math.min(lowest, mid);
    } else {
      l = mid + 1;
    }
  }

  return lowest;
};

// time: m * log(n)
// where n is the max of piles
// where m is length of piles
// space: O(1)

// k: 5
// piles: [1, 10, 5]
// h: 5
// l: 4
// r: 4
// mid: 5
// lowest: 5
