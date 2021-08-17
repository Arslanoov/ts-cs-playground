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

  remove(value) {
    if (!this.head) {
      return null
    }

    let removedNode = null
    while (this.head && this.head.value === value) {
      removedNode = this.head
      this.head = this.head.next
    }

    let currentNode = this.head
    if (currentNode) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          removedNode = currentNode.next
          currentNode.next = currentNode.next.next
        } else {
          currentNode = currentNode.next
        }
      }
    }

    if (this.tail && this.tail.value === value) {
      this.tail = currentNode
    }

    return removedNode
  }

  removeHead() {
    if (!this.head) {
      return null
    }

    const removedNode = this.head
    if (this.head.next) {
      this.head = this.head.next
    } else {
      this.head = null
      this.tail = null
    }

    return removedNode
  }

  removeTail() {
    const removedNode = this.head
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
      return removedNode
    }

    let currentNode = this.head
    while (currentNode) {
      if (currentNode.next === this.tail) {
        currentNode.next = null
      } else {
        currentNode = currentNode.next
      }
    }

    this.tail = currentNode

    return removedNode
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

  reverse() {
    let currentNode = this.head
    let prev = null
    let next = null

    while (currentNode) {
      next = currentNode.next
      currentNode.next = prev
      prev = currentNode
      currentNode = next
    }

    this.tail = this.head
    this.head = prev
  }

  toString() {
    return this.toArray().toString()
  }

  fromArray(list) {
    list.forEach((value) => this.append(value))
  }

  get first() {
    return this.head
  }
}
