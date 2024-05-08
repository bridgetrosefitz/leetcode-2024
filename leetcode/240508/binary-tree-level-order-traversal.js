var levelOrder = function (root) {
  if (root === null) return [];

  const res = [];
  const queue = new Queue();
  queue.enqueue(root);

  while (queue.size() > 0) {
    const n = queue.size();
    const level = [];
    for (let i = 0; i < n; i++) {
      const node = queue.dequeue();
      level.push(node.val);

      if (node.left) {
        queue.enqueue(node.left);
      }

      if (node.right) {
        queue.enqueue(node.right);
      }
    }

    res.push(level);
  }

  return res;
};
