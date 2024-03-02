// iterative
var preorderTraversal = function (root) {
  if (!root) return [];
  const ans = [];
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    ans.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return ans;
};

// recursive

var preorderTraversal = function (root, list = []) {
  if (!root) {
    return [];
  }

  list.push(root.val);
  if (root.left !== null) preorderTraversal(root.left, list);
  if (root.right !== null) preorderTraversal(root.right, list);
  return list;
};
