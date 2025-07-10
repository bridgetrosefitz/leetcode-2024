function reverse(node) {
  let prev = null;
  while (node) {
    let temp = node.next;
    node.next = prev;
    prev = node;
    node = temp;
  }

  return prev;
}
