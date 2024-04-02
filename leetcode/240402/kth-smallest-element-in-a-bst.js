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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    // keep an array of size k
    // is the value of this node smaller than the largest item in k array
        // push value into k array
        // sort k array
    // check left node
    // check right node
    // return k - 1th node
    
    if(k === 1) return root
    const kArray = new Array(k).fill(Infinity)
    

    function dfs(node) {
        const kthSmallest = kArray[k - 1] === Infinity ? Infinity : kArray[k - 1].val
        if(!node) return
        if(node.val < kthSmallest) {
            kArray[k - 1] = node
            kArray.sort((a, b) => a.val < b.val ? -1 : 1)
        }

        dfs(node.left)
        dfs(node.right)
    }

    dfs(root)
    console.log(kArray[k - 1])
    return kArray[k - 1].val
    
};