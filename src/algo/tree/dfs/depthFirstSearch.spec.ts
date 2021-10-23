import { BinarySearchTree } from "../../../data-structures/tree/binary-search/binarySearchTree"
import { depthFirstSearchPreOrder } from "./depthFirstSearch"

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
})