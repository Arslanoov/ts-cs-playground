// [value, reference] -> [value, reference] -> ...

export class LinkedListNode<T> {
  private data: T
  private ref: LinkedListNode<T> | null

  public constructor(value: T, next: LinkedListNode<T> = null) {
    this.data = value
    this.ref = next
  }

  public toString(formatter?: (item: T) => string): string {
    return formatter ? formatter(this.data) : `${this.data}`
  }

  public get value(): T {
    return this.data
  }

  public get next(): LinkedListNode<T> {
    return this.ref
  }

  public set value(value) {
    this.data = value
  }

  public set next(ref) {
    this.ref = ref
  }
}

export interface LinkedListInterface<T> {
  // Insertion
  // Time complexity: O(1)
  // Space complexity: O(n)
  prepend(value: T): void
  append(value: T): void

  // Access
  // Time complexity: O(n)
  // Space complexity: O(n)
  contains(value: T): boolean
  find(value: T): LinkedListNode<T> | null

  // Deletion
  // Time complexity: O(n)
  // Space complexity: O(n)
  remove(value: T): T | null
}

export class LinkedList<T> implements LinkedListInterface<T> {
  private head: LinkedListNode<T> | null = null
  private tail: LinkedListNode<T> | null = null

  public prepend(value): void {
    const node = new LinkedListNode<T>(value)
    node.next = this.head
    this.head = node
    if (!this.tail) {
      this.tail = node
    }
  }

  public append(value): void {
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
      currentNode = currentNode.next
    }
    return list
  }

  public contains(value): boolean {
    if (!this.head) {
      return false
    }

    let currentNode = this.head
    while (currentNode) {
      if (currentNode.value === value) {
        return true
      }
      currentNode = currentNode.next
    }
    return false
  }

  public find(value): LinkedListNode<T> {
    if (!this.head) {
      return null
    }

    let currentNode = this.head
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode
      }
      currentNode = currentNode.next
    }
    return null
  }

  remove(value: T): T | null {
    if (!this.head) {
      return null
    }

    let removedNode = null
    // Remove head
    while (this.head && this.head.value === value) {
      removedNode = this.head
      this.head = this.head.next
    }

    let currentNode = this.head
    if (currentNode) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          removedNode = currentNode.next
          currentNode.next = currentNode.next.next
        } else {
          currentNode = currentNode.next
        }
      }
    }

    // Remove tail
    if (this.tail && this.tail.value === value) {
      this.tail = currentNode
    }

    return removedNode
  }

  removeHead(): LinkedListNode<T> | null {
    if (!this.head) {
      return null
    }

    const removedNode = this.head
    if (this.head.next) {
      this.head = this.head.next
    } else {
      this.head = null
      this.tail = null
    }

    return removedNode
  }

  removeTail(): LinkedListNode<T> | null {
    const removedNode = this.tail
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
      return removedNode
    }

    let currentNode = this.head
    while (currentNode) {
      if (currentNode.next === this.tail) {
        currentNode.next = null
      } else {
        currentNode = currentNode.next
      }
    }

    this.tail = currentNode

    return removedNode
  }

  public reverse(): void {
    let currentNode = this.head
    let prev = null
    let next = null

    while (currentNode) {
      next = currentNode.next
      currentNode.next = prev
      prev = currentNode
      currentNode = next
    }

    this.tail = this.head
    this.head = prev
  }

  public toString(): string {
    return this.toArray().toString()
  }

  public fromArray(list: T[]): void {
    list.forEach((value) => this.append(value))
  }
}
