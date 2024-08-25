import { OLD_singlyLinkedList } from "../../../data-structures/singly-linked-list/OLD_singlyLinkedList"
import { traversalReverse } from "./linkedListTraversalReverse"

describe("Algo: LL traversal reverse", () => {
  it("should traverse linked list", () => {
    const linkedList = new OLD_singlyLinkedList()

    linkedList.push(1)
    linkedList.push(2)
    linkedList.push(3)

    const traversedNodeValues: number[] = []
    const traversalCallback = (nodeValue: number) => {
      traversedNodeValues.push(nodeValue)
    }

    traversalReverse(linkedList, traversalCallback)

    expect(traversedNodeValues).toEqual([3, 2, 1])
  })
})
