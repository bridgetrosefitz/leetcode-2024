var binaryTreePaths = function (root) {
  const res = [];
  const temp = [];

  function dfs(node) {
    // add current node to temp
    // if no left or right children, add to res and return

    // if left child, dfs on left child
    // remove most recent
    // if right child, dfs on right child
    // remove most recent

    temp.push(node.val);
    if (!node.left && !node.right) {
      res.push(temp.join("->"));
      return;
    }

    if (node.left) dfs(node.left);
    temp.pop();
    if (node.right) dfs(node.right);
    temp.pop();
  }

  dfs(root);
  return res;
};
