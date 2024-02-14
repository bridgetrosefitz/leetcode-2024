const reverse = function (list) {
  let curr = list;
  let prev = null;

  while (curr) {
    // hold node we're about to detach
    const temp = curr.next;

    // point curr to prev
    curr.next = prev;

    // prev = curr
    prev = curr;

    // curr = temp
    curr = temp;
  }
};
