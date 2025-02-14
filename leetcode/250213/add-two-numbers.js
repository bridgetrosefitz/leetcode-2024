/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 2 -> 4 -> 3 (342)
  // 5 -> 6 -> 4 (465)
  // 7 -> 0 -> 8 (807)

  // 9
  // 1
  // 0 -> 1

  // 9      (9)
  // 1 -> 1 (11)
  // 0 -> 2 (20)

  let carry = 0;
  let pointer1 = l1;
  let pointer2 = l2;

  let dummy = new ListNode();
  let nextPointer = dummy;

  while (pointer1 || pointer2) {
    let next = new ListNode();
    if (!pointer1) {
      next.val = pointer2.val + carry;
      pointer2 = pointer2.next;
    } else if (!pointer2) {
      next.val = pointer1.val + carry;
      pointer1 = pointer1.next;
    } else {
      // 8
      // 1

      // 9
      next.val = pointer1.val + pointer2.val + carry;
      pointer1 = pointer1.next;
      pointer2 = pointer2.next;
    }

    if (next.val >= 10) {
      carry = 1;
      next.val = next.val - 10;
    } else {
      carry = 0;
    }

    nextPointer.next = next;
    nextPointer = nextPointer.next;
  }

  // if there's carry leftover
  if (carry) {
    nextPointer.next = new ListNode(1);
  }

  return dummy.next;
};
