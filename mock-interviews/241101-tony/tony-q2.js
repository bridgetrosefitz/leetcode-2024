//hello

// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

/**
 *        1            <-    q=[] size=0 result=[1,3,6]
 *    2        3       <-
 *     5        6      <-
 * input: root: Node
 * output: number[]  => [1,3,6]
 *
 *         1
 *     2
 * 3            => [1,2,3]
 *
 *         1
 *             2
 *                 3 => [1,2,3]
 * time: O(N)
 * space: O(d)
 */

const rightView = root => {
  if (!node) return [];
  const result = []; // [1]
  const q = [root]; // [1]
  while (q.length) {
    // [1]
    let size = q.length; // 1
    while (size) {
      const node = q.shift();
      size--;
      if (size == 1) result.push(node.val);
      node.left && q.push(node.left);
      node.right && q.push(node.right);
    }
  }
  return result;
};
