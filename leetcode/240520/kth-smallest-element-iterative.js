var kthSmallest = function (root, k) {
  let count = k;
  const stack = [];
  let curr = root;

  while (curr || stack.length > 0) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();

    count--;
    if (count === 0) return curr.val;

    curr = curr.right;
  }
};
