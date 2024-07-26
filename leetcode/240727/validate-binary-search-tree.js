var isValidBST = function (root) {
  let curr = -Infinity;
  let isBinary = true;

  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    if (node.val <= curr) isBinary = false;
    curr = node.val;
    dfs(node.right);
  }

  dfs(root);

  return isBinary;
};
