export class FenwickTree {
  constructor(size) {
    this.size = size
    this.tree = new Array(size + 1).fill(0)
  }

  increase(pos, value) {
    this.checkPosition(pos)

    for (let i = pos; i <= this.size; i += (i & -i)) {
      this.tree[i] += value
    }
  }

  query(pos) {
    this.checkPosition(pos)

    let sum = 0
    for (let i = pos; i > 0; i -= (i & -i)) {
      sum += this.tree[i]
    }

    return sum
  }

  queryRange(left, right) {
    this.checkRange(left, right)
    return left === 1 ? this.query(right) : (this.query(right) - this.query(left - 1))
  }

  checkPosition(pos) {
    if (pos < 1 || pos > this.size) {
      throw new Error("Out of range")
    }
  }

  checkRange(left, right) {
    if (left > right) {
      throw new Error("Incorrect range")
    }
  }
}
