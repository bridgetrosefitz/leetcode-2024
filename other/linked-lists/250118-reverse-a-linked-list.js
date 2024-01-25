function reverse(list) {
  const head = list;
  head.tail = list.head;

  let previous = null;
  let current = list.head;

  while (current) {
    const detachedNodePointer = current.next;
    current.next = previous;

    previous = current;
    current = detachedNodePointer;
  }

  return head;
}
