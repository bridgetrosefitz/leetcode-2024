function postorder(node) {
  const res = [];

  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    dfs(node.right);
    res.push(node.val);
  }

  dfs(node);
  return res;
}

function preorder(node) {
  const res = [];

  function dfs(node) {
    if (!node) return;
    res.push(node.val);
    dfs(node.left);
    dfs(node.right);
  }

  dfs(node);
  return res;
}

function inorder(node) {
  const res = [];

  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    res.push(node.val);
    dfs(node.right);
  }

  dfs(node);

  return res;
}
