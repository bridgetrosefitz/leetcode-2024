function reverse(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    const temp = curr.next;
    curr.next = prev;

    prev = curr;
    curr = temp;
  }

  return prev;
}
