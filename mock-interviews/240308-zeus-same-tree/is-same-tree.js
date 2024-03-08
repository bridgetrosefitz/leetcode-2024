// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null && q !== null) return false;
  if (q === null && p !== null) return false;
  //this line is to avoid getting an error
  // from trying to read .val on null
  if (q === null && p === null) return true;
  if (p.val !== q.val) return false;

  if (!isSameTree(p.left, q.left)) return false; // line up the next one
  if (!isSameTree(p.right, q.right)) return false; // line up the next one
  return true;
};

// stack = [isSameTree(p,q), isSameTree(p.left,q.left), isSameTree ...]

// 1. Base Case (otherwise stack overflow)
// 2. Nested call somewhere different inputs

const p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const q = new TreeNode(1, new TreeNode(2), new TreeNode(3));

isSameTree(p, q);

// isSameTree(null,q) -> false
// isSameTree(p,null) -> false
// isSameTree(null,null) -> true

// tree is a bunch of nodes arranged in a particular pattern
// don't think about the next step as part of the current step
// checking for nullability is super important for recursive  LL and trees
// guard clause - check something and return immediately
// remember to look for inequality not just equality <- golden tip: always write the one that avoids indentation
// when thinking about LL or trees, imagine your field of vision is just one node. You don't even know if there's a left or right. The only thing that matters is the present. Deal with what you have
// the recursive function is like a magnifying glass looking at each node
// why do you need to pass the info all the way back up to the root
// because of the way a recursive function is written, you have to hear back from all the minions you send out to get the sub answers. It is written such that to finish solving one function you need an answer from the nested call
// don't optimise the code, just write the logic
// don't skip ahead. look at what's going on at each stage
// we only look at one at a time; as opposed to our brains being omnipotent that can see the answer to 3 nodes at the same time
// wherever you are, check whatever you can
// stop your brain if it's like 'but what if left?!' That is not the job of this call, it's the job of the next one
// write down the subproblem. Figuring out the subproblem is the meat of the recursive approach. What is the subproblem is what is under the magnifying glass
// what am I looking at; where am I in the present; what should I solve right now. As soon as your brain says "you should chexk XYZ!!". Let it go. Just hold the magnifying glass up
// where am I in the present; then where do I jump; what do I do with that jump

// First. Maximum Depth of Binary Tree
// Second. Diameter of Binary Tree
