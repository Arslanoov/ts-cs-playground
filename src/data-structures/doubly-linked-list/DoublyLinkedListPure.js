export class DoublyLinkedListNode {
  constructor(value, next = null, prev = null) {
    this.value = value
    this.next = next
    this.prev = prev
  }

  toString(formatter) {
    return formatter ? formatter(this.value) : `${this.value}`
  }
}
