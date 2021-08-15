interface QueueInterface<T> {
  enqueue(value: T): void
  dequeue(): T | null
  peek(): T | null
  isEmpty(): boolean
  getLength(): number
  toArray(): T[]
}

export class Queue<T> implements QueueInterface<T> {
  private list: T[] = []

  public enqueue(value: T) {
    this.list.push(value)
  }

  public dequeue(): T | null {
    return this.list.shift() ?? null
  }

  public peek(): T | null {
    return this.list[0] ?? null
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
