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
  const dummyHead = new ListNode();
  let currentNode = dummyHead;
  let carry = 0;

  while (carry !== 0 || l1 !== null || l2 !== null) {
    if (l1 !== null) {
      carry += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      carry += l2.val;
      l2 = l2.next;
    }
    currentNode.next = new ListNode(carry % 10);
    currentNode = currentNode.next;
    carry = Math.floor(carry / 10);
  }

  return dummyHead.next;
};
