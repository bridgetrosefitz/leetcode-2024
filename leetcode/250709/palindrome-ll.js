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
var isPalindrome = function (head) {
  /*
      INPUTS type length hostile
      - node (head of LL - SINGLY LINKED)
      - empty list >> false
      - single node >> true
      - 1 - 2 - 1

      Node {
          node.val (int)
          node.next
      }

      OUTPUTS type length mutate
      - bool (is a palindrome or not)

      BRUTE FORCE
      - O(n) time and O(n) storage
      - iterate and create a array or string then check that with pointers

      Constant space ; O(n) time

      1 - 2 - 2 - 1
              S
                  F

      1 - 2

      2 - 1 becomes 1 - 2

      // find the middle + 1 >> fast and slow pointers
      // reverse the second half
      // iterate simultaneously
  */

  /*
  
  
  1 > 2 X < 2 < 1
  L1
                C
                   F
            L2
                    Pl
                P
  */

  let list1 = head;
  let curr = head;
  let fast = head;

  while (fast && fast.next) {
    // CHECK WHEN TO STOP
    curr = curr.next;
    fast = fast.next.next;
  }

  // X < 1 < 2 > 3
  //         P
  //             C
  let prev = null;
  while (curr) {
    const placeholder = curr.next;
    curr.next = prev;
    prev = curr;
    curr = placeholder;
  }

  let list2 = prev;
  while (list2) {
    if (list1.val !== list2.val) {
      return false;
    }

    list1 = list1.next;
    list2 = list2.next;
  }

  return true;
};
