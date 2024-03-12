function maxDepth(root) {
  // what is the max depth of the two branches below me
  // add one to that and send it up

  if (!root) return 0;
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);
  return Math.max(left, right) + 1;
}
