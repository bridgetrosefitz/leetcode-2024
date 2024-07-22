function lowestCommonAncestor(node, p, q) {
  if (!node || node.val === p.val || node.val === q.val) {
    return node;
  }

  const left = lowestCommonAncestor(node.left, p, q);
  const right = lowestCommonAncestor(node.right, p, q);

  if (left && right) {
    return node;
  } else {
    return left || right;
  }
}

// IF ONE OR BOTH OF THE TARGETS MAY NOT EXIST

var lowestCommonAncestor = function (node, p, q) {
  let foundP = false;
  let foundQ = false;

  function findLCA(node, p, q) {
    if (!node) {
      return null;
    }

    const left = findLCA(node.left, p, q);
    const right = findLCA(node.right, p, q);

    if (node.val === p.val) {
      foundP = true;
      return node;
    }

    if (node.val === q.val) {
      foundQ = true;
      return node;
    }

    if (left && right) {
      return node;
    }

    return left || right;
  }

  const lca = findLCA(node, p, q);
  return foundP && foundQ ? lca : null;
};
