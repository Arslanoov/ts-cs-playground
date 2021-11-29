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

function hasCycle(head: ListNode | null): boolean {
  const refs = new Set()

  let current: ListNode | null = head
  while (current) {
    if (refs.has(current)) {
      return true
    }
    refs.add(current)
    current = current.next
  }

  return false
}