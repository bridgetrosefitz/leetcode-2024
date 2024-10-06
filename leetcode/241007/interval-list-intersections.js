/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  const firstLength = firstList.length;
  const secondLength = secondList.length;
  const intersections = [];

  let firstIndex = 0;
  let secondIndex = 0;

  while (firstIndex < firstLength && secondIndex < secondLength) {
    const start = Math.max(
      firstList[firstIndex][0],
      secondList[secondIndex][0]
    );
    const end = Math.min(firstList[firstIndex][1], secondList[secondIndex][1]);

    if (start <= end) {
      intersections.push([start, end]);
    }

    if (firstList[firstIndex][1] < secondList[secondIndex][1]) {
      firstIndex++;
    } else {
      secondIndex++;
    }
  }
  return intersections;
};
