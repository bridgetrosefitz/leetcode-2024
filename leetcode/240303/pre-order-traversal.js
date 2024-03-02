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
