import { SinglyLinkedList } from "../../../data-structures/singly-linked-list/singlyLinkedList"
import { traversalReverse } from "./linkedListTraversalReverse"

describe("Algo: LL traversal reverse", () => {
  it("should traverse linked list", () => {
    const linkedList = new SinglyLinkedList()

    linkedList.push(1)
    linkedList.push(2)
    linkedList.push(3)

    const traversedNodeValues = []
    const traversalCallback = (nodeValue) => {
      traversedNodeValues.push(nodeValue)
    }

    traversalReverse(linkedList, traversalCallback)

    expect(traversedNodeValues).toEqual([3, 2, 1])
  })
})
