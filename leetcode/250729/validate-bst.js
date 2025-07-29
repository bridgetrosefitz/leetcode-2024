/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    // go left as far as poss. If ever left node is not less than or equal to curr, bubble up false
    // same with right

    /*
                8
            8
        4       10
          5    9

          2
        1.  3

    // a node needs to be
    // smaller than every ancestor whose left subtree it is in
    // bigger than every ancestor whose right subtree it is in
    
    
    */

    function dfs(node, max, min) {
        if(!node) {
            return true
        }

        if(node.val >= max || node.val <= min) {
            return false
        }

        // if left, upper bound is curr node, lower bound is same min
        // if right, lower bound is curr node, upper bound is same max
        return dfs(node.left, node.val, min))  &&  dfs(node.right, max, node.val))

       
    }



    return dfs(root,Infinity, -Infinity)


};