interface FenwikTreeInterface {
  increase(pos: number, value: number): void
  query(pos: number): number
  queryRange(left: number, right: number): number
}

export class FenwickTree implements FenwikTreeInterface {
  public readonly size: number
  public readonly tree: number[]

  public constructor(size: number) {
    this.size = size
    this.tree = new Array(size + 1).fill(0)
  }

  public increase(pos: number, value: number): void {
    this.checkPosition(pos)

    for (let i = pos; i <= this.size; i += (i & -i)) {
      this.tree[i] += value
    }
  }

  public query(pos: number): number {
    this.checkPosition(pos)

    let sum = 0
    for (let i = pos; i > 0; i -= (i & -i)) {
      sum += this.tree[i]
    }

    return sum
  }

  public queryRange(left: number, right: number): number {
    this.checkRange(left, right)
    return left === 1 ? this.query(right) : (this.query(right) - this.query(left - 1))
  }

  private checkPosition(pos: number): void | never {
    if (pos < 1 || pos > this.size) {
      throw new Error("Out of range")
    }
  }

  private checkRange(left: number, right: number): void | never {
    if (left > right) {
      throw new Error("Incorrect range")
    }
  }
}
