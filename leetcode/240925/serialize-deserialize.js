/**
 * Definition for a binary tree node.
 * function TreeNode(val, left = null, right = null) {
 *     this.val = val;
 *     this.left = left
 *     this.right = right;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

function serializeDFS(root, res) {
  if (!root) {
    res.push("x");
    return res;
  }

  res.push(root.val);
  serializeDFS(root.left, res);
  serializeDFS(root.right, res);
  return res;
}

var serialize = function (root) {
  const res = [];
  serializeDFS(root, res);
  return res.join(" ");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

function deserialize(s) {
  function f(value) {
    return parseInt(value);
  }

  return buildTree(s.split(" ")[Symbol.iterator](), f);
}

function buildTree(nodes, f) {
  const val = nodes.next().value;
  if (val === "x") return null;
  const left = buildTree(nodes, f);
  const right = buildTree(nodes, f);
  return new TreeNode(f(val), left, right);
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
