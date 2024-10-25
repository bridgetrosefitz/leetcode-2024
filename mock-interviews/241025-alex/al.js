/*
symmetric

given the root of a binary tree, return true if the tree is symmetric about its root, false otherwise

input: root of a tree
output: boolean true if it is symmetric, otherwise false
edge cases: empty root potentially ( true ?)

      1
    2.  3

    false

       1

    2.   2

  1. 3. 3. 1
             
             1

            2  2

*/

// write a recursive function for each node
// check at each node see if it is a mirror of the other side
//

//   1
// 2.  2
//n n n n
// levels
// [[1], [2, 2], [null, null, null, null]]
//

const isSymmetricTree = root => {
  if (!root) return true;

  const levels = [];

  const traverse = (node, level) => {
    if (!levels[level]) levels[level] = [];
    if (!node) {
      levels[level].push("null");
      return;
    }
    levels[level].push(node.val);
    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  };

  traverse(root, 0);

  // levels array fully filled out
  // check for symmetry / palindrome

  const checkIfSymmetric = arr => {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
      if (arr[l] !== arr[r]) return false;
      l++;
      r--;
    }
    return true;
  };

  for (let i = 0; i < levels.length; i++) {
    const isSymmetric = checkIfSymmetric(levels[i]);
    if (!isSymmetric) return false;
  }

  return true;
};

// time
// O(n)

// space
// O(n)
