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
  /*

        attach a dummy pointer to list
        one pass to find length of list (without dummy)
        send pointer to length - nth node (starting at dummy)
        connect curr to curr.next.next (if curr.next exists - MAYBE DONT NEED THIS CHECK)
        return next node to dummy

        D - 1 - 2 - 3 - 4 - 5, 2
                              S
                    C

        D- 1 - 2 - 3 - 4 - 5, 1
                       |
                   C            

        D - 1 - 2, 2
        >> 2

        D - 1 - 2, 1
        >> 1
        
        1, 1
        
    */

  let start = head;
  let length = 0; // 5

  while (start) {
    length++;
    start = start.next;
  }

  const dummy = new ListNode();
  dummy.next = head;

  let curr = dummy;
  let location = 0; // 1 2. 3

  while (location < length - n) {
    /* 3 */ curr = curr.next;
    location++;
  }

  curr.next = curr.next.next;

  return dummy.next;
};
