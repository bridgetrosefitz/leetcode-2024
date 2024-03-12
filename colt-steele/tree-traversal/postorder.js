function postorder(root) {
  const res = [];

  function traverse(node) {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    res.push(node.val);
  }

  traverse(root);
  return res;
}
