export class DoublyLinkedListNode<T> {
  public constructor(
    public value: T,
    public prev: DoublyLinkedListNode<T> | null = null,
    public next: DoublyLinkedListNode<T> | null = null
  ) {
  }
}

export interface DoublyLinkedListInterface<T> {
  push(data: T): void
  unshift(data: T): void

  pop(): void
  shift(): void

  find(index: number): DoublyLinkedListNode<T> | null

  set(index: number, value: T): void
  insert(index: number, node: DoublyLinkedListNode<T>): void

  remove(index: number): void

  reverse(): void

  toArray(): T[]
  getLength(): number
}

export class DoublyLinkedList<T> implements DoublyLinkedListInterface<T> {
  public head: DoublyLinkedListNode<T> | null = null
  public tail: DoublyLinkedListNode<T> | null = null
  public length: number = 0

  /**
   * Time Complexity: O(1)
   */
  public push(data: T): void {
    this.length++

    const node = new DoublyLinkedListNode(data)
    if (!this.head) {
      this.head = node
      this.tail = node
      return
    }

    this.tail.next = node
    node.prev = this.tail
    this.tail = node
  }

  /**
   * Time Complexity: O(1)
   */
  public unshift(data: T): void {
    this.length++

    const node = new DoublyLinkedListNode(data)
    if (!this.head) {
      this.head = node
      this.tail = node
      return
    }

    this.head.prev = node
    node.next = this.head
    this.head = node
  }

  /**
   * Time Complexity: O(1)
   */
  public pop(): void {
    if (!this.head) {
      return
    }

    this.reduceLength()

    if (this.head === this.tail) {
      return this.clear()
    }

    const temp = this.tail
    this.tail = temp.prev
    this.tail.next = null
    temp.prev = null
  }

  /**
   * Time Complexity: O(1)
   */
  public shift(): void {
    if (!this.head) {
      return
    }

    this.reduceLength()

    if (this.head === this.tail) {
      return this.clear()
    }

    const temp = this.head
    this.head = temp.next
    this.head.prev = null
    temp.next = null
  }

  /**
   * Time Complexity: O(n / 2) -> O(n)
   */
  public find(index: number): DoublyLinkedListNode<T> | null {
    if (index < 0 || index > this.length) return null

    let current: DoublyLinkedListNode<T> | null
    const middle = Math.floor(this.length / 2)
    if (index < middle) {
      // Start from tail
      current = this.tail
      for (let i = this.length - 1; i > index; i--) {
        if (!current.prev) return null
        current = current.prev
      }
    } else {
      // Start from head
      current = this.head
      for (let i = 0; i < index; i++) {
        if (!current.next) return null
        current = current.next
      }
    }

    return current
  }

  /**
   * Time Complexity: O(n / 2) -> O(n)
   */
  public set(index: number, value: T): void {
    // We can remove this line because find already have this checks
    if (index < 0 || index > this.length) return null

    let nodeToReplace = this.find(index)
    if (!nodeToReplace) {
      return
    }

    this.length++

    nodeToReplace.value = value
  }

  /**
   * Time Complexity: O(n / 2) -> O(n)
   */
  public insert(index: number, node: DoublyLinkedListNode<T>): void {
    // We can remove this line because find already have this checks
    if (index < 0 || index > this.length) return null

    let nodeToReplace = index === 0 ? this.head : this.find(index - 1)
    if (!nodeToReplace) {
      return
    }

    this.length++

    nodeToReplace.next = node

    if (nodeToReplace === this.tail) {
      this.tail = node
    }
  }

  /**
   * Time Complexity: O(n / 2) or O(1) -> O(n)
   */
  public remove(index: number): void {
    if (index < 0) return null
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    let nodeToRemove = this.find(index)
    if (!nodeToRemove) {
      return
    }

    let prev = nodeToRemove.prev
    let next = nodeToRemove.next

    prev.next = next
    next.prev = prev

    nodeToRemove.prev = null
    nodeToRemove.next = null

    this.reduceLength()
  }

  /**
   * Time Complexity: O(n)
   */
  public reverse(): void {
    let prev: DoublyLinkedListNode<T> | null = null
    let next: DoublyLinkedListNode<T> | null = null
    let current: DoublyLinkedListNode<T> | null = this.head

    while (current) {
      // Reverse algorithm
      next = current.next
      prev = current.prev

      current.next = prev
      current.prev = next

      prev = current
      current = next
    }

    // Swap the head and tail
    this.tail = this.head
    this.head = prev
  }

  /**
   * Time Complexity: O(n)
   */
  public toArray(): T[] {
    const items: T[] = []

    let current: DoublyLinkedListNode<T> | null = this.head
    while (current) {
      items.push(current.value)
      current = current.next
    }

    return items
  }

  /**
   * Time Complexity: O(1)
   */
  public getLength(): number {
    return this.length
  }

  private reduceLength(): void {
    this.length = Math.max(0, this.length - 1)
  }

  private clear(): void {
    this.head = null
    this.tail = null
  }
}
