function kthSmallest(root, k) {
  const stack = [];
  let count = k;
  let curr = root;

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    // by this point,
    // curr is null, and
    // we know that the left-most node
    // is the last element in the stack, so go grab it
    curr = stack.pop();

    // before we go right, do your work (for it to be inorder)
    count--;
    if (count === 0) return curr.val;

    curr = curr.right;
  }
}
