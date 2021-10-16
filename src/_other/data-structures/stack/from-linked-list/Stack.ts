import { StackInterface } from "../from-array/Stack"
import { LinkedList } from "../../linked-list/LinkedList"

export class Stack<T> implements StackInterface<T> {
  private list = new LinkedList<T>()

  push(value: T) {
    this.list.append(value)
  }

  pop(): T | null {
    const tail = this.list.removeTail()
    return tail ? tail.value : null
  }

  peek(): T | null {
    if (!this.list.last) {
      return null
    }

    return this.list.last.value
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
