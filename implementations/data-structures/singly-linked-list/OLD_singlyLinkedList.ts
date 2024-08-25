export class SinglyLinkedListNode<T> {
  public constructor(
    public value: T,
    public next: SinglyLinkedListNode<T> | null = null
  ) {
  }
}

export interface SinglyLinkedListInterface<T> {
  push(data: T): void
  unshift(data: T): void

  pop(): void
  shift(): void

  find(index: number): SinglyLinkedListNode<T> | null

  set(index: number, value: T): void
  insert(index: number, node: SinglyLinkedListNode<T>): void

  remove(index: number): void

  reverse(): void

  toArray(): T[]
  getLength(): number
}

export class OLD_singlyLinkedList<T> implements SinglyLinkedListInterface<T> {
  public head: SinglyLinkedListNode<T> | null = null
  public tail: SinglyLinkedListNode<T> | null = null

  /**
   * Time Complexity: O(1)
   */
  public push(data: T): void {
    const node = new SinglyLinkedListNode(data)
    if (!this.head) {
      this.head = node
      this.tail = node
      return
    }

    this.tail.next = node
    this.tail = node
  }

  /**
   * Time Complexity: O(1)
   */
  public unshift(data: T): void {
    const node = new SinglyLinkedListNode(data)

    const temp = this.head
    this.head = node
    node.next = temp

    if (temp === this.tail) {
      this.tail = this.head.next
    }
  }

  /**
   * Time Complexity: O(n)
   */
  public pop(): void {
    if (this.head === this.tail) {
      this.clear()
      return
    }

    let replaceNode: SinglyLinkedListNode<T> | null = this.head
    while (replaceNode.next !== this.tail) {
      replaceNode = replaceNode.next
    }

    replaceNode.next = null
    this.tail = replaceNode
  }

  /**
   * Time Complexity: O(1)
   */
  public shift(): void {
    if (!this.head) {
      return
    }

    if (this.head === this.tail) {
      this.clear()
      return
    }

    this.head = this.head.next
  }

  /**
   * Time Complexity: O(n)
   */
  public find(index: number): SinglyLinkedListNode<T> | null {
    if (index < 0) return null

    let current = this.head
    for (let i = 0; i < index; i++) {
      if (!current.next) return null
      current = current.next
    }

    return current
  }

  /**
   * Time Complexity: O(n)
   */
  public set(index: number, value: T): void {
    if (index < 0) return null

    let nodeToReplace = this.find(index)
    if (!nodeToReplace) {
      return
    }

    nodeToReplace.value = value
  }

  /**
   * Time Complexity: O(n)
   */
  public insert(index: number, node: SinglyLinkedListNode<T>): void {
    if (index < 0) return null

    let nodeToReplace = index === 0 ? this.head : this.find(index - 1)
    if (!nodeToReplace) {
      return
    }

    nodeToReplace.next = node

    if (nodeToReplace === this.tail) {
      this.tail = node
    }
  }

  /**
   * Time Complexity: O(n)
   */
  public remove(index: number): void {
    if (index < 0) return null
    if (index === 0) return this.shift()

    let nodeToReplace = this.find(index - 1)
    if (!nodeToReplace) {
      return
    }

    if (nodeToReplace.next === this.tail) {
      this.tail = nodeToReplace
    }
    nodeToReplace.next = nodeToReplace.next.next
  }

  /**
   * Time Complexity: O(n)
   */
  public reverse(): void {
    let prev: SinglyLinkedListNode<T> | null = null
    let next: SinglyLinkedListNode<T> | null = null
    let current: SinglyLinkedListNode<T> | null = this.head

    while (current) {
      // Reverse algorithm
      next = current.next
      current.next = prev
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

    let current: SinglyLinkedListNode<T> | null = this.head
    while (current) {
      items.push(current.value)
      current = current.next
    }

    return items
  }

  /**
   * Time Complexity: O(n)
   * Can be replaced with O(1) algorithm if linked list would have length property
   */
  public getLength(): number {
    return this.toArray().length
  }

  private clear(): void {
    this.head = null
    this.tail = null
  }
}
