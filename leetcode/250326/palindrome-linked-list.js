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
  let fastPointer = head;
  let slowPointer = head;

  /*
    
        1 - 2 - 2 - 1
                       F
                S
        1 - 2
        3 - 4

        1 - 2 - 2 - 1

        S

        1 - 2 - 3 - 2 - 1
                        F
                S
        
        1 - 2 - 3
        3 - 2 - 1
                   C
                P

        1 - 2 - 3 - X
        P

        1 - 2 - 2 - 1
                      F
                S
        1 - 2 - 2 - 1
        2 - 1

        1 - 2 - 2 - 1
        1 - 2

        1 - 2 - 3 - 2 - 1
                        F
                S

        1 - 2 - 3 - 2 - 1
        F
        3 - 2 - 1
        B



        1 - 3

        1 - 1

        1

    */

  // find middle
  while (fastPointer && fastPointer.next) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
  }

  // get your two lists
  // if fast is not null

  // reverse second LL

  let curr = slowPointer;
  let prev = null;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // check
  let backEndList = prev;
  let frontEndList = head;

  while (backEndList) {
    if (backEndList.val != frontEndList.val) {
      return false;
    }

    backEndList = backEndList.next;
    frontEndList = frontEndList.next;
  }

  return true;
};
