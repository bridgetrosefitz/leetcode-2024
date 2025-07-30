/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

/*
 
            1
        2       3
               4

    [1,2,*,*,3,4,*,*,*]


 
 */
var serialize = function (root) {
  const res = [];

  function helper(node) {
    if (!node) {
      res.push("*");
      return;
    }

    res.push(node.val);

    helper(node.left);
    helper(node.right);
  }

  helper(root);

  console.log(res);
  return res.join(" ");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const nums = data.split(" ");
  let i = -1;

  /*
    
    [1, 2, '*', '*', 3, 4, '*', '*', '*']
           i
     h() (2) 2.left = null
     h() (1)
    */

  function helper() {
    i++;
    if (nums[i] === "*") {
      return null;
    }

    const node = new TreeNode(Number(nums[i]));

    node.left = helper();
    node.right = helper();

    return node;
  }

  return helper();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
