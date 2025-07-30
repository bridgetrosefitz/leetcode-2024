/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  if (!head) {
    return null;
  }

  let curr = head;

  /*
    
    1 > 2 > 3 > X
    1*
    
    */

  while (curr) {
    const copy = new Node(curr.val);
    copy.next = curr.next;
    curr.next = copy;
    curr = copy.next;
  }

  curr = head;

  while (curr) {
    if (curr.random) {
      curr.next.random = curr.random.next;
    }

    curr = curr.next.next;
  }

  curr = head;
  const newHead = head.next;

  /*
    // copy needs to point to copy.next.next
    // curr needs to move to the old copy.next
    1   1* >  2 > 2* 
    1 > 2

              Cu
        Co

    1 > 2 > 2*
    1* > 2*
    */
  while (curr) {
    const copy = curr.next;
    curr.next = copy.next;
    curr = copy.next;
    if (copy.next) {
      // if it's the last node, it should point to null, not next's copy, because next is null
      copy.next = copy.next.next;
    }
  }

  return newHead;
};
