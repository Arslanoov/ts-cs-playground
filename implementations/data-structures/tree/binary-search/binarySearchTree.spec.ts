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

  it("finds data", () => {
    const tree = new BinarySearchTree()

    tree.insert(10)
    tree.insert(5)
    tree.insert(7)

    expect(tree.contains(5)).toBeTruthy()
    expect(tree.contains(18)).toBeFalsy()
    expect(tree.contains(1)).toBeFalsy()
    expect(tree.contains(7)).toBeTruthy()
    expect(tree.contains(10)).toBeTruthy()
  })

  it("contains data", () => {
    const tree = new BinarySearchTree()

    tree.insert(10)
    tree.insert(5)
    tree.insert(7)

    expect(tree.contains(5)).toBe(true)
    expect(tree.contains(18)).toBe(false)
    expect(tree.contains(1)).toBe(false)
    expect(tree.contains(7)).toBe(true)
    expect(tree.contains(10)).toBe(true)
  })
})