import { LinkedList } from "../../linked-list/LinkedListPure"

export class Queue {
  constructor() {
    this.list = new LinkedList()
  }

  enqueue(value) {
    this.list.append(value)
  }

  dequeue() {
    const head = this.list.removeHead()
    return head ? head.value : null
  }

  peek() {
    if (!this.list.first) {
      return null
    }

    return this.list.first.value
  }

  isEmpty() {
    return !this.list.first
  }

  toArray() {
    return this.list.toArray()
  }

  getLength() {
    return this.list.toArray().length
  }
}
