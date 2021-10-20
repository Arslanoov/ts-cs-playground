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

  pop(): void
  /*unshift(data: T): void

  shift(): void

  find(index: number): SinglyLinkedListNode<T> | null

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

  /**
   * Time Complexity: O(1)
   */
  public push(data: T): void {
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

  public pop(): void {
    if (!this.head) {
      return
    }

    if (this.head === this.tail) {
      return this.clear()
    }

    const temp = this.tail
    this.tail = temp.prev
    this.tail.next = null
    temp.prev = null
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
