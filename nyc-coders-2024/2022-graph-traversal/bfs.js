

function bfs(vertex, graph) {
  const visited = new Set()
  const q = []
  visited.add(vertex)
  q.push(vertex)

  while(q.length) {
    const nextVertex = q.shift()
    console.log(nextVertex)
    graph.list[nextVertex].forEach(neighbor => {
      if(!visited.has(neighbor)) {
        q.push(neighbor)
        visited.add(neighbor)
      }
    })
  }

}

// Use an array instead of a queue in JavaScript since there’s no built-in queue class.
// const queue = [];
// push -> enqueue (O(1))
// shift -> dequeue (O(n))

Pseudocode:
// Initialize a set for tracking visited vertices
// Initialize a queue for tracking traversal
// Add the start vertex to visited
// Enqueue the start vertex to the queue
// While the queue is not empty
//   Dequeue a vertex
//   Log the value of the vertex
//   For each neighbor of the vertex
//     If neighbor has not been visited
//       Add neighbor to visited
//       Enqueue neighbor

// Test Data:
// from slide
const graph = { 
  0: [1, 3, 6],
  1: [0, 4, 5],
  2: [5, 7],
  3: [0, 5],
  4: [1, 6],
  5: [1, 2, 3],
  6: [0, 4],
  7: [2]
}

const graph2 = {
  0: [1, 2, 3],
  1: [0, 2],
  2: [0, 4],
  3: [0],
  4: [2]
}
