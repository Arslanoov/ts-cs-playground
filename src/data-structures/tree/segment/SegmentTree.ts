export interface SegmentTreeInterface {
  initSegmentTree(input: number[]): number[]
  buildSegmentTree(): void
  buildTreeRecursively(left: number, right: number, pos: number): void
  rangeQuery(queryLeft: number, queryRight: number): number
  rangeQueryRecursive(left: number, right: number, queryLeft: number, queryRight: number, pos: number): number
  leftChildIndex(index: number): number
  rightChildIndex(index: number): number
}

export class SegmentTree implements SegmentTreeInterface {
  private readonly input: number[]
  private readonly tree: number[]
  private readonly operation: (...args: number[]) => number
  private readonly operationFallback: number

  public constructor(input: number[], operation: (...args: number[]) => number, operationFallback: number) {
    this.input = input
    this.operation = operation
    this.operationFallback = operationFallback

    this.tree = this.initSegmentTree(input)
    this.buildSegmentTree()
  }

  public initSegmentTree(input: number[]): number[] {
    let treeLength: number
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

  public buildSegmentTree(): void {
    const left = 0
    const right = this.input.length - 1
    const position = 0
    this.buildTreeRecursively(left, right, position)
  }

  public buildTreeRecursively(left: number, right: number, pos: number): void {
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

  public rangeQuery(queryLeft: number, queryRight: number): number {
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

  public rangeQueryRecursive(
    queryLeft: number,
    queryRight: number,
    left: number,
    right: number,
    pos: number
  ): number {
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

  public leftChildIndex(index: number): number {
    return (index * 2) + 1
  }

  public rightChildIndex(index: number): number {
    return (index * 2) + 2
  }

  public get segmentTree() {
    return this.tree
  }
}
