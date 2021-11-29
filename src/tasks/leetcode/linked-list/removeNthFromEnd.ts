function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const first = new ListNode(0)
  first.next = head

  let length: number = 0
  let current: ListNode | null = head

  while (current) {
    current = current.next
    length++
  }

  current = first
  for (let i = length - n; i > 0; i--) {
    current = current.next
  }

  current.next = current.next.next

  return first.next
}