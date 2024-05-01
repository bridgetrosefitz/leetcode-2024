class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(val) {
    // CAN YOU HEAR ME? IT'S BRIDGET. IT SEEMS LIKE YOU CAN'T HEAR ME. I'M SO CONFUSED HAHA.
    // I THINK MY INTERNET IS BAD
    // SORRYYYYYY

    // << 1, 2 <<

    // create new node
    const newNode = new Node(val);
    // if there are currently no nodes in queue, make head equal to new node
    if (this.size === 0) this.head = newNode;
    // connect new node to current tail
    if (this.size > 0) this.tail.next = newNode;
    // update tail to be new node
    this.tail = newNode;
    // update size
    this.size++;

    // return something???
    // return 'nice job, you enqueued something hehe'
    return this.head;
  }

  dequeue() {
    // edge case for if no nodes
    if (this.size === 0) return null;
    // make temp variable which stores current head
    const temp = this.head;
    // make head point to head.next
    this.head = temp.next;
    // make temp.next null
    temp.next = null;
    // decrease size
    this.size--;

    if (this.size === 0) this.tail = null;
    // return temp
    return temp;
  }

  // <3 SORRY AGAIN FOR THE DODGY CONNECTION!
  peek() {
    return this.head.val;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.dequeue(); // returns 1
