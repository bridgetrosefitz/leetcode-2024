/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function (events) {
  // sort events by start day
  // res variable
  // currDay variable (set to events[0][0])
  // initialize min heap (min based on end date)
  // iterate over events from currDay until events[i][0] > currDay
  // add events[i] to min heap
  // remove any event from heap which has end date less than currDay
  // remove min event from heap, and increment res
  // if heap is empty, increment curr day (or handle some other way)
};
