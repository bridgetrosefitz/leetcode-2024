// check the completeness of a binary tree
// write a function that takes a root of a binary tree; determine if it is a complete binary tree
// complete - every level except possibly the last is completely filled and all nodes in the last level are as far left as possible

function isComplete(root) {
  // discover when we are at the last level // TO DO: what does this mean
  // let currLevel = 0

  // EXAMPLES

  //       1
  //   2       3
  // 4. 5.    6

  //       1
  //   2     3
  // 4. 5.     7

  // keep track of the level we're at
  // visit nodes at curr level (aka nodes in queue)
  // if number of nodes in q does not match the number of nodes we would expect, return false
  // 2^ level

  // QUESTION
  // level order
  // what would my BFS queue look like
  // if a node has no children, what determines whether it's a complete tree or not
  // just by the vales in the q, and how we process the vals in the queue, is there a way to ascertain whether something is valid or invalid
  // return true or false

  if (!root) return true;

  //       1
  //   2       3
  // 4. 5.    6

  //       1
  //   2     3
  // 4.    6
  let isComplete = true;
  const q = [root];
  // [2,3]

  while (q.length) {
    const numberInCurrLevel = q.length; //1 //2
    //[2,3]
    // numInCurrLevel = 2
    let nullChildEncountered = false;
    for (let i = 0; i < numberInCurrLevel; i++) {
      const curr = q.shift(); //1 //2 //
      // if there is null child of any node at this level, there must not be a non-null child after this
      // set a flag when we hit a null child
      // if flag is true when we hit a non-null child, set isComplete to false

      // scenarios: if there's left child blah blah, etc

      if (nullChildEncountered && curr.left) {
        isComplete = false; // TO DO: return as soon as this is false
      }

      if (curr.left) {
        q.push(curr.left);
      } else {
        nullChildEncountered = true;
      }

      // if we have a left child but flag is true

      if (nullChildEncountered && curr.right) {
        isComplete = false;
      }

      if (curr.right) {
        q.push(curr.right);
      } else {
        nullChildEncountered = true;
      }

      nullChildEncountered = false;
    }
  }

  return isComplete;
}

function isCompleteTree(root) {
  let q = [root];
  let seenNull = false;
  while (q.length) {
    let next = q.shift();
    if (!next) {
      if (seenNull) return false;
      seenNull = true;
      continue;
    }
    q.push(next.left);
    q.push(next.right);
  }
  return true;
}
