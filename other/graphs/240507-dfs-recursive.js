// function dfs(vertex, graph, explored = new Set()) {
//   explored.add(vertex);

//   graph.adjacencyList[vertex].forEach(neighbor => {
//     if (!explored.has(neighbor)) {
//       dfs(neighbor, graph, explored);
//     }
//   });
// }

function dfs(vertex, graph, explored = new Set()) {
  explored.add(vertex);

  graph.adjacencyList[vertex].forEach(neighbor => {
    if (!explored.has(neighbor)) {
      dfs(neighbor, graph, explored);
    }
  });
}
