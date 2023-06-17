import { SinglyLinkedList, SinglyLinkedListNode } from "../../../data-structures/singly-linked-list/singlyLinkedList"

// O(n)
export const traversal = <T>(list: SinglyLinkedList<T>, callback: (item: T) => void) => {
  let current: SinglyLinkedListNode<T> | null = list.head
  while (current) {
    callback(current.value)
    current = current.next
  }
}
