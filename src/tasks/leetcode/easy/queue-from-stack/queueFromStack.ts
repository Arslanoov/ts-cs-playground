class MyQueue {
  firstContainer: number[] = []
  secondContainer: number[] = []

  push(x: number): void {
    this.firstContainer.push(x)
  }

  pop(): number {
    while (this.firstContainer.length > 0) {
      this.secondContainer.push(this.firstContainer.pop())
    }

    let item = this.secondContainer.pop()
    while (this.secondContainer.length > 0) {
      this.firstContainer.push(this.secondContainer.pop())
    }

    return item
  }

  peek(): number {
    return this.firstContainer[0]
  }

  empty(): boolean {
    return !(this.firstContainer.length || this.secondContainer.length)
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */