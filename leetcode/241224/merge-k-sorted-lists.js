/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
class MinHeap {
  constructor() {
    this.heap = [];
  }

  add(val) {
    this.heap.push(val);
    this.heap.sort((a, b) => b[0] - a[0]);
  }

  peek() {
    return this.heap.at(-1);
  }

  popTop() {
    return this.heap.pop();
  }

  size() {
    return this.heap.length;
  }
}
var mergeKLists = function (lists) {
  // [
  //  [1,4,5],
  //    |
  //  [1,3,4],
  //  |
  //  [2,6]
  //  |
  // ]

  // minHeap

  //              [1, L1]
  //             [1, L2]  [2, L3]

  // const res = new Node()
  // while heap has a size
  // res.next = popTop
  // add item to heap for nodeWeJustUsed.next (if nodeWeJustUsed.next is a thing)

  // consider speed
  // consider empty vs not empty lists
  // otherwise, LL won't throw up as many complicated scenarios as trees

  const minHeap = new MinHeap();
  for (const list of lists) {
    if (list) {
      minHeap.add([list.val, list]);
    }
  }

  const res = new ListNode();
  let curr = res;

  while (minHeap.size()) {
    const min = minHeap.popTop();
    curr.next = min[1];

    const nextNode = min[1].next;
    if (nextNode) {
      minHeap.add([nextNode.val, nextNode]);
    }

    curr = curr.next;
  }

  return res.next;
};
