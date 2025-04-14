/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

/*
 
    a - b - b - a
            S
                   F
            a - b

    headOfSecond
    curr
    prev

    a - b - a
        S
            F

    a - b - b

 */

var isPalindrome = function (head) {
  // find the middle
  // reverse the back end
  // check if same
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // middle pointer is now at slow

  let curr = slow;
  let prev = null;

  while (curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // prev is now head of back list

  let head1 = head;
  let head2 = prev;
  while (head1 && head2) {
    if (head1.val !== head2.val) {
      return false;
    }
    head1 = head1.next;
    head2 = head2.next;
  }

  return true;

  // make sure lengths are the same / check this case
};
