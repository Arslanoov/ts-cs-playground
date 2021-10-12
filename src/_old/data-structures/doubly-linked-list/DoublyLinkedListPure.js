export class DoublyLinkedListNode {
  constructor(value, next = null, prev = null) {
    this.value = value
    this.next = next
    this.prev = prev
  }

  toString(formatter) {
    return formatter ? formatter(this.value) : `${this.value}`
  }
}

export class DoublyLinkedList {
  constructor(value, next = null, tail = null) {
    this.value = value
    this.next = next
    this.tail = tail
  }

  append(value) {
    const node = new DoublyLinkedListNode(value)

    if (!this.head) {
      this.head = node
      this.tail = node
      return
    }

    this.tail.next = node
    node.prev = this.tail
    this.tail = node
  }

  prepend(value) {
    const node = new DoublyLinkedListNode(value, this.head)
    if (this.head) {
      this.head.prev = node
    }
    this.head = node

    if (!this.tail) {
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
    let currentNode = this.head
    while (currentNode) {
      if (currentNode.value === value) {
        removedNode = currentNode
        // Remove head
        if (removedNode === this.head) {
          this.head = removedNode.next
          if (this.head) {
            this.head.prev = null
          }

          if (removedNode === this.tail) {
            this.tail = null
          }
        } else if (removedNode === this.tail) {
          // Remove tail
          this.tail = removedNode.prev
          this.tail.next = null
        } else {
          // Remove in the middle
          const prev = removedNode.prev
          const next = removedNode.prev
          prev.next = next
          next.prev = prev
        }
      }

      currentNode = currentNode.next
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
      this.head.prev = null
    } else {
      this.head = null
      this.tail = null
    }

    return removedNode
  }

  removeTail() {
    if (!this.tail) {
      return null
    }

    if (this.head === this.tail) {
      const removedNode = this.head
      this.head = null
      this.tail = null
      return removedNode
    }

    const removedNode = this.tail
    this.tail = this.tail.prev
    this.tail.next = null

    return removedNode
  }

  reverse() {
    let currentNode = this.head
    let prev = null
    let next = null

    while (currentNode) {
      next = currentNode.next
      prev = currentNode.prev

      currentNode.next = prev
      currentNode.prev = next

      prev = currentNode
      currentNode = next
    }

    this.tail = this.head
    this.head = prev
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

  fromArray(list) {
    list.forEach((item) => this.append(item))
  }

  toString() {
    return this.toArray().toString()
  }
}
