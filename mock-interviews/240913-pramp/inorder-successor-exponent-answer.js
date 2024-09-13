// First, make sure your peer understands the question.
// If you or your peer have a hard time understanding how to go about solving this problem, or could use a reminder of how BSTs work, take this interactive BST application for a spin.
// If your peer is still stuck, ask them to look again at the examples provided above (in the diagram caption and “For example”) and see if based on these examples they can discern the two different cases in which a node is an Inorder Successor of a given input node.
// Your peer may suggest another approach and that is to start searching from the root and traversing the tree in a binary search manner. While correct, ask them to come up with a solution that doesn’t require the root.

// function findInOrderSuccessor(inputNode):
//     if (inputNode.right != null):
//         # return the node with minimum key in the right subtree
//         return findMinKeyWithinTree(inputNode.right)

//     ancestor = inputNode.parent
//     child = inputNode

//     # travel up using the parent pointer until you see
//     # a node which is the left child of its parent. The parent
//     # of such a node is successorNode.
//     while (ancestor != null AND child == ancestor.right):
//         child = ancestor
//         ancestor = child.parent

//     return ancestor

// function findMinKeyWithinTree(inputNode):
//     while (inputNode.left != null):
//         inputNode = inputNode.left

//     return inputNode
