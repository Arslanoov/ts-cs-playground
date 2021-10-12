export class Stack {
  list = []

  push(value) {
    this.list.push(value)
  }

  pop() {
    return this.list.pop() ?? null
  }

  peek() {
    if (this.isEmpty()) {
      return null
    }

    return this.list[this.list.length - 1] ?? null
  }

  isEmpty() {
    return this.getLength() === 0
  }

  getLength() {
    return this.list.length
  }

  toArray() {
    return this.list
  }
}
