// Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

/*
Example 1:
Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2

Example 2:
Input: intervals = [[7,10],[2,4]]
Output: 1
*/

// ------
//  -
//    -

// 2

//  -
//    -
// ------

// -------
//  ----
//  ---------

// [[5,15],[15,20],[0,30]]
// when do we start needing some amount of rooms
// start when a meeting begins
// stop needing when a meeting ends
//I'm stuck on whether the same meeting is going
// is anything starting or ending at curr time?
// [{time: 4, isEntry: true}, {time: 4, isEntry: false}].forEach(x=>...)

// min 0
// max 30

// have array of all starts and ends, with a flag of whether it is start or end
// sort asc, by time and then by exit comes before entry
// iterate through all these times
// if the time is an end, decrement currRooms
// if the time is a start, increment
// update maxRooms

// return early

// maxRooms
// keep currEnd = 0 //10
// currRooms = 0

// if currInt starts before currEnd
// DO SOMETHING
// update currEnd to be currInt[1]

// {0: 1, 5: 0, 15: 0}
// [{start: 0, meetings: 1},{5},{15}]

// make a array of starts [0,5,15]
// make a array of ends [10,20,30]
