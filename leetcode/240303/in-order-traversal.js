// RECURSIVE
var inorderTraversal = function (root, list = []) {
  if (!root) {
    return [];
  }

  if (root.left) inorderTraversal(root.left, list);
  list.push(root.val);
  if (root.right) inorderTraversal(root.right, list);

  return list;
};
