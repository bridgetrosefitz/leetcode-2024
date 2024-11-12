function reverse(head) {
  // 1   2 > 3 > X
  //  P   C   N

  // X < C <

  // hang onto next
  // make current.next = prev
  // prev becomes current
  // current becomes temp (old next)

  let prev = null;
  let curr = head;
  while (curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    if (temp === null) {
      return curr;
    }
    curr = temp;
  }
}

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
