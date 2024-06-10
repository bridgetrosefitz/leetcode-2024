var binaryTreePaths = function (root) {
  const res = [];
  const temp = [];

  function dfs(node) {
    temp.push(node.val);
    if (!node.left && !node.right) {
      res.push(temp.join("->"));
      return;
    }

    if (node.left) {
      dfs(node.left);
      temp.pop();
    }
    if (node.right) {
      dfs(node.right);
      temp.pop();
    }
  }

  dfs(root);
  return res;
};
