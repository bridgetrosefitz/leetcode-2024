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
  const queue = [root];
  const res = [];

  while (queue.length) {
    const node = queue.shift();
    if (node) queue.push(node.left);
    if (node) queue.push(node.right);
    if (!node) {
      res.push(null);
    } else {
      res.push(node.val);
    }
  }
  return res;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data.length) return null;
  if (data[0] === null) return null;

  const root = new TreeNode(data[0]);
  const queue = [root];
  let i = 1;

  while (queue.length && i < data.length) {
    const node = queue.shift();
    if (data[i] !== null) {
      const left = new TreeNode(data[i]);
      node.left = left;
      queue.push(left);
    }
    i++;
    if (data[i] !== null) {
      const right = new TreeNode(data[i]);
      node.right = right;
      queue.push(right);
    }
    i++;
  }

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
