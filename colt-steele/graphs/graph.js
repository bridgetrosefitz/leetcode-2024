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

    this.adjacencyList[vertex1].filter(v => v !== v2);
    this.adjacencyList[vertex2].filter(v => v !== v1);
  }

  removeVertex(vertex) {
    for (v in this.adjacencyList) {
      v.filter(pair => pair !== vertex);
    }

    delete this.adjacencyList.vertex;
  }
}
