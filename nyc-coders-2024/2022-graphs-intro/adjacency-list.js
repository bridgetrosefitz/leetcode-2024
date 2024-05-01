// implement the AdjacencyList class for undirected, unweighted graphs

class AdjacencyList {
  constructor() {
    this.list = {};
  }

  addVertex(v) {
    // check if key already exists. If so, don't add it
    // add a new key to the adjacency list, with an empty array

    if (!this.list[v]) {
      this.list[v] = [];
    }
  }

  addEdge(v1, v2) {
    // check if node 1 and node 2 exist. If not, return error
    // add node 2 to node 1's key
    // add node 1 to node 2's key

    if (!this.list[v1] || !this.list[v2]) {
      throw new Error("One or both nodes do not exist");
    }
    this.list[v1].push(v2);
    this.list[v2].push(v1);
  }

  removeVertex(v) {
    while (this.list[v].length) {
      const neighbor = this.list[v].pop();
      this.removeEdge(v, neighbor);
    }

    delete this.list[v];
    // if (!this.list[v]) return true;

    // this.list[v].forEach(adjacency => {
    //   this.list[adjacency].filter(a => a !== v);
    // });

    // delete this.list[v];

    // return true;

    // if v doesn't exist in list, return true
    // go through every adjacency in v's key
    // filter list at adjacency to remove v
    // remove the key for v
    // return true
  }

  removeEdge(v1, v2) {
    // edge cases
    // remove v1 from list[v2]
    // remove v2 from list[v1]
    if (!this.list[v1] || !this.list[v2]) {
      throw new Error("One or both nodes do not exist");
    }
    thislist[v1].filter(adjacency => adjacency !== v2);
    thislist[v2].filter(adjacency => adjacency !== v1);
  }
}

const myGraph = new AdjacencyList();

// Example calls
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");

myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

console.log(myGraph.list);

// 0 --> 1 2
// 1 --> 3 2 0
// 2 --> 4 1 0
// 3 --> 1 4
// 4 --> 3 2 5
// 5 --> 4 6
// 6 --> 5
