var copyRandomList = function (head) {
  if (!head) return head;
  let currentOriginal = head;
  const nodeReferences = new Map();

  while (currentOriginal) {
    let currentCopy;
    if (nodeReferences.has(currentOriginal.val)) {
      currentCopy = nodeReferences.get(currentOriginal.val);
    } else {
      currentCopy = new Node(currentOriginal.val);
      nodeReferences.set(currentOriginal.val, currentCopy);
    }

    if (currentOriginal.next) {
      if (nodeReferences.has(currentOriginal.next.val)) {
        currentCopy.next = nodeReferences.get(currentOriginal.next.val);
      } else {
        currentCopy.next = new Node(currentOriginal.next.val);
        nodeReferences.set(currentOriginal.next.val, currentCopy.next);
      }
    }

    if (currentOriginal.random) {
      if (nodeReferences.has(currentOriginal.random.val)) {
        currentCopy.random = nodeReferences.get(currentOriginal.random.val);
      } else {
        currentCopy.random = new Node(currentOriginal.random.val);
        nodeReferences.set(currentOriginal.random.val, currentCopy.random);
      }
    }

    currentOriginal = currentOriginal.next;
    currentCopy = currentCopy.next;
  }

  return nodeReferences.get(head.val);
};
