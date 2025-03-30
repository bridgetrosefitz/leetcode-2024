function lca(root, p, q) {
  let lca = null;

  function findLca(node) {
    if (!node) {
      return false;
    }

    const curr = node === p || node === q;
    const left = findLca(node.left);
    const right = findLca(node.right);

    if (curr + left + right >= 2) {
      lca = node;
    }

    return curr || left || right;
  }

  findLca(root);
  return lca;
}
