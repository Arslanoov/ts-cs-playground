import { LinkedList } from "../../linked-list/LinkedListPure"

export class Stack {
  constructor() {
    this.list = new LinkedList()
  }

  push(value) {
    this.list.append(value)
  }

  pop() {
    const tail = this.list.removeTail()
    return tail ? tail.value : null
  }

  peek() {
    if (!this.list.last) {
      return null
    }

    return this.list.last.value
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
