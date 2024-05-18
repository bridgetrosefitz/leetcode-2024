var insertGreatestCommonDivisors = function (head) {
  const getGCD = (a, b) => {
    // Ensure a is greater than or equal to b
    if (b === 0) {
      return a;
    } else {
      return getGCD(b, a % b);
    }
  };

  let current = head;
  let newNode;
  while (current.next !== null) {
    newNode = new ListNode(getGCD(current.val, current.next.val), null);
    newNode.next = current.next;
    current.next = newNode;

    // shift pointer
    current = newNode.next;
  }

  return head;
};
