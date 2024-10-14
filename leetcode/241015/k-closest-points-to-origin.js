/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  function compareDistance(pointA, pointB) {
    const distanceA = pointA[0] ** 2 + pointA[1] ** 2;
    const distanceB = pointB[0] ** 2 + pointB[1] ** 2;
    return distanceA - distanceB;
  }

  const sortedPoints = points.sort(compareDistance);
  return sortedPoints.slice(0, k);
};
