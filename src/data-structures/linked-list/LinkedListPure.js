export class LinkedListNode {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`
  }
}

export class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  prepend(value) {
    const node = new LinkedListNode(value)
    node.next = this.head
    this.head = node
    if (!this.tail) {
      this.tail = node
    }
  }

  append(value) {
    const node = new LinkedListNode(value)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
  }

  contains(value) {
    if (!this.head) {
      return false
    }

    let currentNode = this.head
    while (currentNode) {
      if (currentNode.value === value) {
        return true
      }
      currentNode = currentNode.next
    }

    return false
  }

  find(value) {
    if (!this.head) {
      return null
    }

    let currentNode = this.head
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode
      }
      currentNode = currentNode.next
    }

    return null
  }

  toArray() {
    const list = []
    let currentNode = this.head

    while (currentNode) {
      list.push(currentNode.value)
      currentNode = currentNode.next
    }

    return list
  }
}
