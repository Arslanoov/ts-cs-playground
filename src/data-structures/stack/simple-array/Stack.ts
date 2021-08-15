interface StackInterface<T> {
  push(value: T): void
  pop(): T | null
  peek(): T | null
  isEmpty(): boolean
  getLength(): number
  toArray(): T[]
}

export class Stack<T> implements StackInterface<T> {
  private list: T[] = []

  public push(value: T) {
    this.list.push(value)
  }

  public pop(): T | null {
    return this.list.pop() ?? null
  }

  public peek(): T | null {
    if (this.isEmpty()) {
      return null
    }

    return this.list[this.list.length - 1] ?? null
  }

  public isEmpty(): boolean {
    return this.getLength() === 0
  }

  public getLength(): number {
    return this.list.length
  }

  public toArray(): T[] {
    return this.list
  }
}
