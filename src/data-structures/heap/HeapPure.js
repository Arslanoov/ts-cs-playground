export class Heap {
  container = []

  // (n * 2) + 1
  getLeftChildIndex(index) {
    return (index * 2) + 1
  }

  // (n * 2) + 2
  getRightChildIndex(index) {
    return (index * 2) + 2
  }

  // floor((n - 1) / 2)
  getParentIndex(index) {
    return Math.floor((index - 1) / 2)
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.container.length
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.container.length
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0
  }

  leftChild(index) {
    return this.container[this.getLeftChildIndex(index)]
  }

  rightChild(index) {
    return this.container[this.getRightChildIndex(index)]
  }

  parent(index) {
    return this.container[this.getParentIndex(index)]
  }

  swap(first, second) {
    const temp = this.container[second]
    this.container[second] = this.container[first]
    this.container[first] = temp
  }

  peek() {
    return this.container[0] ?? null
  }

  pool() {
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

  find(item) {
    const foundItems = []
    for (let itemIndex = 0; itemIndex < this.container.length; itemIndex++) {
      if (item === this.container[itemIndex]) {
        foundItems.push(itemIndex)
      }
    }

    return foundItems
  }

  add(item) {
    this.container.push(item)
    this.heapifyUp()
  }

  remove(item) {
    const itemsToRemove = this.find(item).length
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

  heapifyUp(startIndex) {
    let current = startIndex || this.container.length - 1
    while (
      this.hasParent(current) &&
      !this.pairIsInCorrectOrder(this.parent(current), this.container[current])
    ) {
      this.swap(current, this.getParentIndex(current))
      current = this.getParentIndex(current)
    }
  }

  heapifyDown(startIndex = 0) {
    let current = startIndex
    let next = null

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

  pairIsInCorrectOrder(first, second) {
    throw new Error("TODO: Implement function")
  }

  isEmpty() {
    return this.container.length === 0
  }

  toString() {
    return this.container.toString()
  }
}
