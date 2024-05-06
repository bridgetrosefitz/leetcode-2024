// Function signature: 
function dfsIterative(vertex, graph) {
  const visited = new Set()
  const stack = []
  stack.push(vertex)
  visited.add(vertex)

  while(stack.length) {
    const vertex = stack.pop()
    console.log(vertex)
    graph.list[vertex].forEach(neighbor => {
      if(!visited.has(neighbor)) {
        stack.push(neighbor)
        visited.add(neighbor)
      }

    })
  }
}


Pseudocode:
// Initialize a set for tracking visited vertices
// Initialize a stack for tracking traversal
// Add the start vertex to visited
// Push the the start vertex to the stack
// While the stack is not empty
//   Pop  a vertex from the stack
//   For each neighbor of the vertex
//     If neighbor has not been visited
//       Add neighbor to visited
//       Push neighbor to the stack

// Test Data:
// from slide
const graph = { 
  0: [1, 3, 6],
  1: [4, 5],
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

