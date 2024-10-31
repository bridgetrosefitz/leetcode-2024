let noFurtherOverlap = false;
const res = [];
let startMerged = newInterval[0];
let endMerged = newInterval[1];

// ---    ----    ----  ---
//          ----
//       ----
//       -----------

// for each interval

// if we are before any overlap with new // DEFINE OVERLAP -- end of curr is less than start of new
// push curr into res

// if there is overlap with new // DEFINE OVERLAP -- max of starts <= min of ends
// startMerged = min of startMerged and curr start
// endMerged = max of endMerged and curr end

// if we are after any overlap with new // DEFINE OVERLAP -- start of curr is greater than end of new
// if noFurtherOverlap is false
// push [startMerged, endMerged] into res
// set noFurtherOverlap to true
// else
// push curr into res

for (const curr of intervals) {
  if (curr[1] < newInterval[0]) {
    res.push(curr);
  }

  if (Math.max(curr[0], newInterval[0]) < Math.min(curr[1], newInterval[1])) {
    startMerged = Math.min(startMerged, curr[0]);
    endMerged = Math.max(endMerged, curr[1]);
  }

  if (curr[0] > newInterval[1]) {
    console.log("yo", curr);
    console.log("noFurtherOverlap", noFurtherOverlap);
    if (!noFurtherOverlap) {
      res.push([startMerged, endMerged]);
      res.push(curr);
      noFurtherOverlap = true;
    } else {
      console.log("hello");
      res.push(curr);
    }
  }
}

return res;
