import { Queue } from "../../../data-structures/queue/from-linked-list/Queue"
import { BSTNode } from "../../../data-structures/tree/binary-search/binarySearchTree"

export const breadthFirstSearch = (root: BSTNode) => {
  const items: number[] = []

  const queue = new Queue()
  queue.enqueue(root)

  while (!queue.isEmpty()) {
    const node = queue.dequeue()

    items.push(node.value)

    if (node.left) {
      queue.enqueue(node.left)
    }

    if (node.right) {
      queue.enqueue(node.right)
    }
  }

  return items
}