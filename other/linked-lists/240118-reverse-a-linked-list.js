function reverseLinkedList(list) {
  let prev = null;
  let current = list.head;
  let temp;

  const head = list.tail;
  head.tail = current;

  while (current) {
    temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }

  return head;
}

function reverseLinkedList(list) {
  let previous = null;
  let current = list.head;

  const head = list.tail;
  head.tail = list.head;

  while (current) {
    const detachedNodePointer = current.next;
    current.next = previous;

    previous = current;
    current = detachedNodePointer;
  }

  return head;
}

function reverseLinkedList(list) {
  let previous = null;
  let current = list.head;

  const head = list.tail;
  head.tail = list.head;

  while (current) {
    const detachedNodePointer = current.next;
    current.next = previous;

    previous = current;
    current = detachedNodePointer;
  }

  return head;
}
