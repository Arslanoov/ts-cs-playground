export class DoublyLinkedListNode<T> {
  private data: T
  private nextRef: DoublyLinkedListNode<T> | null
  private prevRef: DoublyLinkedListNode<T> | null

  public constructor(value: T, next: DoublyLinkedListNode<T> = null, prev: DoublyLinkedListNode<T> = null) {
    this.data = value
    this.nextRef = next
    this.prevRef = prev
  }

  public toString(formatter?: (item: T) => string): string {
    return formatter ? formatter(this.data) : `${this.data}`
  }

  public get value(): T {
    return this.data
  }

  public get next() {
    return this.nextRef
  }

  public get prev() {
    return this.prevRef
  }

  public set value(value) {
    this.data = value
  }

  public set next(ref) {
    this.nextRef = ref
  }

  public set prev(ref) {
    this.prevRef = ref
  }
}

export interface DoublyLinkedListInterface<T> {
  // Insertion
  // Time complexity: O(1)
  // Space complexity: O(n)
  prepend(value: T): void
  append(value: T): void

  // Access
  // Time complexity: O(n)
  // Space complexity: O(n)
  contains(value: T): boolean
  find(value: T): DoublyLinkedListNode<T> | null

  // Deletion
  // Time complexity: O(n)
  // Space complexity: O(n)
  remove(value: T): T | null
}

export class DoublyLinkedList<T> implements DoublyLinkedListInterface<T> {
  private head: DoublyLinkedListNode<T> | null = null
  private tail: DoublyLinkedListNode<T> | null = null

  public append(value: T): void {
    const node = new DoublyLinkedListNode<T>(value)

    if (!this.head) {
      this.head = node
      this.tail = node
      return
    }

    this.tail.next = node
    node.prev = this.tail
    this.tail = node
  }

  public prepend(value: T): void {
    const node = new DoublyLinkedListNode<T>(value, this.head)
    if (this.head) {
      this.head.prev = node
    }
    this.head = node

    if (!this.tail) {
      this.tail = node
    }
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

  public find(value: T): DoublyLinkedListNode<T> | null {
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

  public remove(value: T): DoublyLinkedListNode<T> | null {
    if (!this.head) {
      return null
    }

    let removedNode: DoublyLinkedListNode<T> | null = null
    let currentNode = this.head
    while (currentNode) {
      if (currentNode.value === value) {
        removedNode = currentNode
        // Remove head
        if (removedNode === this.head) {
          this.head = removedNode.next
          if (this.head) {
            this.head.prev = null
          }

          if (removedNode === this.tail) {
            this.tail = null
          }
        } else if (removedNode === this.tail) {
          // Remove tail
          this.tail = removedNode.prev
          this.tail.next = null
        } else {
          // Remove in the middle
          const prev = removedNode.prev
          const next = removedNode.prev
          prev.next = next
          next.prev = prev
        }
      }

      currentNode = currentNode.next
    }

    return removedNode
  }

  public removeHead(): DoublyLinkedListNode<T> | null {
    if (!this.head) {
      return null
    }

    const removedNode = this.head
    if (this.head.next) {
      this.head = this.head.next
      this.head.prev = null
    } else {
      this.head = null
      this.tail = null
    }

    return removedNode
  }

  public removeTail(): DoublyLinkedListNode<T> | null {
    if (!this.tail) {
      return null
    }

    if (this.head === this.tail) {
      const removedNode = this.head
      this.head = null
      this.tail = null
      return removedNode
    }

    const removedNode = this.tail
    this.tail = this.tail.prev
    this.tail.next = null

    return removedNode
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

  public reverse(): void {
    let currentNode = this.head
    let prev: DoublyLinkedListNode<T> | null = null
    let next: DoublyLinkedListNode<T> | null = null

    while (currentNode) {
      next = currentNode.next
      prev = currentNode.prev

      currentNode.next = prev
      currentNode.prev = next

      prev = currentNode
      currentNode = next
    }

    this.tail = this.head
    this.head = prev
  }

  public fromArray(list: T[]): void {
    list.forEach((item) => this.append(item))
  }

  public toString(): string {
    return this.toArray().toString()
  }
}
