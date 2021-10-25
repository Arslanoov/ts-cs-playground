interface MaxHeapInterface {
  insert(value: number): void
}

export class MaxHeap implements MaxHeapInterface {
  private data: number[] = []

  public insert(value: number): void {
    this.data.push(value)
    this.bubble()
  }

  public bubble(): void {
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

  public get values(): number[] {
    return this.data
  }
}
