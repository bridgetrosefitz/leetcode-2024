var kthSmallest = function (root, k) {
  // array of length k
  // traverse
  // if node is smaller than right-most el in array
  // loop over array until you find first el which is bigger than curr
  // pop the last element of array
  // splice curr before el
  // return last el of array

  const smallestEls = new Array(k).fill(Infinity);

  function dfs(node) {
    if (!node) return;
    if (node.val < smallestEls[smallestEls.length - 1]) {
      for (let i = 0; i < smallestEls.length; i++) {
        if (node.val < smallestEls[i]) {
          smallestEls.splice(i, 0, node.val);
        }
        smallestEls.pop();
        break;
      }
    }

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  return smallestEls[smallestEls.length - 1];
};
