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
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      res.push(vertex);

      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) return dfs(neighbor);
      });
    })(vertex);

    return result;
  }

  dfsIterative(vertex) {
    const res = [];
    const stack = [vertex];
    const visited = { vertex: true };
    const adjacencyList = this.adjacencyList;

    while (stack.length) {
      const curr = stack.pop();
      if (!visited[curr]) {
        visited[curr] = true;
        res.push(curr);
        adjacencyList[curr].forEach(neighbor => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            stack.push(neighbor);
          }
        });
      }
    }

    return res;
  }

  bfs(start) {
    const queue = [start];
    const res = [];
    const visited = { start: true };

    while (queue.length) {
      const curr = queue.shift();
      res.push(curr);

      // TO REVERSE THE ORDER: this.adjacencyList(curr).slice().reverse().forEach(neighbor => {

      this.adjacencyList(curr).forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return res;
  }
}
