export class DoublyLinkedListNode<T> {
  public constructor(
    public value: T,
    public prev: DoublyLinkedListNode<T> | null = null,
    public next: DoublyLinkedListNode<T> | null = null
  ) {
  }
}

export interface DoublyLinkedListInterface<T> {
  /*push(data: T): void
  unshift(data: T): void

  pop(): void
  shift(): void

  find(index: number): SinglyLinkedListNode<T> | null

  set(index: number, value: T): void
  insert(index: number, node: SinglyLinkedListNode<T>): void

  remove(index: number): void

  reverse(): void

  toArray(): T[]*/
}

export class DoublyLinkedListInterface<T> implements DoublyLinkedListInterface<T> {

}
