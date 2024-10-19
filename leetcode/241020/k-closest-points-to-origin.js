/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  // closest points are those with the smallest value of (x^2 + y^2)
  // process each point
  // calculate value of sum squares
  // place the value on a max heap (so we can remove the largest vals in O1 and be left with k smallest vals)
  // return array of all values remaining in heap

  // in JS, implement max heap with array sorted desc

  // return res array (filled with top k els)

  points.forEach(point => {
    const xSquared = point[0] ** 2;
    const ySquared = point[1] ** 2;
    point.push(xSquared + ySquared);
  });

  // [1,2], we want a neg number if 1 is greater than 2
  points.sort((a, b) => (a[2] > b[2] ? -1 : 1));

  return points
    .slice(points.length - k, points.length)
    .map(point => point.slice(0, 2));
};
