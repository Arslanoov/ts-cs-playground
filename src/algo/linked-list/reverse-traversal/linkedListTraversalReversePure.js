const traversalRecursive = (item, callback) => {
  if (item) {
    traversalRecursive(item.next, callback)
    callback(item.value)
  }
}

// O(n)
export const traversalReverse = (list, callback) => {
  traversalRecursive(list.first, callback)
}
