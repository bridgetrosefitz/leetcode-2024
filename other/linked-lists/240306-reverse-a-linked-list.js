const reverse = function (head) {
  let curr = head;
  let prev = null;

  while (curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
};
