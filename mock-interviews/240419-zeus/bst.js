// https://www.pramp.com/challenge/MW75pP53wAtzNPVLPG2b

// get to the right child of inputNode
// if the child exists
// find a smaller node than that node

////////////NOTES\\\\\\\\\\\\\\
// don't refer to a subtree; refer to a node (so we can think recursively)
// this is like a linked list
// avoid if / else - just return early (red flag)
// don't make variables you don't need
// to find edge cases, look at boundaries

function Node(key) {
  function constructor(val = 0, parent = null) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.parent = parent;
  }
}

function findInorderSuccessor(inputNode) {
  // 20
  let curr = inputNode.right; // null

  while (curr) {
    if (!curr.left) return curr;
    curr = curr.left;
  }

  curr = inputNode.parent; // null

  while (curr && curr.val < inputNode.val) {
    curr = curr.parent; // 20
  }

  return curr; //
}

// worst case (given input node at bottom),
// you have to traverse all the way back up
// O(tree height)
// space -> constant, you're just using curr

twelve = new Node(12);
twelve.left = new Node(11);
twelve.right = new Node(14);
nine = new Node(9);
tfive = new Node(25);

nine.left = new Node(5);
nine.right = twelve;

root = new Node(20);
root.left = nine;
root.right = tfive;

nine.parent = root;
tfive.parent = root;

const result = findInorderSuccessor(nine);
console.log(result);
