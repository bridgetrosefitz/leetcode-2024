/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  // FIND THE MAXIMUM NUMBER OF OVERLAPPING MEETINGS AT ANY ONE TIME

  // overlap = 1, 4
  // ----
  //  -----
  //  --
  //.     -

  // [[1,6],[0,4],[1,3]]

  // sort desc by end time, then desc by start time
  // [[0,30],[15,20],[5,10]]
  // ---------------------------------
  //                 -----
  //      ------

  let prevStart = intervals[0][0]; // 0
  let maxRooms = 1; // 2
  let currRooms = 1; // 2

  // iterate from second interval to end
  //
  // if there is overlap (if curr interval ends after prevStart)
  // increment currRooms
  // update maxRooms to max of maxRooms and currRooms
  // else
  // currRooms = 1
  // update prevStart to min of currStart and prevStart

  //       -----
  //     ----
  //  --

  //     ----
  //    -----
  //  --

  //          -----
  //     ----
  //  --

  //  -----
  // ----
  //  --

  // return maxRooms
};
