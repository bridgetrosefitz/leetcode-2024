// neither of these works because you have to return, otherwise with this logic you will set lca to the second of p or q that you find
var lowestCommonAncestor = function (root, p, q) {
  // externally set p
  // externally set l
  // externally set LCA

  // if we've seen l and p and LCA is null, set self to be LCA

  let lca = null;
  let pFound = false;
  let qFound = false;

  function helper(node) {
    if (!node) {
      return;
    }

    pFound = pFound || node === p;
    qFound = qFound || node === q;

    if (pFound && qFound && !lca) {
      lca = node;
    }

    helper(node.left);
    helper(node.right);
  }

  helper(root);

  return lca ? lca : pFound ? p : q;
};

//////////////////////

var lowestCommonAncestor = function (root, p, q) {
  // externally set p
  // externally set l
  // externally set LCA

  // if we've seen l and p and LCA is null, set self to be LCA

  let lca = null;
  let pFound = false;
  let qFound = false;

  function helper(node) {
    if (!node) {
      return;
    }
    console.log(node.val);

    // pFound = pFound || node === p
    // qFound = qFound || node === q

    if (node === p) {
      pFound = true;
      if (qFound) {
        return;
      }
    }

    if (node === q) {
      qFound = true;
      if (pFound) {
        return;
      }
    }

    helper(node.left);
    helper(node.right);

    if (pFound && qFound && !lca) {
      console.log("hi", node.val);
      lca = node;
    }
  }

  helper(root);

  return lca ? lca : pFound ? p : q;
};
