function maxDepth(root) {
  if (!root) return 0;
  let max = 0;
  const stack = [[root, 1]];

  while (stack.length) {
    const [node, depth] = stack.pop();

    max = Math.max(max, depth);

    if (node.right) stack.push([node.right, depth + 1]);
    if (node.left) stack.push([node.left, depth + 1]);
  }

  return max;
}
