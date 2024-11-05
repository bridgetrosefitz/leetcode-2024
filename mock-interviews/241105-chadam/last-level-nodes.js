// Given a binary tree (root), return an array of all of the values of nodes at the very last level of the tree

/* 

            4
          3
        2
        [2]

        {
        2: [2]
        }

        Math.max(...Object.keys(obj))
        
            4
          2   3

          [2,3]

            4
          2    3
              5

            [5]
              
            4
              2 

            [2]

            null

            []

inputs: node (root of binary tree)
output: arr (integers - values of nodes at last level)
*/

// could find loowest level with O(n) first pass

// keep track of max level
// keep track of level
// find leaves
// if level is greater than curr maxLevel, clear res arr and push cur val in and update max
// if level is same as curr maxLevel, push curr val in
// return res arr

//TO DO: check case where one level only

function returnLowestLevelLeafVals(root) {
  //     4
  //   3
  // 2
  // [2]
  let res = [];
  let maxLevel = -Infinity;

  function dfs(node, level) {
    if (!node) return node;

    if (!node.left && !node.right) {
      if (level > maxLevel) {
        res = [node.val];
        maxLevel = level;
      } else if (level === maxLevel) {
        res.push(node.val);
      }
    }

    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }

  dfs(root, 0);

  return res;
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const test1 = new Node(4);
test1.left = new Node(3);
test1.left.left = new Node(2);
// expect [2]

const test3 = new Node(4);
test3.left = new Node(2);
test3.right = new Node(3);
test3.right.left = new Node(5);
// expect [5]
//   4
// 2    3
//     5

console.log("test1", returnLowestLevelLeafVals(test1));
console.log("test3", returnLowestLevelLeafVals(test3));

//////////////////////

/*   

      1
    4   2
  n  17 n  3

  [1,4,-500]

      

      1
    2

*/
