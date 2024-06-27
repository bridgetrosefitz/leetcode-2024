var validPath = function (n, edges, source, destination) {
  if (n === 1) return true;

  const stack = new Set([source]);
  let flag = true;
  while (flag) {
    flag = false;
    for (let i = 0; i < edges.length; i++) {
      if (stack.has(edges[i][0]) !== stack.has(edges[i][1])) {
        stack.add(edges[i][1]);
        stack.add(edges[i][0]);
        flag = true;
      }

      if (stack.has(destination)) return true;
    }
  }

  return false;
};
