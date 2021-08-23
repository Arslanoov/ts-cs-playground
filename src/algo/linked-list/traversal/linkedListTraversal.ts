import { LinkedList, LinkedListNode } from "../../../data-structures/linked-list/LinkedList"

// O(n)
export const traversal = <T>(list: LinkedList<T>, callback: (item: T) => void) => {
  let current: LinkedListNode<T> | null = list.first
  while (current) {
    callback(current.value)
    current = current.next
  }
}
