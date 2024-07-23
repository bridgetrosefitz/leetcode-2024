var zigzagLevelOrder = function (root) {
  const res = [];

  function traverse(node, level) {
    // base case
    if (!node) return;

    // work
    if (res[level]) {
      res[level].push(node.val);
    } else {
      res[level] = [node.val];
    }

    // visit next nodes
    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  }

  traverse(root, 0);
  return res.map((level, i) => {
    if (i % 2 !== 0) {
      return level.reverse();
    } else {
      return level;
    }
  });
};
