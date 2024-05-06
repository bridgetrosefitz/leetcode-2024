// function dfsIterative(vertex, graph) {
//   const explored = new Set();
//   const stack = [];
//   stack.push(vertex);
//   explored.add(vertex);

//   while (stack.length) {
//     const visited = stack.pop();
//     // do work

//     graph.adjacencyList[visited].forEach(neighbor => {
//       if (!explored.has(neighbor)) {
//         stack.push(neighbor);
//         explored.add(neighbor);
//       }
//     });
//   }
// }

function dfsIterative(source, graph) {
  const explored = new Set();
  const stack = [];
  stack.push(source);
  explored.add(source);

  while (stack.length) {
    const curr = stack.pop();
    graph.adjacencyList[curr].forEach(neighbor => {
      if (!explored.has(neighbor)) {
        stack.push(neighbor);
        explored.add(neighbor);
      }
    });
  }
}
