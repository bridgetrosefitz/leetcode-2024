/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  /*
    Length 1
    Length 2
    left equals right
    left is 1
    right is last node
          L.      R
    1 x < 2 < 3 < 4 > 5
                      C
                  P
    count 1 2


    pointer to first node
    get to left node
    store left node
    increment counter every time we increment curr
    reverse until curr is right + 1
    attach node before left to prev
    attach left to curr
    
    */

  /*

    1 > 2 > 4 > 5
    1 > 4 > 2 > 5
            L.   R (4)
    1 >. X < 2 < 4 > 5
                     C.  
                        
                 P       
             L
    L
    R
    1

    L
    R
    1 > 2

        L
        R
    1 > 2

    L.  R
    3   5
        C
           T  
     P       
     L


     
    
    */

  let counter = 1; // 1 2 3 // 1 2
  let curr = head;
  let lastNode = null;
  while (counter < left) {
    // TO DO: CHECK IF WE NEED BOUNDARY CHECK HERE
    lastNode = curr;
    curr = curr.next;
    counter++;
  }

  // curr equals left here
  // counter is left here
  let prev = null;
  let leftNode = curr;
  while (counter <= right) {
    // TO DO: CHECK BOUNDARIES
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
    counter++;
  }

  if (lastNode) {
    lastNode.next = prev;
  } else {
    // if we reversed form the head, the head needs to now be what was right
    head = prev;
  }
  leftNode.next = curr;

  return head;
};
