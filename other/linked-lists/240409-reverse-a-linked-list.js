function reverse(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    const temp = curr.next;
    curr.next = prev;

    prev = curr;
    curr = temp;
  }

  // 1 - 2 - 3 - 4
  // P   C   T

  // 2 - 1 - null
}
