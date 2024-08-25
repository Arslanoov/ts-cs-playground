import { QueueInterface } from "../from-array/Queue"
import { OLD_singlyLinkedList } from "../../singly-linked-list/OLD_singlyLinkedList"

export class Queue<T> implements QueueInterface<T> {
  private list = new OLD_singlyLinkedList<T>()

  enqueue(value: T) {
    this.list.push(value)
  }

  dequeue(): T | null {
    const head = this.list.head
    this.list.remove(0)
    return head ? head.value : null
  }

  peek(): T | null {
    if (!this.list.head) {
      return null
    }

    return this.list.head.value
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
