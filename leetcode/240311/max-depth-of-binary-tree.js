var maxDepth = function(root) {
    
    if(root === null) return 0
    const leftHeight = maxDepth(root.left)
    const rightHeight = maxDepth(root.right)
    return Math.max(leftHeight, rightHeight) + 1
};