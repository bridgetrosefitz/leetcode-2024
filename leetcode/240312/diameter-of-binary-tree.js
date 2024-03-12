var diameterOfBinaryTree = function (root) {
  // if I am a node
  // I want to know the max of my two branches, and pass that up + 1
  // I want to know if the diameter of my two branches is longer than all other diameters we've seen
  let maxDiameter = 0;

  function dfs(node) {
    if (!node) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    maxDiameter = Math.max(left + right, maxDiameter);
    return Math.max(left, right) + 1;
  }

  dfs(root);
  return maxDiameter;
};
