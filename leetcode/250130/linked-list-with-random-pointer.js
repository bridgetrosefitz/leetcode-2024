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
  /*
        7
                   copy 7
        nextCopy = copy 13
        randomCopy = null

        13

        nextCopy = copy 11
        randomCopy = 

        copy7 - copy13             null
         |__________________________|
    */

  // pass once creating map of original to copy node

  // pass again, attaching copys from map
  if (head === null) {
    return null;
  }

  let curr = head;
  const map = new Map();
  map.set(null, null);

  while (curr) {
    const currCopy = new Node(curr.val);
    map.set(curr, currCopy);
    curr = curr.next;
  }

  curr = head;

  while (curr) {
    const currCopy = map.get(curr);
    const nextCopy = map.get(curr.next);
    const randomCopy = map.get(curr.random);

    currCopy.next = nextCopy;
    currCopy.random = randomCopy;
    curr = curr.next;
  }

  return map.get(head);
};
