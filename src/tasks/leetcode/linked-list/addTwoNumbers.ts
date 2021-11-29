class ListNode {
  public val: number
  public next: ListNode | null

   public constructor(val?: number, next?: ListNode | null) {
      this.val = (val === undefined ? 0 : val)
      this.next = (next === undefined ? null : next)
   }
}

/**
 * Doesn't work for very large numbers
 */
function addTwoNumbersFirst(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  function traverseListRecursive(item: ListNode | null, callback: (value: number, index: number) => void, index: number) {
    if (item !== null) {
      traverseListRecursive(item.next, callback, index + 1)
      callback(item.val, index)
    }
  }

  let firstNumber = 0
  let secondNumber = 0

  traverseListRecursive(l1, (item: number, index: number) => firstNumber += (item * (10 ** index)), 0)
  traverseListRecursive(l2, (item: number, index: number) => secondNumber += (item * (10 ** index)), 0)

  function makeLinkedList(num: number): ListNode {
    const splittedNumbers = num.toString().split("").reverse()
    const firstItem = new ListNode(Number(splittedNumbers[0]))
    let current: ListNode | null = firstItem

    for (let i = 1; i < splittedNumbers.length; i++) {
      current.next = new ListNode(Number(splittedNumbers[i]))
      current = current.next
    }

    return firstItem
  }

  return makeLinkedList(firstNumber + secondNumber)
}

/**
 * Solution
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let current: ListNode | null = new ListNode(0)
  const first = current

  let firstListNode: ListNode | null = l1
  let secondListNode: ListNode | null = l2

  let sum: number = 0

  while (firstListNode || secondListNode) {
    if (firstListNode) {
      sum += firstListNode.val
      firstListNode = firstListNode.next
    }

    if (secondListNode) {
      sum += secondListNode.val
      secondListNode = secondListNode.next
    }

    current.next = new ListNode(sum % 10)
    sum = sum > 9 ? 1 : 0
    current = current.next
  }

  if (sum) {
    current.next = new ListNode(sum)
  }

  return first.next
}