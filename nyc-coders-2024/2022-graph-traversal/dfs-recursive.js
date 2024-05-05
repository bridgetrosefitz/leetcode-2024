function dfsIterative(vertex, graph, visited = new Set()) {
  visited.add(vertex);

  for (const neighbor of graph[vertex]) {
    if (!visited.has(neighbor)) {
      dfsIterative(neighbor, graph, visited);
    }
  }
}
