var preorderTraversal = function (root, list = []) {
  if (!root) return list;
  list.push(root.val);
  if (root.left) preorderTraversal(root.left, list);
  if (root.right) preorderTraversal(root.right, list);

  return list;
};
