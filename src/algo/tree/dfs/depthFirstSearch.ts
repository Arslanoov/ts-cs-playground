import { BSTNode } from "../../../data-structures/tree/binary-search/binarySearchTree"

export const depthFirstSearchPreOrder = (node: BSTNode) => {
  let items: number[] = []

  items.push(node.value)

  if (node.left) {
    items = items.concat(depthFirstSearchPreOrder(node.left))
  }

  if (node.right) {
    items = items.concat(depthFirstSearchPreOrder(node.right))
  }

  return items
}