// Given the root of a binary tree, imagine yourself standing on the right side of it,
// return the values of the nodes you can see ordered from top to bottom.

/*

	1
   2
  4  3
   
   [1,2,3]

- left child only
- balanced

Inputs: node (root of binary tree)
Output: list of integers (values of the nodes)

// bfs
// push value of last node into res array


			1
           2.
*/

function rightSideValues(root) {
  if (!root) return null;
  const res = []; // [1]

  let currNodes = [root]; // [1] [2,3]

  while (currNodes.length) {
    const nextNodes = []; // [2,3] // []
    const lastIndex = currNodes.length - 1; // 0 // 1

    currNodes.forEach((node, i) => {
      // put last node in res
      if (i === lastIndex) {
        res.push(node.val);
      }

      if (node.left) {
        nextNodes.push(node.left);
      }

      if (node.right) {
        nextNodes.push(node.right);
      }
    });

    currNodes = nextNodes;
  }

  return res;
}

///////////////////////////////////////////////////////////////

function rightSideValues(root) {
  if (!root) return null;
  const res = [];

  // q which has [level, node]
  // if curr node has diff level to node at position 0 in q
  // push val of vurr node into res

  const q = [[0, root]];

  while (q.length) {
    const [currLevel, currNode] = q.shift();
    if (!q.length || currLevel !== q[0][0]) {
      /// PUT CHECK HERE
      res.push(currNode.val);
    }

    if (currNode.left) {
      q.push([currLevel + 1, currNode.left]);
    }

    if (currNode.right) {
      q.push(currLevel + 1, currNode.right);
    }
  }

  return res;
}

function mergeIntervals(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  const res = [];

  let currStart = intervals[0];
  let currEnd = intervals[1];

  for (let i = 1; i < intervals.length; i++) {
    const [iStart, iEnd] = intervals[i];

    if (iStart <= currEnd) {
      currEnd = Math.max(currEnd, iEnd);
    } else {
      res.push([currStart, currEnd]);
      currStart = iStart;
      currEnd = iEnd;
    }
  }

  res.push([currStart, currEnd]);

  return res;
}
