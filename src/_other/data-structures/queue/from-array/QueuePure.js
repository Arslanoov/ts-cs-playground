export class Queue {
  list = []

  enqueue(value) {
    this.list.push(value)
  }

  dequeue() {
    return this.list.shift() ?? null
  }

  peek() {
    return this.list[0] ?? null
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
