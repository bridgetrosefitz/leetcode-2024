var levelOrder = function (root) {
  if (!root) return [];
  const map = {};

  function bfs(node, depth) {
    if (!node) return;
    if (map[depth]) {
      map[depth].push(node.val);
    } else {
      map[depth] = [node.val];
    }
    bfs(node.left, depth + 1);
    bfs(node.right, depth + 1);
  }

  bfs(root, 0);
  return Object.values(map);

  // push node into array at index of current depth
  // recurse on left node with current depth + 1
  // recurse on right node with current depth + 1

  // return res
};
