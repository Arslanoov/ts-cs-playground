import { QueueInterface } from "../from-array/Queue"
import { LinkedList } from "../../linked-list/LinkedList"

export class Queue<T> implements QueueInterface<T> {
  private list = new LinkedList<T>()

  enqueue(value: T) {
    this.list.append(value)
  }

  dequeue(): T | null {
    const head = this.list.removeHead()
    return head ? head.value : null
  }

  peek(): T | null {
    if (!this.list.first) {
      return null
    }

    return this.list.first.value
  }

  isEmpty(): boolean {
    return !this.list.first
  }

  toArray(): T[] {
    return this.list.toArray()
  }

  getLength(): number {
    return this.list.toArray().length
  }
}
