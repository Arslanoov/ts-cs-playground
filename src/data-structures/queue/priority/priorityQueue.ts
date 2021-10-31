class PriorityItem<T> {
  public constructor(
    public value: T,
    public priority: number
  ) {
  }
}

interface PriorityQueueInterface<T> {
  enqueue(value: T, priority: number): void
  dequeue(): T | null
  isEmpty(): boolean
}

// TODO: Add MinHeap inheritance
export class PriorityQueue<T> implements PriorityQueueInterface<T> {
  private data: PriorityItem<T>[] = []

  public enqueue(value: T, priority: number): void {
    this.data.push(new PriorityItem(value, priority))
    this.bubble()
  }

  public dequeue(): PriorityItem<T> | null {
    const first = this.data[0]
    const last = this.data.pop()

    if (this.data.length > 0) {
      this.data[0] = last
      this.sinkDown()
    }

    return first || null
  }

  public get values(): { priority: number; value: T }[] {
    return this.data.map((item) => ({
      value: item.value,
      priority: item.priority
    }))
  }

  private sinkDown(): void {
    const first = this.values[0]
    const length = this.values.length

    let index = 0

    while (true) {
      let leftChildIndex = PriorityQueue.getLeftChildIndex(index)
      let rightChildIndex = PriorityQueue.getRightChildIndex(index)

      let leftChild: PriorityItem<T>
      let rightChild: PriorityItem<T>
      let swapIndex: number | null = null

      if (leftChildIndex < length) {
        leftChild = this.data[leftChildIndex]
        if (leftChild.priority > first.priority) {
          swapIndex = leftChildIndex
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.data[rightChildIndex]
        if (
          (swapIndex === null && rightChild.priority > first.priority) ||
          (swapIndex !== null && rightChild.priority > leftChild.priority)
        ) {
          swapIndex = rightChildIndex
        }
      }

      if (swapIndex === null) {
        break
      }

      this.data[index] = this.data[swapIndex]
      this.data[swapIndex] = first
      index = swapIndex
    }
  }

  private bubble(): void {
    let index = this.data.length - 1
    const el = this.data[index]

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      let parent = this.data[parentIndex]
      if (el.priority <= parent.priority) {
        break
      }

      this.data[parentIndex] = el
      this.data[index] = parent

      index = parentIndex
    }
  }

  public isEmpty(): boolean {
    return this.data.length === 0
  }

  private static getLeftChildIndex(index: number): number {
    return index * 2 + 1
  }

  private static getRightChildIndex(index: number): number {
    return index * 2 + 2
  }
}
