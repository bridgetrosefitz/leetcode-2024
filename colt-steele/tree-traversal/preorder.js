function preorder(root) {
  const res = [];
  let current = root;

  function dfs(node) {
    res.push(node.val);
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
  }

  dfs(current);
  return res;
}
