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
  const res = [];

  function helper(node) {
    if (!node) {
      res.push("*");
      return;
    }

    res.push(node.val);

    helper(node.left);
    helper(node.right);
  }

  helper(root);
  return res.join(" ");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const nums = data.split(" ");
  let i = -1;

  function helper() {
    i++;
    if (nums[i] === "*") {
      return null;
    }

    const node = new TreeNode(parseInt(nums[i]));
    const left = helper();
    const right = helper();

    if (left) {
      node.left = left;
    }

    if (right) {
      node.right = right;
    }

    return node;
  }

  return helper();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
