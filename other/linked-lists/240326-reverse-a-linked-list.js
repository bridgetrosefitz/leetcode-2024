const reverse = function (head) {
  let current = head;
  let prev = null;

  while (current) {
    const temp = current.next;
    current.next = prev;

    prev = current;
    current = temp;
  }

  return prev;
};
