import { LinkedList, LinkedListNode } from "../../../data-structures/linked-list/LinkedList"

type Callback<T> = (item: T) => void

const traversalRecursive = <T>(item: LinkedListNode<T>, callback: Callback<T>) => {
  if (item) {
    traversalRecursive(item.next, callback)
    callback(item.value)
  }
}

// O(n)
export const traversalReverse = <T>(list: LinkedList<T>, callback: Callback<T>) => {
  traversalRecursive(list.first, callback)
}
