/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  /*
        1
    2       3
          4
    
    */
  const res = [];
  const q = [root];

  while (q.length) {
    // put current val into res
    // enqueue left and right children
    const curr = q.shift();
    res.push(curr ? curr.val : "*");

    if (curr) {
      q.push(curr.left);
      q.push(curr.right);
    }
  }

  return res.join(" ");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data[0] === "*") {
    return null;
  }

  const vals = data.split(" ").reverse();
  const first = vals.pop();
  const root = new TreeNode(Number(first));
  //[1,2,3,*,*,4,*]
  const q = [root];

  while (q.length && vals.length) {
    const node = q.shift();
    const leftVal = vals.pop();
    const rightVal = vals.pop();

    if (leftVal !== "*") {
      node.left = new TreeNode(Number(leftVal));
      q.push(node.left);
    }

    if (rightVal !== "*") {
      node.right = new TreeNode(Number(rightVal));
      q.push(node.right);
    }
    // attach
    // enqueue
  }

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
