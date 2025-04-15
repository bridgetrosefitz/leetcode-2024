function reverse(head) {
  let curr = head;
  let prev = null;

  /*
  
  X <- 1 <- 2 <- 3
                 C   T
                 P

  */
  while (curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
}

class Node {
  constructor(val) {
    this.next = null;
    this.val = val;
  }
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);

one.next = two;
two.next = three;
