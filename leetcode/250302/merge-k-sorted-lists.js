class MinHeap {
  constructor() {
    this.heap = [];
  }

  add(val) {
    this.heap.push(val);
    this.heap.sort((a, b) => b[0] - a[0]);
  }

  popTop() {
    return this.heap.pop();
  }

  size() {
    return this.heap.length;
  }
}

/*

lists = [
    [1,4,5]
       |
    [1,3,4]
     |
    [2,6]
     |
]

dummy = node - 1 
               C
heap = 

    1
4       2
*/
var mergeKLists = function (lists) {
  let dummy = new ListNode();
  let curr = dummy;
  let heap = new MinHeap();

  for (let i = 0; i < lists.length; i++) {
    const head = lists[i];
    if (head) {
      heap.add([head.val, head]);
    }
  }

  while (heap.size()) {
    const smallest = heap.popTop();
    curr.next = smallest[1];
    const next = smallest[1].next;
    if (next) {
      heap.add([next.val, next]);
    }

    curr = curr.next;
  }

  return dummy.next;
};
