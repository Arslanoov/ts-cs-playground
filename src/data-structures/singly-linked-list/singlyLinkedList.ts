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
  toArray(): T[]
}

export class SinglyLinkedList<T> implements SinglyLinkedListInterface<T> {
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
   * Can be replace with O(1) if add length property
   */
  public getLength(): number {
    return this.toArray().length
  }

  private clear(): void {
    this.head = null
    this.tail = null
  }
}
