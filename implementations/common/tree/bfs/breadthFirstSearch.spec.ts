import { BinarySearchTree } from "../../../data-structures/tree/binary-search/binarySearchTree"
import { breadthFirstSearch } from "./breadthFirstSearch"

describe("Breadth first search", () => {
  it("works", () => {
    const tree = new BinarySearchTree()

    tree.insert(10)
    tree.insert(5)
    tree.insert(7)
    tree.insert(25)
    tree.insert(1)
    tree.insert(3)

    expect(breadthFirstSearch(tree.root)).toStrictEqual([10, 5, 25, 1, 7, 3])
  })
})