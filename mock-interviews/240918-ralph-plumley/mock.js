/*
TC/SC
EDGE cases
DRY RUNS!
*/

https://app.coderpad.io/WC3GFT2C

/*




class Node {
    public int val;
    public Node left;
    public Node right;
    public Node parent;
}


           3
      5        1
   6    2     0 8
      7   4


      5 and 1 -> 3
      5 and 4 -> 5


      3
    5   1

    5 and 1 -> 3
    3 and 1 -> 3
*/

// fn (p, q) { // (3)
let lca;

// recurse(node) {  // 3  // 5

// is this node p or q // we still need to know if we have the other one
// is node.left p or q
// is node.right p or q

//    3
const current = node === p || node === q; // false
const leftSubtree = recurse(node.left); //  false
const rightSubtree = recurse(node.right); // true

// if not passing back yes / no, can I save fact that I've found answer

if (leftSubtree && rightSubtree) lca = node;
if (current && (leftSubtree || rightSubtree)) lca = node;

if (leftSubtree || rightSubtree || current) return true;
return false;

// }

// findRoot(node)
// if parent is null, return node
// findRoot(node)

function findRoot(node) {
  if (node.parent === null) return node;
  return findRoot(node.parent);
}

const parent = findRoot(p);
recurse(parent);
return lca;
// }

// return the lowest common ancestor of p and q
// could be one of the nodes itself
// can assume p and q exist in the tree, and only one answer

// base case
// if node is null, return node

// is this node p or is p in left or right subtree of this node
// is this node q or is q in left or right subtree of this node

//--------------------------------------
//         w
// nums = [0,1,0,3,12] --> [1,3,12,0,0]

// nums = [1,1,0,3,12] --> [1,1,3,12,0]
// nums = [1,1,3,0,12] --> [1,1,3,12,0]
// nums = [1,1,3,12,0] --> [1,1,3,12,0]
//                    r
//                  w
// nums = [1,3,12] --> [1,3,12]
//           r
// [1,0,0,3,12]
// [1,3,0,0,12]
//      w
// [1,3,12,0,0]
//         w
// ------
// [0,1,12,3,0]
// [3,1,12,0,0]
//         w
// nums = [0,1] --> ???
//           r

//           w
// nums = [1,0] --> ???
//             r

// if len === 1 -> return nums
// modify in place
// will be at least one element in list
// preserve the order

// write = (find first 0)
// read = write + 1

// while read is less than length
// while read is 0
// advance read
// swap el at read with el at right
// make write where read is
// increment read by 1

// return nums
