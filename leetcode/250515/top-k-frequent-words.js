/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */

class MinHeap {
  constructor() {
    this.heap = [];
  }

  add(val) {
    this.heap.push(val);
    this.heap.sort((a, b) => b[1] - a[1]);
  }

  popTop() {
    return this.heap.pop();
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap.at(-1);
  }

  toArray() {
    return this.heap;
  }
}
/*

      MIN HEAP
      stores the most frequent

    i: 2
    love: 2
    leetcode: 1
    coding: 1

      i
      love



*/

var topKFrequent = function (words, k) {
  // create count

  const frequency = {};
  for (const word of words) {
    frequency[word] = (frequency[word] || 0) + 1;
  }

  // create minheap of size k

  const heap = new PriorityQueue((w1, w2) => {
    if (frequency[w1] === frequency[w2]) {
      return w2.localeCompare(w1); // Lexicographically in reverse
    }
    return frequency[w1] - frequency[w2];
  });

  for (const word of Object.keys(frequency)) {
    heap.enqueue(word);
    if (heap.size() > k) {
      heap.dequeue();
    }
    // if(heap.size() < k) {
    //     heap.enqueue(word)
    // }
    // if(heap.size() > k) {
    //     // if greater frequency than top of heap, pop and enqueue
    //     // if equal frequency, if word is lex before top of heap, pop and add
    //     const currMinMaxFreq = frequency[heap.peek()]

    //     if(frequency[word] > currMinMaxFreq) {
    //         heap.dequeue()
    //         heap.enqueue(word)
    //         continue
    //     }

    //     // if(frequency[word] === currMinMaxFreq) {
    //     //     if(word.localCompare(heap.peek()) < 0) {
    //     //         heap.dequeue()
    //     //         heap.enqueue(word)
    //     //     }
    //     // }
    // }
  }

  // return items in heap as array, sorted
  return heap.toArray().reverse();

  // return Object.entries(frequency).sort((a, b) => {
  //     if(a[1] === b[1]) {
  //         return a[0].localeCompare(b[0])
  //     } else {
  //         return b[1] - a[1]
  //     }
  // }).map(tuple => tuple[0]).slice(0,k)
};
