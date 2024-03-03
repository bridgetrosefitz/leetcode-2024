// ITERATIVE

const inorderTraversal = function (root) {
  if (!root) return [];
  const ans = [];
  const stack = [];

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    ans.push(root.val);
    root = root.right;
  }

  return ans;
};
