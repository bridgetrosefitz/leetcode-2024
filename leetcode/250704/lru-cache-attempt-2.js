/**
 * @param {number} capacity
 */

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.references = new Map();
  this.head = new Node(-1, -1);
  this.tail = new Node(-1, -1);
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.references.has(key)) {
    return -1;
  }

  let node = this.references.get(key);
  this.remove(node);
  this.add(node);
  return node.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.references.has(key)) {
    this.remove(this.references.get(key));
  }

  let node = new Node(key, value);
  this.add(node);
  this.references.set(key, node);
  if (this.references.size > this.capacity) {
    let nodeToDelete = this.head.next;
    this.remove(nodeToDelete);
    this.references.delete(nodeToDelete.key);
  }
};

LRUCache.prototype.add = function (node) {
  let prev = this.tail.prev;
  prev.next = node;
  node.prev = prev;
  node.next = this.tail;
  this.tail.prev = node;
};

LRUCache.prototype.remove = function (node) {
  let prev = node.prev;
  let next = node.next;
  prev.next = next;
  next.prev = prev;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
