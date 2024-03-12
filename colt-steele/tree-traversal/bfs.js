function bfs(root) {
  const queue = [root];
  const res = [];

  while (queue.length) {
    const node = queue.shift();
    res.push(node);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return res;
}
