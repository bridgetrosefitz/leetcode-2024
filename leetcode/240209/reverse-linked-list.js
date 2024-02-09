/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // prev = null
  // current = head
  // next = current.next
  // while current.next.next
  // if current.next === null, make current the head
  // save current as temp
  // current.next = prev
  // current = next
  // prev = temp
  if (!head) return null;
  let prev = null;
  let current = head;
  let newHead;

  while (current) {
    if (current.next === null) {
      newHead = current;
    }

    const temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }

  return newHead;
};
