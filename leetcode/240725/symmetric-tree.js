// OTHER SOLUTION ON LEETCODE

const isSymmetric = function (root) {
  if (!root) return true;

  return isMirror(root.left, root.right);
};

const isMirror = function (a, b) {
  if (!a && !b) {
    return true;
  }
  if (!a || !b) {
    return false;
  }
  return (
    a.val === b.val && isMirror(a.left, b.right) && isMirror(a.right, b.left)
  );
};
