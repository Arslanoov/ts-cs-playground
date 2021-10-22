import { BinarySearchTree } from "./binarySearchTree"

describe("Binary search tree", () => {
  it("inserts data", () => {
    const tree = new BinarySearchTree()

    tree.insert(10)
    tree.insert(5)
    tree.insert(7)
    tree.insert(3)
    tree.insert(13)
    tree.insert(11)
    tree.insert(15)

    expect(tree.toString()).toBe("3,5,7,10,11,13,15")
  })
})