interface MaxHeapInterface {
  insert(value: number): void
  removeMax(): void
}

export class MaxHeap implements MaxHeapInterface {
  private data: number[] = []

  public insert(value: number): void {
    this.data.push(value)
    this.bubble()
  }

  public removeMax() {
    const first = this.data[0]
    const last = this.data.pop()

    if (this.data.length > 0) {
      this.data[0] = last
      this.sinkDown()
    }

    return first
  }

  public get values(): number[] {
    return this.data
  }

  private sinkDown(): void {
    const first = this.values[0]
    const length = this.values.length

    let index = 0

    while (true) {
      let leftChildIndex = MaxHeap.getLeftChildIndex(index)
      let rightChildIndex = MaxHeap.getRightChildIndex(index)

      let leftChild: number
      let rightChild: number
      let swapIndex: number | null = null

      if (leftChildIndex < length) {
        leftChild = this.data[leftChildIndex]
        if (leftChild > first) {
          swapIndex = leftChildIndex
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.data[rightChildIndex]
        if (
          (swapIndex === null && rightChild > first) ||
          (swapIndex !== null && rightChild > leftChild)
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
      if (el <= parent) {
        break
      }

      this.data[parentIndex] = el
      this.data[index] = parent

      index = parentIndex
    }
  }

  private static getLeftChildIndex(index: number): number {
    return index * 2 + 1
  }

  private static getRightChildIndex(index: number): number {
    return index * 2 + 2
  }
}
