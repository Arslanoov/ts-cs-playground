export const traversal = (list, callback) => {
  let current = list.head
  while (current) {
    callback(current.value)
    current = current.next
  }
}
