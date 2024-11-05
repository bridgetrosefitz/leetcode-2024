(function main() {
  console.log("Hello World!");

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
      if (!node) {
        return null;
      }

      // if(!node.left && !node.right) {
      if (level > maxLevel) {
        res = [node.val];
        maxLevel = level;
      } else if (level === maxLevel) {
        res.push(node.val);
      }
      // }

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

  /*
                    1
                2.      3
            4.    n   5   n
        
            out = 9
    
    
    
    
    
    */

  function getLowestLeaves(root) {
    let sum = 0;

    if (!root) {
      return 0;
    }

    let currLevel = [root];

    // bfs over each level
    while (currLevel.length) {
      // two things:
      // add up all val of curr level
      // at end of processing curr level
      // we'll have the sum of all of the curr level's nodes
      // so save this in an outer var

      // reset sum
      sum = 0;

      let nextLevel = [];

      for (let i = 0; i < currLevel.length; i++) {
        const n = currLevel[i];
        sum += n.val;

        n.left && nextLevel.push(n.left);
        n.right && nextLevel.push(n.right);
      }

      currLevel = nextLevel;
    }

    return sum;
  }

  let tree1 = {
    val: 1,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: {
        val: 5,
        // ....
      },
      right: {},
    },
  };

  console.log(
    "test1 for getLowestLeaves, expecing 5, actual = ",
    getLowestLeaves(tree1)
  );

  /*
            1
        2.       3
    n.   n.    5.  7
    
    currLevel = [4,5]
    
    // while loop
        
        sum = 5
        nl = [4,5]
        
        // for each node in cl = 2,3
            // process 3
            // process it
    
        cl = nl
    */
})();
