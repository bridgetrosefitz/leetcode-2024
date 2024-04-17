class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(value) {
    // THIS GUY
    // create new Node with value as node's value
    // if there is a tail,
    // make the next value of the tail of the existing linked list equal to the new node
    // else
    // make this.head = new node
    // update tail to be new node
    // update length of the linked list to be current length + 1

    const newNode = new Node(value);
    // const oldTail = this.tail
    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }

    this.tail = newNode;
    this.length++;
  }

  search(value) {
    // THIS GUY
    // make current = head
    // while current,
    // if current.value === value
    // return current
    // current = current.next

    // return null (or something)

    let current = this.head;

    while (current) {
      if (current.value === value) return current;
      current = current.next;
    }

    return null;
  }

  insert(index, value) {}

  remove(index) {}

  // use this method to print out the values as an array
  listToArr() {
    const arr = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return arr;
  }
}

const myLinkedList = new LinkedList();

myLinkedList.add(1); // 1
myLinkedList.add(2); // 1 -> 2
myLinkedList.add(3); // 1 -> 2 -> 3
myLinkedList.add(4); // 1 -> 2 -> 3 -> 4
myLinkedList.add(5); // 1 -> 2 -> 3 -> 4 -> 5

// console.log(myLinkedList.listToArr()); // [1, 2, 3, 4, 5]

console.log(myLinkedList.search(2)); // logs node value
console.log(myLinkedList.search(10)); // null
