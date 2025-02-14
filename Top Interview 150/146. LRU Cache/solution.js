class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.prev = null
    this.next = null
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.cache = new Map()
    this.head = new Node(0, 0) // Dummy head
    this.tail = new Node(0, 0) // Dummy tail
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  // Helper function to add a node right after the head
  addNode(node) {
    node.prev = this.head
    node.next = this.head.next
    this.head.next.prev = node
    this.head.next = node
  }

  // Helper function to remove a node from the linked list
  removeNode(node) {
    node.prev.next = node.next
    node.next.prev = node.prev
  }

  // Helper function to move a node to the head (most recently used)
  moveToHead(node) {
    this.removeNode(node)
    this.addNode(node)
  }

  // Helper function to remove the tail node (least recently used)
  popTail() {
    const res = this.tail.prev
    this.removeNode(res)
    return res
  }

  get(key) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key)
      this.moveToHead(node) // Move the accessed node to the head
      return node.value
    }
    return -1
  }

  put(key, value) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key)
      node.value = value // Update the value
      this.moveToHead(node) // Move the updated node to the head
    } else {
      const newNode = new Node(key, value)
      this.cache.set(key, newNode)
      this.addNode(newNode) // Add the new node to the head
      if (this.cache.size > this.capacity) {
        const tail = this.popTail() // Remove the least recently used node
        this.cache.delete(tail.key)
      }
    }
  }
}
