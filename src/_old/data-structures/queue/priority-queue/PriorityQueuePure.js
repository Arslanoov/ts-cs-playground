import { MinHeap } from "../../heap/min/MinHeapPure"

export class PriorityQueue extends MinHeap {
  priorities = new Map()

  addItem(item, priority = 0) {
    this.priorities.set(item, priority)
    super.add(item)
  }

  removeItem(item) {
    super.remove(item)
    this.priorities.delete(item)
  }

  changePriority(item, priority) {
    this.removeItem(item)
    this.addItem(item, priority)
  }

  findByValue(value) {
    return this.find(value)
  }

  hasValue(value) {
    return this.findByValue(value).length > 0
  }

  pairIsInCorrectOrder(first, second) {
    return this.comparePriority(first, second) <= 0;
  }

  comparePriority(first, second) {
    if (this.priorities.get(first) === this.priorities.get(second)) return 0
    return this.priorities.get(first) > this.priorities.get(second) ? 1 : -1
  }

  compareValue(first, second) {
    if (first === second) return 0
    return first > second ? 1 : -1
  }
}
