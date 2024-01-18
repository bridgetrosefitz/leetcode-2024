function reverseLinkedList(list) {
  debugger;
  let prev = null;
  let current = list.head;
  let temp;

  const head = list.tail;
  head.tail = current;

  while (current) {
    debugger;
    temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }

  return head;
}
