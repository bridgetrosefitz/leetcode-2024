/**
 *
Given two nodes of a binary tree p and q, return their lowest common ancestor (LCA).

Each node will have a reference to its parent node. The definition for Node is below:

class Node {
    public int val;
    public Node left;
    public Node right;
    public Node parent;
}

 Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 Output: 3
 Explanation: The LCA of nodes 5 and 1 is 3.
 
 *         3
 *       /    \
 *     5        1
 *   /  \     /    \ 
 *  6    2   0      8
 *      / \
 *     7   4     
 *
 * p = 6, q = 7
 * LCA is first node that we visit while traversing up towards root from BOTH p and q
 *
 * Approach 1
 * [6,5,3] [7,2,5,3]
 * O(n2);
 *
 * Approach 2
 * Find root by traversing upwards from p or q
 * Find LCA by traversing down to p and q
 * O(n)
 *
 * Approach 3
 * >> only store path of 1
 * storage: O(n) as we build path from q to root; also O(n) for dfs traversal
 * time: O(n) 
 * 
 *
 * Inputs:
 * - type, length, hostile
 * - 2 nodes (p and q)
 * - p and q will be in the tree
 * - LCA can be p or q
 * Outputs:
 * - type, length, mutate
 * - node (LCA of p and q)
 */

function findLCA(p, q) {
  // p = 2, q = 3
  const path = new Set(); // {2, 1}
  const lca = null; // 1

  function generatePathFromNodeToRoot(node) {
    // 2
    if (!node) {
      return null;
    }

    path.add(node);
    generatePathFromNodeToRoot(node.parent);
  }

  function findFirstCommonAncestorInPath(node) {
    // 3 1
    if (!node) {
      return null;
    }

    /**
     *
     * {2,1}
     *.    1
     *  2.     3
     *
     *     1
     * 2
     *
     * p = 1, q = 2
     * q = 2, p = 1
     *
     * {2,1}
     *
     *
     */

    if (path.has(node)) {
      lca = node;
    } else {
      findFirstCommonAncestorInPath(node.parent);
    }
  }

  generatePathFromNodeToRoot(p);
  findFirstCommonAncestorInPath(q);
  return lca;
}
