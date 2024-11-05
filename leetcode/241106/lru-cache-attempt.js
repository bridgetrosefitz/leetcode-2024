/**
 * @param {number} capacity
 */
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.values = {};
    this.refs = {};
    this.recency = new LinkedList();
  }
}

class Node {
  constructor(prev, next) {
    this.prev = prev;
    this.next = next;
  }
}

class LinkedList {
  constructor(head, tail) {
    this.head = head;
    this.tail = tail;
    this.size = !!head + !!tail;
  }
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  // return value associated with key
  // if key doesn't exist return -1

  // get value from object at key
  if (this.values.hasOwnProperty(key)) {
    return this.values[key];
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // update or add a key-value pair
  // if capacity is exceeded, remove least recently used key

  // if key exists in valuesObject
  // update value at key
  // grab reference to curr node in refs
  // link prev node to ref's next node
  // make curr node point to head of LL

  if (this.values.hasOwnProperty(key)) {
    this.values[key] = value;
    const node = this.refs[key];
    node.prev = node.next;
    this.recency.next = this.recency.head;
    this.recency.head = node;
  } else {
    if (this.recency.size === this.recency.capacity) {
      const deletedItemKey = this.recency.tail.value;
      this.recency.tail = this.recency.tail.prev;
      this.recency.tail.next = null;
      this.values.delete(deletedItemKey);
      this.refs.delete(deletedItemKey);
    }

    const newNode = new Node(key);
    this.values[key] = value;
    this.refs[key] = newNode;
    if (this.head) {
      this.recency.head.next = newNode;
    }
    this.recency.head = newNode;
    this.recency.size++;
  }

  // if key doesn't exist
  // if we've reached capacity
  // detach tail from LL
  // remove value at tail from values
  // remove ref entry from refs
  // add new key
  // add new ref
  // add new node at head
  // update size of linked list
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
