var reorderList = function (head) {
  // slow pointer
  // fast pointer
  // let secondList

  // move both pointers until fast pointer reaches the end
  // assign node at slow pointer to secondList

  // reverse nodes in secondList

  // interpolate nodes from each list

  let slowPointer = head;
  let fastPointer = head;
  while (fastPointer.next && fastPointer.next.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  secondList = slowPointer;

  let curr = secondList;
  let prev = null;
  while (curr) {
    const temp = curr.next;
    curr.next = prev;

    prev = curr;

    // when we reach the end, make new head accessible via secondList
    if (!temp) secondList = curr;
    curr = temp;
  }

  let curr1 = head;
  let curr2 = secondList;
  while (curr1) {
    const temp1 = curr1.next;
    const temp2 = curr2.next;

    curr1.next = curr2;
    curr2.next = temp1;

    curr1 = temp1;
    curr2 = temp2;
  }

  return head;
};
