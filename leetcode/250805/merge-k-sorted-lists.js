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
  /*
   
  a 1 > 2 > 3
              a
  b 2 > 3 > 3
              b
  c 3 > 4
          c

                        
                   4c


   res = [1,2,2,3,3,3,3,4]

   Time: O(k * (k * n))
   Space: O(1)

   Time: O(k * n) + k
   
   // build min heap with first val from each list, and pointer to node
   // while there is a value in the heap
   // take the top value and increment pointer + add val at pointer to new heap

    MinHeap {
        add
        popTop
        size
    }

    1
    a
    2 3
    b


   */

  const heap = new MinHeap();

  for (const list of lists) {
    if (list) {
      heap.add([list.val, list]);
    }
  }

  const res = new ListNode();
  let curr = res;

  while (heap.size() > 0) {
    const [val, node] = heap.popTop();

    curr.next = node;
    curr = curr.next;

    if (node.next) {
      heap.add([node.next.val, node.next]);
    }
  }

  return res.next;
};
