type Value = {
  value: number,
  min: number
}

class MinStack {
  private container: Value[] = []

  push(val: number): void {
    let prevMin = this.isEmpty() ? val : this.container[this.container.length - 1].min
    this.container.push({
      value: val,
      min: Math.min(prevMin, val)
    })
  }

  pop(): void {
    !this.isEmpty() && this.container.pop()
  }

  top(): number {
    return this.container[this.container.length - 1].value
  }

  getMin(): number {
    return this.container[this.container.length - 1].min
  }

  isEmpty(): boolean {
    return this.container.length === 0
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */