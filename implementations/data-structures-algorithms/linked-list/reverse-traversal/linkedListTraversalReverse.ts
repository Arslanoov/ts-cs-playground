import { OLD_singlyLinkedList, SinglyLinkedListNode } from "../../../data-structures/singly-linked-list/OLD_singlyLinkedList"

type Callback<T> = (item: T) => void

const traversalRecursive = <T>(item: SinglyLinkedListNode<T>, callback: Callback<T>) => {
  if (item) {
    traversalRecursive(item.next, callback)
    callback(item.value)
  }
}

// O(n)
export const traversalReverse = <T>(list: OLD_singlyLinkedList<T>, callback: Callback<T>) => {
  traversalRecursive(list.head, callback)
}
