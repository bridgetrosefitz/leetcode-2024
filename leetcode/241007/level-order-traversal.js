function levelOrder(root) {
  const q = [root];
  const res = [];

  while (q.length) {
    const numberNodesAtCurrLevel = q.length;
    const level = [];

    for (let i = 0; i < numberNodesAtCurrLevel; i++) {
      const node = q.shift();
      level.push(node.val);

      if (node.left) {
        q.push(node.left);
      }

      if (node.right) {
        q.push(node.right);
      }
    }

    res.push(level);
  }

  return res;
}
