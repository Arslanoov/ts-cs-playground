import { MinHeap } from "../../heap/min/MinHeap"

type CompareReturnValue = -1 | 0 | 1

interface PriorityQueueInterface<T> {
  addItem(item: T, priority: number): void
  removeItem(item: T): void
  changePriority(item: T, priority: number): void
  findByValue(value: T): number[]
  hasValue(value: T): boolean
  comparePriority(first: number, second: number): CompareReturnValue
  compareValue(first: T, second: T): CompareReturnValue
}

export class PriorityQueue<T> extends MinHeap implements PriorityQueueInterface<T> {
  private priorities = new Map<T, number>()

  public addItem(item: T, priority: number = 0): void {
    this.priorities.set(item, priority)
    super.add(item)
  }

  public removeItem(item: T): void {
    super.remove(item)
    this.priorities.delete(item)
  }

  public changePriority(item: T, priority: number): void {
    this.removeItem(item)
    this.addItem(item, priority)
  }

  public findByValue(value: T): number[] {
    return this.find(value)
  }

  public hasValue(value: T): boolean {
    return this.findByValue(value).length > 0
  }

  public pairIsInCorrectOrder(first: number, second: number): boolean {
    return this.comparePriority(first, second) <= 0;
  }

  public comparePriority(first: number, second: number): CompareReturnValue {
    if (this.priorities.get(first) === this.priorities.get(second)) return 0
    return this.priorities.get(first) > this.priorities.get(second) ? 1 : -1
  }

  public compareValue(first: T, second: T): CompareReturnValue {
    if (first === second) return 0
    return first > second ? 1 : -1
  }
}
