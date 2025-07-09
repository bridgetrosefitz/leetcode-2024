/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.references = new Map();
  this.capacity = capacity;
  this.head = new Node(-1, -1);
  this.tail = new Node(-1, -1);
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */

class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

LRUCache.prototype.add = function (node) {
  // add to the tail (aka mru)
  const currMRU = this.tail.prev;
  currMRU.next = node;
  node.prev = currMRU;
  node.next = this.tail;
  this.tail.prev = node;
};

LRUCache.prototype.remove = function (node) {
  const prev = node.prev;
  const next = node.next;

  prev.next = next;
  next.prev = prev;
};

LRUCache.prototype.get = function (key) {
  // if doesn't exist, return null
  // move to front
  if (!this.references.has(key)) {
    return -1;
  }

  const node = this.references.get(key);
  this.remove(node);
  this.add(node);

  return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // if already exists
  // remove node
  // create new node
  // add new node to map
  // remove from hashmap

  if (this.references.has(key)) {
    this.remove(this.references.get(key));
  }

  const newNode = new Node(key, value);
  this.add(newNode);
  this.references.set(key, newNode);

  if (this.references.size > this.capacity) {
    const nodeToDelete = this.head.next;
    this.remove(nodeToDelete);
    this.references.delete(nodeToDelete.key);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
