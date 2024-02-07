class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function treeMaxDepth(node) {
  // base case
  if (node.next === null) return 0;
  // get depth of left child value by recursing on left
  const leftDepth = 1 + treeMaxDepth(node.left);
  // get depth of right child by recursing on right
  const rightDepth = 1 + treeMaxDepth(node.right);
  // return max depth of right or left child
  return Math.max(leftDepth, rightDepth);
}

// this function builds a tree from input; you don't have to modify it
// learn more about how trees are encoded in https://algo.monster/problems/serializing_tree
function buildTree(nodes, f) {
  const val = nodes.next().value;
  if (val === "x") return null;
  const left = buildTree(nodes, f);
  const right = buildTree(nodes, f);
  return new Node(f(val), left, right);
}

function splitWords(s) {
  return s == "" ? [] : s.split(" ");
}

function* main() {
  const root = buildTree(splitWords(yield)[Symbol.iterator](), parseInt);
  const res = treeMaxDepth(root);
  console.log(res);
}

class EOFError extends Error {}
