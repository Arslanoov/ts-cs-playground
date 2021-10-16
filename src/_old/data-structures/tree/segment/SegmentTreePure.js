export class SegmentTree {
  constructor(input, operation, operationFallback) {
    this.input = input
    this.operation = operation
    this.operationFallback = operationFallback

    this.tree = this.initSegmentTree(input)
    this.buildSegmentTree()
  }

  initSegmentTree(input) {
    let treeLength
    const inputLength = input.length

    if (Math.log2(inputLength) % 1 === 0) {
      treeLength = (2 * inputLength) - 1
    } else {
      const current = Math.floor(Math.log2(inputLength))
      const next = current + 1
      const nextPowerOfTwo = 2 ** next
      treeLength = (2 * nextPowerOfTwo) - 1
    }

    return new Array(treeLength).fill(null)
  }

  buildSegmentTree() {
    const left = 0
    const right = this.input.length - 1
    const position = 0
    this.buildTreeRecursively(left, right, position)
  }

  buildTreeRecursively(left, right, pos) {
    if (left === right) {
      this.tree[pos] = this.input[left]
      return
    }

    const middle = Math.floor((left + right) / 2)
    this.buildTreeRecursively(left, middle, this.leftChildIndex(pos))
    this.buildTreeRecursively(middle + 1, right, this.rightChildIndex(pos))

    this.tree[pos] = this.operation(
      this.tree[this.leftChildIndex(pos)],
      this.tree[this.rightChildIndex(pos)],
    )
  }

  rangeQuery(queryLeft, queryRight) {
    const left = 0
    const right = this.input.length - 1
    const pos = 0

    return this.rangeQueryRecursive(
      queryLeft,
      queryRight,
      left,
      right,
      pos,
    )
  }

  rangeQueryRecursive(
    queryLeft,
    queryRight,
    left,
    right,
    pos
  ) {
    if (queryLeft <= left && queryRight >= right) {
      return this.tree[pos]
    }

    if (queryLeft > right || queryRight < left) {
      return this.operationFallback
    }

    const middle = Math.floor((left + right) / 2)
    const leftOperation = this.rangeQueryRecursive(
      queryLeft,
      queryRight,
      left,
      middle,
      this.leftChildIndex(pos)
    )

    const rightOperation = this.rangeQueryRecursive(
      queryLeft,
      queryRight,
      middle + 1,
      right,
      this.rightChildIndex(pos)
    )

    return this.operation(leftOperation, rightOperation)
  }

  leftChildIndex(index) {
    return (index * 2) + 1
  }

  rightChildIndex(index) {
    return (index * 2) + 2
  }

  get segmentTree() {
    return this.tree
  }
}
