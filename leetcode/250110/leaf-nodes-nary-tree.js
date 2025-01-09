function leafNodeSum(root) {
  let sum = 0;
  let node = root;
  while (node) {
    if (!node.children.length) {
      sum += node.value;
      node = node.parent;
      continue;
    }

    if (node.index === node.children.length) {
      node = node.parent;
      continue;
    }

    node = node.children[node.index];
    node.parent.index++;
  }
}
