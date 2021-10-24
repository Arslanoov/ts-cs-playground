import { BSTNode } from "../../../data-structures/tree/binary-search/binarySearchTree"

/**
 * Diff implementation
 */
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

export const depthFirstSearchPostOrder = (node: BSTNode) => {
  let items: number[] = []

  const traverse = (node: BSTNode) => {
    if (node.left) {
      traverse(node.left)
    }

    if (node.right) {
      traverse(node.right)
    }

    items.push(node.value)
  }

  traverse(node)

  return items
}

export const depthFirstSearchInOrder = (node: BSTNode) => {
  let items: number[] = []

  const traverse = (node: BSTNode) => {
    if (node.left) {
      traverse(node.left)
    }

    items.push(node.value)

    if (node.right) {
      traverse(node.right)
    }
  }

  traverse(node)

  return items
}