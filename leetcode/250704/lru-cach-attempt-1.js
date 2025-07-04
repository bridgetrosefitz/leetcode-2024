/**
 * @param {number} capacity
 */

 /*
 
 - When put is called, key is created or updated
 - When a new item is inserted, if at capacity, an item is deleted (O1)
 - Access should give you a specific item (O1)
 - Every time an item is accessed, it should be brought to the 'most recent' location

 {
    A: A*,
    B: B*,
    C: C*,
    D: D*
 }

// Most to least recently used
 A* <-> B* <-> C* <-> D*

 */

class Node {
    constructor(data) {
        this.data = data
        this.next
        this.prev
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

}

var LRUCache = function(capacity) {
    this.capacity = capacity
    this.nodes = new DoublyLinkedList
    this.references = {}
};

/** 
 * @param {number} key
 * @return {number}
 */

LRUCache.prototype.updateMostRecent = function(node) {
    // grab next
    // grab prev
    // grab head
    // connect next to prev
    // connect head to self
    // update head

    const next = node.next
    const prev = node.prev
    const head = this.head
    prev.next = next
    node.next = this.nodes.head
    this.nodes.head = node
    
}

LRUCache.prototype.get = function(key) {
    // return data
    // run updateMostRecent
    if(!this.references.hasOwnProperty(key)) {
        throw new Error('Key does not exist')
    }

    const currNode = this.references[key]
    this.updateMostRecent(currNode)
    return currNode.data
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // if key exists, overwrite and run updateMostRecent

    if(this.references.hasOwnProperty(key)) {
        const node = this.references[key]
        node.data = value
        this.updateMostRecent(node)
        return
    }
    
    // if below capacity, just add to both
    const newNode = new Node(value)
    if(Object.keys(this.references).length < this.capacity) {
        const currHead = this.nodes.head
        if(currHead) {
            currHead.prev = newNode
            newNode.next = currHead
        } else {
            this.nodes.tail = newNode
        }
        this.nodes.head = newNode
    // if at capacity, remove, then add to both
    } else {
        // grab tail.prev
        // tail.prev becomes tail
        // grab head
        // newNode.next becomes head
        // head becomes newNode
        const newTail = this.nodes.tail.prev
        newTail.next = null
        this.tail = newTail

        this.nodes.head.prev = newNode
        newNode.next = this.nodes.head
        this.nodes.head = newNode
    }
    this.references[key] = newNode
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */