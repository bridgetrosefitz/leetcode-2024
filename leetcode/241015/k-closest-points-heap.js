var kClosest = function (points, k) {
  const minHeap = [];
  for (const [x, y] of points) {
    const dist = x ** 2 + y ** 2;
    minHeap.push([dist, x, y]);
  }

  minHeap.heapify(); // this is nlog(n)

  res = [];

  while (k > 0) {
    const [dist, x, y] = minHeap.pop(); //extractMin ; every time you do this, the heap is rebalancing in log(n) time
    res.push([x, y]);
    k -= 1;
  }

  return res;
};
