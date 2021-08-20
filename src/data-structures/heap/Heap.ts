export interface HeapHelpersInterface {
  getLeftChildIndex(index: number): number
  getRightChildIndex(index: number): number
  getParentIndex(index: number): number

  hasLeftChild(index: number): boolean
  hasRightChild(index: number): boolean
  hasParent(index: number): boolean

  leftChild(index: number): number | undefined
  rightChild(index: number): number | undefined
  parent(index: number): number | undefined
}

export interface HeapInterface {
  swap(first: number, second: number): void
  peek(): number | null
  pool(): number | null
  add(item: number): void
  remove(item: number): void
  find(item: number): number[]
  isEmpty(): boolean
  toString(): string
  heapifyUp(startIndex?: number): void
  heapifyDown(startIndex: number): void
  pairIsInCorrectOrder(first: number, second: number): boolean | never
}

export class Heap implements HeapInterface, HeapHelpersInterface {
  private container: number[] = []

  // (n * 2) + 1
  public getLeftChildIndex(index: number): number {
    return (index * 2) + 1
  }

  // (n * 2) + 2
  public getRightChildIndex(index: number): number {
    return (index * 2) + 2
  }

  // floor((n - 1) / 2)
  public getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2)
  }

  public hasLeftChild(index: number): boolean {
    return this.getLeftChildIndex(index) < this.container.length
  }

  public hasRightChild(index: number): boolean {
    return this.getRightChildIndex(index) < this.container.length
  }

  public hasParent(index: number): boolean {
    return this.getParentIndex(index) >= 0
  }

  public leftChild(index: number): number | undefined {
    return this.container[this.getLeftChildIndex(index)]
  }

  public rightChild(index: number): number | undefined {
    return this.container[this.getRightChildIndex(index)]
  }

  public parent(index: number): number | undefined {
    return this.container[this.getParentIndex(index)]
  }

  public swap(first: number, second: number): void {
    const temp = this.container[second]
    this.container[second] = this.container[first]
    this.container[first] = temp
  }

  public peek(): number | undefined {
    return this.container[0] ?? null
  }

  public pool(): number | null {
    if (this.isEmpty()) {
      return null
    }

    if (this.container.length === 1) {
      return this.container.pop()
    }

    const item = this.container[0]

    this.container[0] = this.container.pop()
    this.heapifyDown()

    return item
  }

  public find(item: number): number[] {
    const foundItems: number[] = []
    for (let itemIndex = 0; itemIndex < this.container.length; itemIndex++) {
      if (item === this.container[itemIndex]) {
        foundItems.push(itemIndex)
      }
    }

    return foundItems
  }

  public add(item: number) {
    this.container.push(item)
    this.heapifyUp()
  }

  public remove(item: number) {
    const itemsToRemove: number = this.find(item).length
    for (let i = 0; i < itemsToRemove; i++) {
      const itemToRemove = this.find(item).pop()

      if (itemsToRemove === this.container.length - 1) {
        this.container.pop()
      } else {
        this.container[itemsToRemove] = this.container.pop()
        const parent = this.parent(itemToRemove)
        if (
          this.hasLeftChild(itemToRemove) &&
          (
            !parent ||
            this.pairIsInCorrectOrder(parent, this.container[itemToRemove])
          )
        ) {
          this.heapifyDown(itemToRemove)
        } else {
          this.heapifyUp(itemToRemove)
        }
      }
    }
  }

  public heapifyUp(startIndex?: number): void {
    let current = startIndex || this.container.length - 1
    while (
      this.hasParent(current) &&
      !this.pairIsInCorrectOrder(this.parent(current), this.container[current])
    ) {
      this.swap(current, this.getParentIndex(current))
      current = this.getParentIndex(current)
    }
  }

  public heapifyDown(startIndex: number = 0): void {
    let current = startIndex
    let next: number | null = null

    while (this.hasLeftChild(current)) {
      if (
        this.hasRightChild(current) &&
        !this.pairIsInCorrectOrder(this.rightChild(current), this.leftChild(current))
      ) {
        next = this.getRightChildIndex(current)
      } else {
        next = this.getLeftChildIndex(current)
      }

      if (this.pairIsInCorrectOrder(this.container[current], this.container[next])) {
        break
      }

      this.swap(current, next)
      current = next
    }
  }

  public pairIsInCorrectOrder(first: number, second: number): boolean {
    throw new Error("TODO: Implement function")
  }

  public isEmpty(): boolean {
    return this.container.length === 0
  }

  public toString(): string {
    return this.container.toString()
  }
}
