class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    this.adjacencyList[name] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    // const v1List = this.adjacencyList[vertex1];
    // v1List.splice(v1List.indexOf(vertex2), 1);
    // const v2List = this.adjacencyList[vertex2];
    // v2List.splice(v2List.indexOf(vertex1), 1);

    debugger;
    this.adjacencyList[vertex1].filter(v => v !== vertex2);
    this.adjacencyList[vertex2].filter(v => v !== vertex1);
  }

  removeVertex(vertex) {
    // for (v in this.adjacencyList) {
    //   v.filter(pair => pair !== vertex);
    // }

    while (this.adjacencyList[vertex].length) {
      const pair = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, pair);
    }
    delete this.adjacencyList.vertex;
  }

  dfsRecursive(vertex) {
    const res = [];
    const visited = {};
    const adjacencyList = this.adjacencyList(function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      res.push(vertex);

      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) return dfs(neighbor);
      });
    })(vertex);

    return result;
  }
}
