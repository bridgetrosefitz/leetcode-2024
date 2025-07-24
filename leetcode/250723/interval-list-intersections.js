/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  // pick one to start
  // if overlap, add to results (Math.max of start times, Math.min of end times)
  // if NO overlap, do nothing
  // move pointer of the one which ends earlier

  let p1 = 0;
  let p2 = 0;
  const res = [];

  while (p1 < firstList.length && p2 < secondList.length) {
    // overlap if max of starts is less than min of end
    const maxStart = Math.max(firstList[p1][0], secondList[p2][0]);
    const minEnd = Math.min(firstList[p1][1], secondList[p2][1]);
    const isOverlap = maxStart <= minEnd;

    if (isOverlap) {
      res.push([maxStart, minEnd]);
    }

    if (firstList[p1][1] < secondList[p2][1]) {
      p1++;
    } else {
      p2++;
    }
  }

  return res;
};
