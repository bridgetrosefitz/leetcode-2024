function reverse(head) {
  if (!this.head.next) {
    return this.head;
  }
  let previous = null;
  let current = head;
  head = head.tail;

  while (current) {
    const detachedNode = current.next;

    // swap direction
    current.next = previous;
    // update pointers
    previous = current;
    current = detachedNode;
  }

  return head;
}
