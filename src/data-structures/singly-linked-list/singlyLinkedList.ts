export class SinglyLinkedListNode<T> {
  public constructor(
    public value: T,
    public next: SinglyLinkedListNode<T> | null = null
  ) {
  }
}

export interface SinglyLinkedListInterface<T> {
  push(data: T): void
  toArray(): T[]
}

export class SinglyLinkedList<T> implements SinglyLinkedListInterface<T> {
  public head: SinglyLinkedListNode<T> | null = null
  public tail: SinglyLinkedListNode<T> | null = null

  public push(data: T): void {
    const node = new SinglyLinkedListNode(data)
    if (!this.head) {
      this.head = node
      return
    }

    let latest: SinglyLinkedListNode<T> | null = this.head
    while (latest.next) {
      latest = latest.next
    }

    latest.next = node
    this.tail = node
  }

  public toArray(): T[] {
    const items: T[] = []

    let current: SinglyLinkedListNode<T> | null = this.head
    while (current) {
      items.push(current.value)
      current = current.next
    }

    return items
  }
}
