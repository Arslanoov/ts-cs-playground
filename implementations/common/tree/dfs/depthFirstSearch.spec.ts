import { BinarySearchTree } from "../../../data-structures/tree/binary-search/binarySearchTree"
import { depthFirstSearchPreOrder, depthFirstSearchPostOrder, depthFirstSearchInOrder } from "./depthFirstSearch"

describe("Depth first search", () => {
  test("pre order", () => {
    const tree = new BinarySearchTree()

    tree.insert(10)
    tree.insert(6)
    tree.insert(15)
    tree.insert(3)
    tree.insert(8)
    tree.insert(20)

    expect(depthFirstSearchPreOrder(tree.root)).toStrictEqual([10, 6, 3, 8, 15, 20])
  })

  test("post order", () => {
    const tree = new BinarySearchTree()

    tree.insert(10)
    tree.insert(6)
    tree.insert(15)
    tree.insert(3)
    tree.insert(8)
    tree.insert(20)

    expect(depthFirstSearchPostOrder(tree.root)).toStrictEqual([3, 8, 6, 20, 15, 10])
  })

  test("in order", () => {
    const tree = new BinarySearchTree()

    tree.insert(10)
    tree.insert(6)
    tree.insert(15)
    tree.insert(3)
    tree.insert(8)
    tree.insert(20)

    expect(depthFirstSearchInOrder(tree.root)).toStrictEqual([3, 6, 8, 10, 15, 20])
  })
})