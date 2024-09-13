class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function hasCycle(head) {
  // https://www.linkedin.com/in/bridgetrosefitzgerald/
  // your code goes here
  // assume singly linked

  // happy example
  // 1 > 2 > 3 > start
  //    S
  //    F

  // 1 > 2 > 3
  //    S
  //        F

  // 1

  //

  // 1 1
  //    S
  //    F

  // 1 > 2 > 3 > 4 > 5 > 1
  //            |.
  //    |

  // edge cases
  // head is null

  // approach
  // while pointer one is not null
  // one pointer moving one node at a time
  // another pointer moving two nodes at a time
  // if nodes are the same, return false
  // else return true

  let pointerSlow = head;
  let pointerFast = head;

  while (pointerFast && pointerFast.next) {
    pointerSlow = pointerSlow.next;
    pointerFast = pointerFast.next.next;
    if (pointerSlow === pointerFast) return true;
  }

  return false;

  // QUESTION - better explanation for O(n) time complexity
}

// Debug your code below
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

// creates a linked list with a cycle: 1 -> 2 -> 3 -> 4 -> 2 (cycle)
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;

console.log(hasCycle(node1));
