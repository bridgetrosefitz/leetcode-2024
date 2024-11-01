function insertInterval(intervals, newInterval) {
  let i = 0;
  const n = intervals.length;
  const res = [];
  for (; i < n && intervals[i][1] < newInterval[0]; i++) {
    res.push(intervals[i]);
  }
  for (; i < n && intervals[i][0] <= newInterval[1]; i++) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
  }
  res.push(newInterval);

  for (; i < n; i++) {
    res.push(intervals[i]);
  }
  return res;
}
