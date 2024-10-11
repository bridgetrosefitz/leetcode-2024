/*

A parentheses string is valid if and only if:

It is the empty string,
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
You are given a parentheses string s. In one move, you can insert a parenthesis at any position of the string.

For example, if s = "()))", you can insert an opening parenthesis to be "(()))" or a closing parenthesis to be "())))".

Return the minimum number of moves required to make s valid.
// COULD BE EMPTY
// COULD ADD OR REMOVE >> WILL BE THE SAME

Example 1:

Input: s = "())"
Output: 1
Example 2:

Input: s = "((("
Output: 3

"()()"

"(()()"


Constraints:

1 <= s.length <= 1000
s[i] is either '(' or ')'.

( ) 
// one open bracket available for us to close, when we encounter the closed bracket
// opposite on next case

// keep track of if there is an opening bracket "available" when we encounter a closing bracket

Input: s = "())" 
Output: 1
Example 2:

Input: s = "((("
Output: 3

*/

function minMovesToValidate(s) {
  if (!s.length) return 0;
  let counter = 0;
  const stack = []; // 1 // 0

  // iterate over string left to right from 0
  // if ch is an open bracket
  // add to stack
  // else
  // if stack.length > 0
  // pop off stack
  // else
  // increment counter

  // add length of stack to counter

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (ch === "(") {
      stack.push("(");
    } else {
      if (stack.length > 0) {
        stack.pop();
      } else {
        counter += 1;
      }
    }
  }

  counter += stack.length;

  return counter;
}

/*

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// GOING TO PASS IN THE NODE ITSELF (val, left, right)
// P AND Q WILL BOTH BE IN THE TREE

Example 1:


Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
Example 2:


Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.


// when we pass a node up, we know that this node is either 
// 1. p or q
// 2. the LCA

// at a given node, if we have a non null node from both left and right subtrees, THIS is the LCA >> pass that up

// otherwise, if we have either p or q, pass that node up


*/

// val
// left
// right

//    5
//   / \
//  6   3

function findLCA(node, p, q) {
  // if node is null, return node
  if (!node) return node;

  // if this node is p or if this node is q, return node
  if (node === q || node === p) {
    return node;
  }

  const left = findLCA(node.left, p, q);
  const right = findLCA(node.right, p, q);

  // if left and right, return node
  // if left is not null, return left
  // if right is not null, return right

  if (left && right) return node;

  if (left) return left;
  if (right) return right;

  return null;
}
