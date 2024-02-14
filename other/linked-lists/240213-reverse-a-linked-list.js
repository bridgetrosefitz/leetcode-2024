function reverse(head) {
  const tail = head;
  let curr = head.head;
  let prev = null;

  while (curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
    if (!curr) prev.tail = tail;
  }

  return prev;
}
