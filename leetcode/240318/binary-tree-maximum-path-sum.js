var maxPathSum = function (root) {
  let maxPath = -Infinity;

  function gainFromSubtree(node) {
    if (!node) return 0;

    const gainFromLeft = Math.max(gainFromSubtree(node.left), 0);
    const gainFromRight = Math.max(gainFromSubtree(node.right), 0);

    maxPath = Math.max(maxPath, gainFromLeft + gainFromRight + node.val);

    return Math.max(gainFromLeft + node.val, gainFromRight + node.val);
  }

  gainFromSubtree(root);
  return maxPath;
};
