import { SinglyLinkedList, SinglyLinkedListNode } from "../../../../data-structures/singly-linked-list/singlyLinkedList"

type Callback<T> = (item: T) => void

const traversalRecursive = <T>(item: SinglyLinkedListNode<T>, callback: Callback<T>) => {
  if (item) {
    traversalRecursive(item.next, callback)
    callback(item.value)
  }
}

// O(n)
export const traversalReverse = <T>(list: SinglyLinkedList<T>, callback: Callback<T>) => {
  traversalRecursive(list.head, callback)
}
