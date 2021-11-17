/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeElements(head: ListNode | null, val: number): ListNode | null {
  const dummy = new ListNode(0)
  dummy.next = head

  let prev: ListNode | null = dummy
  let current: ListNode | null = head
  while (current) {
    if (current.val === val) {
      prev.next = current.next
    } else {
      prev = current
    }
    current = current.next
  }

  return dummy.next
}