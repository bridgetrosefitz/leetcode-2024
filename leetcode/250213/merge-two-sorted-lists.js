/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let pointer1 = list1;
  let pointer2 = list2;

  let dummy = new ListNode();
  let nextPointer = dummy;

  // while(pointer1 || pointer2) {
  //     if(pointer1 && pointer1.val <= pointer2.val) {
  //         nextPointer.next = pointer1
  //         pointer1 = pointer1.next
  //     } else {
  //         nextPointer.next = pointer2
  //         pointer2 = pointer2.next
  //     }

  //     nextPointer = nextPointer.next
  // }

  while (pointer1 || pointer2) {
    // 1 -> 2
    //    P
    // 3 -> 4
    // P

    // D -> 1 -> 2 -> 3

    if (!pointer1) {
      nextPointer.next = pointer2;
      pointer2 = pointer2.next;
    } else if (!pointer2 || pointer1.val <= pointer2.val) {
      nextPointer.next = pointer1;
      pointer1 = pointer1.next;
    } else {
      nextPointer.next = pointer2;
      pointer2 = pointer2.next;
    }

    nextPointer = nextPointer.next;
  }

  return dummy.next;

  // separate if-elses into 3 boxes
  // 1. pointer1 unavailable
  // 2. pointer2 unavailable
  // 3. pointer1 <= pointer2
};
