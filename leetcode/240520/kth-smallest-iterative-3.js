function kthSmallest(root, k) {
  let count = k;
  const stack = [];
  let curr = root;

  // WHY DOES THIS HAVE TO BE WHILE CURR
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();

    // work
    count--;
    if (count === 0) return curr.val;

    curr = curr.right;
  }
}
