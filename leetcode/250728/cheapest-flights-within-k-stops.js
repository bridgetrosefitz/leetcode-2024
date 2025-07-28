/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  // build adj list
  // build minPrice
  let currStops = 0;
  const adj = {};
  const minPrice = {};

  for (let i = 0; i < n; i++) {
    adj[i] = [];
    minPrice[i] = Infinity;
  }

  for (const [from, to, price] of flights) {
    adj[from].push([to, price]);
  }

  const q = [[src, 0]];

  // bfs while we're less than k
  // enqueue if next price will be less than curr min for that node

  while (q.length && currStops <= k) {
    const numNextStops = q.length;
    for (let i = 0; i < numNextStops; i++) {
      const [currLocation, currPrice] = q.shift();
      // visit every destination you can from here
      for (const nextFlight of adj[currLocation]) {
        const [nextDest, price] = nextFlight;

        if (currPrice + price < minPrice[nextDest]) {
          minPrice[nextDest] = currPrice + price;
          q.push([nextDest, currPrice + price]);
        }
      }
    }
    currStops++;
  }

  return minPrice[dst] === Infinity ? -1 : minPrice[dst];
};
