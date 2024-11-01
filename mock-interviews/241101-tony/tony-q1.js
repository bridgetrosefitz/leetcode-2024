// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }

// Test case format:

// For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

// An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

// The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

/**
 *input: Node
 *output: Node (copy)
 *
 * {
 *     val: 1,
 *     neighbors: [2,3]
 * }
 * 1 - 2
 * | /
 * 3
 * // COPY of above
 * {
 *     val: 1,
 *     neighbors: [2,3]
 * }
 *  {
 *     val: 2,
 *     neighbors: [1,3]
 * }
 *  {
 *     val: 3,
 *     neighbors: [1,2]
 * }
 * map = {
 *     originalNode: copyNode
 *     1: 1',
 *     2: 2',
 *     3: 3'
 * }
 * Time: O(N)
 * space: O(N)
 */
function cloneGraph(node) {
  if (!node) return;
  const map = new Map();

  const dfs = node => {
    // 1
    if (!node) return;
    if (map.has(node)) return;
    const copy = new Node(node.val, []);
    map.set(node, copy);
    for (let neighbor of node.neighbors) {
      dfs(neighbor);
    }
  };
  dfs(node); // create clone map
  const dfsMap = node => {
    // 1:[2,3]
    if (!node) return;
    for (const neighbor of node.neighbors) {
      // get clone of neighbor
      // push, neighbor clone into cloned neighbors
      map.get(node).neighbors.push(map.get(neighbor));
    }
  };
  dfsMap(node);
  return map.get(node);
}
