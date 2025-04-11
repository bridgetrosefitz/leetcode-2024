/* [0,0,5][1,-1,5][1,1,1]

         5
       5    1
        3 4 
        
*/

function verticalTraversal(root) {
  let nodesGroupedByVertical = [];
  dfs(root, 0, 0);
  nodesGroupedByVertical.sort(nodeComparator);
  let verticalOrder = [];
  let previousIndex = -Infinity;

  // grop sorted nodes into subarrays based on their vertical index
  for (const node of nodesGroupedByVertical) {
    const [nodeValue, _, verticalIndex] = node;

    if (verticalIndex !== previousIndex) {
      verticalOrder.push([]);
      previousIndex = verticalIndex;
    }
    verticalOrder[verticalOrder.length - 1].push(nodeValue);
  }

  function dfs(node, depth, verticalIndex) {
    if (!node) {
      return;
    }

    nodesGroupedByVertical.push([node.val, depth, verticalIndex]);

    dfs(node.left, depth + 1, verticalIndex - 1);
    dfs(node.right, depth + 1, verticalIndex + 1);
  }

  function nodeComparator(a, b) {
    const [aVal, aRow, aCol] = a;
    const [bVal, bRow, bCol] = b;

    if (aCol === bCol) {
      if (aRow === bRow) {
        return aVal - bVal;
      }
      return aRow - bRow;
    }

    return aCol - bCol;
  }

  return verticalOrder;
}
