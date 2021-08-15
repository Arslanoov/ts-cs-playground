export class DoublyLinkedListNode<T, N = unknown, P = unknown> {
  private data: T
  private nextRef: DoublyLinkedListNode<N> | null
  private prevRef: DoublyLinkedListNode<P> | null

  public constructor(value: T, next: DoublyLinkedListNode<N> = null, prev: DoublyLinkedListNode<P> = null) {
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

  public get next(): DoublyLinkedListNode<N> {
    return this.nextRef
  }

  public get prev(): DoublyLinkedListNode<N> {
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
