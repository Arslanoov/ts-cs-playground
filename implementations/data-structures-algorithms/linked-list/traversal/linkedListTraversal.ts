import { OLD_singlyLinkedList, SinglyLinkedListNode } from "../../../data-structures/singly-linked-list/OLD_singlyLinkedList"

// O(n)
export const traversal = <T>(list: OLD_singlyLinkedList<T>, callback: (item: T) => void) => {
  let current: SinglyLinkedListNode<T> | null = list.head
  while (current) {
    callback(current.value)
    current = current.next
  }
}
