// [value, reference] -> [value, reference] -> ...

export class LinkedListNode<T, N = unknown> {
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

interface LinkedListInterface<T> {
  // Insertion
  // Time complexity: O(1)
  // Space complexity: O(n)
  prepend(value: T): void
  append(value: T): void
}

export class LinkedList<T> implements LinkedListInterface<T> {
  private head: LinkedListNode<T> | null = null
  private tail: LinkedListNode<T> | null = null

  public prepend(value: T): void {
    const node = new LinkedListNode<T>(value)
    node.next = this.head
    this.head = node
    if (!this.tail) {
      this.tail = node
    }
  }

  public append(value: T): void {
    const node = new LinkedListNode<T>(value)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
  }

  public toArray(): T[] {
    const list: T[] = []
    let currentNode = this.head
    while (currentNode) {
      list.push(currentNode.value)
      currentNode = currentNode.next as LinkedListNode<T> | null
    }
    return list
  }
}
