import {SinglyLinkedListNode} from "~/data-structures/singly-linked-list/singlyLinkedList";

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

  find(index: number): SinglyLinkedListNode<T> | null

  /*
  set(index: number, value: T): void
  insert(index: number, node: SinglyLinkedListNode<T>): void

  remove(index: number): void

  reverse(): void*/

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

  public find(index: number): SinglyLinkedListNode<T> | null {
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

  public set(index: number, value: T): void {
    // We can remove this line because find already have this checks
    if (index < 0 || index > this.length) return null

    let nodeToReplace = this.find(index)
    if (!nodeToReplace) {
      return
    }

    nodeToReplace.value = value
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
