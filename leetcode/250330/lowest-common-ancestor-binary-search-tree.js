function lowestCommonAncestor(root, p, q) {
  let lca = root;

  /*
  
            1
          0   2
          [0,2] >> 1
          [1,2] >> 1
          [0,1] >> 1
  */

  function search(node) {
    if (!node) {
      return;
    }

    lca = node;

    if (node === p || node === q) {
      return;
    } else if (node.val > p.val && node.val > q.val) {
      search(node.left);
    } else if (node.val < p.val && node.val < q.val) {
      search(node.right);
    }
  }

  search(root);

  return lca;
}
