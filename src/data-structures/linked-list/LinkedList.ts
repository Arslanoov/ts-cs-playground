// [value, reference] -> [value, reference] -> ...

export class LinkedListNode<T, N = null> {
  private data: T
  private ref: LinkedListNode<N> | null

  public constructor(value: T, next: LinkedListNode<N> = null) {
    this.data = value
    this.ref = next
  }

  public toString(formatter?: (item: T) => string): string {
    return formatter ? formatter(this.data) : `${this.data}`
  }

  public get value(): T {
    return this.data
  }

  public get next(): LinkedListNode<N> {
    return this.ref
  }

  public set value(value) {
    this.data = value
  }

  public set next(ref) {
    this.ref = ref
  }
}

export class LinkedList {
  constructor() {

  }
  // Insertion
  // Time complexity: O(1)
  // Space complexity: O(n)
  public append<T>(value: T): void {

  }

  public action(a: number, b: number): number {
    return a + b
  }
}
