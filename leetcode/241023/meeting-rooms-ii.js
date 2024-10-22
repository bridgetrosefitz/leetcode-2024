/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  // new array to store starts and ends
  // maxRooms counter
  // currRooms counter
  // iterate over intervals, pulling out start times and creating an object for each start time
  // same as above, but for end
  // sort newArray asc by time, then by end before start
  // iterate over newArray
  // if item is exit, decrement currRooms
  // if item is entry, increment currRooms
  // update max

  // return maxRooms

  const startsAndEnds = [];
  let maxRooms = 0;
  let currRooms = 0;

  intervals.forEach(([start, end]) => {
    startsAndEnds.push({ time: start, isStart: true });
    startsAndEnds.push({ time: end, isStart: false });
  });

  startsAndEnds.sort(
    (a, b) => a.time - b.time || (b.isStart === false ? 1 : -1)
  );

  startsAndEnds.forEach(item => {
    if (item.isStart) currRooms++;
    if (!item.isStart) currRooms--;
    maxRooms = Math.max(maxRooms, currRooms);
  });

  // both are isStart = 2
  // both are isEnd = 0
  // one of each = 1

  // swap (1) if b is false

  return maxRooms;
};
