import { OLD_singlyLinkedList, SinglyLinkedListNode } from "../../../data-structures/singly-linked-list/OLD_singlyLinkedList"
import { traversal } from "./linkedListTraversal"

/**
 * @see https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/linked-list/traversal/__test__/traversal.test.js
 * TODO: Write my own tests
 */
describe("Algo: LL traversal", () => {
  it("should traverse linked list", () => {
    const linkedList = new OLD_singlyLinkedList()

    linkedList.push(1)
    linkedList.push(2)
    linkedList.push(3)

    const traversedNodeValues: SinglyLinkedListNode<number>[] = []
    const traversalCallback = (nodeValue: SinglyLinkedListNode<number>) => {
      traversedNodeValues.push(nodeValue)
    }

    traversal(linkedList, traversalCallback)

    expect(traversedNodeValues).toEqual([1, 2, 3])
  })
})
