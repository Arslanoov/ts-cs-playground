import { StackInterface } from "../from-array/Stack"
import { DoublyLinkedList } from "../.././doubly-linked-list/doublyLinkedList"

export class Stack<T> implements StackInterface<T> {
  private list = new DoublyLinkedList<T>()

  push(value: T) {
    this.list.push(value)
  }

  pop(): T | null {
    const tail = this.list.tail
    this.list.remove(this.list.length - 1)
    return tail ? tail.value : null
  }

  peek(): T | null {
    if (!this.list.tail) {
      return null
    }

    return this.list.tail.value
  }

  isEmpty(): boolean {
    return !this.list.head
  }

  toArray(): T[] {
    return this.list.toArray()
  }

  getLength(): number {
    return this.list.toArray().length
  }
}
