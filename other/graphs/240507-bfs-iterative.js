// function bfs(vertex, graph) {
//   const visited = new Set();
//   const q = [];
//   visited.add(vertex);
//   q.push(vertex);

//   while (q.length) {
//     const visitedVertex = q.shift();
//     // do some work

//     graph.adjacencyList[visitedVertex].forEach(neighbor => {
//       if (!visited.has(neighbor)) {
//         q.push(neighbor);
//         visited.add(neighbor);
//       }
//     });
//   }
// }

function bfs(vertex, graph) {
  const q = [];
  const visited = new Set();
  q.push(vertex);
  visited.add(vertex);

  while (q.length) {
    const curr = q.shift();
    // do work
    graph.adjacencyList[curr].forEach(neighbor => {
      if (!visited.has(neighbor)) {
        q.push(neighbor);
        visited.add(neighbor);
      }
    });
  }
}
