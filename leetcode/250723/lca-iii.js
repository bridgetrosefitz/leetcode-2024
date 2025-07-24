/**
 * // Definition for a _Node.
 * function _Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {_Node} p
 * @param {_Node} q
 * @return {_Node}
 */
var lowestCommonAncestor = function (p, q) {
  // find level for p
  // find level for q

  /* p = 1, q = 4
                3
            5       1
               2
                 4
    
    pLevel = 1 > min
    qLevel = 3 > max

    // find ancestor at min level for max level node

    ancestorQ = 5
    ancestorP = 1
    
    */

  // let lca = null

  // function findCommonAncestor(pAnc, qAnc) {
  //     if(!pAnc) {
  //         return
  //     }

  //     if(pAnc === qAnc) {
  //         lca = pAnc
  //         return
  //     }

  //     findCommonAncestor(pAnc.parent, qAnc.parent)

  // }

  function findLevel(node) {
    if (!node) {
      return 0;
    }

    return findLevel(node.parent) + 1;
  }

  // function findAnc(node, startLevel, endLevel) {

  // }

  const pLevel = findLevel(p);
  const qLevel = findLevel(q);

  // const pAnc = pLevel < qLevel ? p : findAnc(p, pLevel, qLevel)
  // const qAnc = qLevel < pLevel ? q : findAnc(q, qLevel, pLevel)
  let qAnc = q;
  let pAnc = p;

  if (pLevel < qLevel) {
    for (let level = qLevel; level > pLevel; level--) {
      qAnc = qAnc.parent;
    }
  } else {
    for (let level = pLevel; level > qLevel; level--) {
      pAnc = pAnc.parent;
    }
  }

  function findCommonAncestor(pAnc, qAnc) {
    if (pAnc === qAnc) {
      return pAnc;
    }

    return findCommonAncestor(pAnc.parent, qAnc.parent);
  }

  return findCommonAncestor(pAnc, qAnc);
};
