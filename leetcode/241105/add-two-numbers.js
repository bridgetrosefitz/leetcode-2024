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
  let carryOver = false;
  let remainder = 0;
  let pointer1 = l1;
  let pointer2 = l2;
  const res = new ListNode();
  let resPointer = res; // TO DO: check that we're using the correct head

  // while pointer1 and pointer2 exist
  // let sum
  // val at pointer1 + val at pointer2
  // if carryOver is true
  // add 1 to sum

  while (pointer1 && pointer2) {
    let sum = pointer1.val + pointer2.val;
    if (carryOver) {
      sum += 1;
    }

    if (sum >= 10) {
      remainder = sum % 10;
      carryOver = true;
    } else {
      remainder = sum;
      carryOver = false;
    }

    const newNode = new ListNode(remainder);
    resPointer.next = newNode;
    resPointer = newNode;
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  // 88 >> 8-8
  // 34 >> 4-3
  // 2-2-

  // answer: 1-2-2

  /*
    1
    88
    34
  ----
   122
*/

  while (pointer1) {
    remainder = pointer1.val;
    if (carryOver) {
      remainder += 1;
    }

    if (remainder >= 10) {
      remainder = remainder % 10;
      carryOver = true;
    } else {
      carryOver = false;
    }

    const newNode = new ListNode(remainder);
    resPointer.next = newNode;
    resPointer = newNode;
    pointer1 = pointer1.next;
  }

  while (pointer2) {
    remainder = pointer2.val;
    if (carryOver) {
      remainder += 1;
    }

    if (remainder >= 10) {
      remainder = remainder % 10;
      carryOver = true;
    } else {
      carryOver = false;
    }

    const newNode = new ListNode(remainder);
    resPointer.next = newNode;
    resPointer = newNode;
    pointer2 = pointer2.next;
  }

  if (carryOver) {
    const newNode = new ListNode(1);
    resPointer.next = newNode;
  }

  return res.next;

  // if sum is greater than 10
  // set remainder to be sum % 10
  // set carryOver to true
  // else
  // set carryOver to false

  // create new node with remainder value
  // point res to this node
  // increment pointer1
  // increment pointer2
  // increment pointerRes

  // while pointer1
  // add carryover to node val at pointer1
  // create node etc TO DO (increment, etc)

  // while pointer2
  // add carryover to node val at pointer1
  // create node etc TO DO (increment, etc)

  //

  // return res.next
};
