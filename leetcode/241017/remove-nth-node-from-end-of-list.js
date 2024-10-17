/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head.next) return null;
  // EDGE CASES
  // 1 node
  // 2 nodes
  // n of 1
  // n equal to length

  // two pointers
  // give one pointer a head start of n (counter of n, move til counter is 0)
  // move each pointer forward by 1 until fast pointer reaches the end (stop when end pointer is at null)
  // remove node at slow pointer
  // return head

  // counter = 2 //1 //0
  // 1 - 2 - 3 - 4 - 5
  //                 F
  //         S

  // counter = 1
  // 1 //0

  // counter = 1 //0
  // 1 - 2

  // counter  = 2 //1 //0
  // 1 - 2

  let fast = head; //1 //2 //3 //4 //5
  let slow = head; //1 //2 //3
  // fast //1 //null
  // slow //1
  // fast //1 //2
  // slow //1 //null
  // fast //1 //2 //null
  // slow //1

  let headStartCounter = n; //2 //1 //0

  while (headStartCounter > 0) {
    fast = fast.next;
    headStartCounter--;
  }

  if (!fast) {
    slow = slow.next;
    return slow;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return slow;
};
