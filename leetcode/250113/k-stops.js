/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  /*
    
    currentCheapest = 700

    adj = {
        0: [1]
        1: [2,3],
        2: [0,3],
        3: []
    }

    q = [[3,700],[3,400]]


    */
  // currentCheapest
  // make adj list
  // bfs
  // process all nodes I can get to at each "level", while stops is < k
  // in q, store nodes with price it has taken to reach that node
  // if current node is destination, update currentCheapest

  let currentCheapest = {};
  let stops = 0;
  const adj = {};

  for (let i = 0; i <= n; i++) {
    adj[i] = [];
    currentCheapest[i] = Infinity;
  }

  for (const [start, end, price] of flights) {
    adj[start].push([end, price]);
  }

  // k = 2
  // stops = 2

  const q = [[src, 0]]; // []

  while (q.length && stops <= k + 1) {
    const numberOfReachableStops = q.length;

    for (let i = 0; i < numberOfReachableStops; i++) {
      const [currEnd, currTotal] = q.shift();

      currentCheapest[currEnd] = Math.min(currentCheapest[currEnd], currTotal);

      const nextStops = adj[currEnd];

      for (const [nextStop, nextStopPrice] of nextStops) {
        const nextTotalCost = nextStopPrice + currTotal;
        const prevMinCostToNode = currentCheapest[nextStop];
        if (nextTotalCost < prevMinCostToNode) {
          q.push([nextStop, nextTotalCost]);
        }
      }
    }
    stops++;
  }

  return currentCheapest[dst] === Infinity ? -1 : currentCheapest[dst];
};
