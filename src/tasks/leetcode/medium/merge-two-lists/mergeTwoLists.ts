function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const newList: ListNode = new ListNode(0)
  let current: ListNode = newList
  let firstPointer: ListNode | null = l1
  let secondPointer: ListNode | null = l2

  while (firstPointer || secondPointer) {
    // If only one list remains
    if (!firstPointer) {
      current.next = secondPointer
      break
    }

    if (!secondPointer) {
      current.next = firstPointer
      break
    }

    // Otherwise
    if (firstPointer.val < secondPointer.val) {
      current.next = firstPointer
      firstPointer = firstPointer.next
    } else {
      current.next = secondPointer
      secondPointer = secondPointer.next
    }

    current = current.next
  }

  return newList.next
}