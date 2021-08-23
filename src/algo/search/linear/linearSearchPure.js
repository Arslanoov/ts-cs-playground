// O(n)

export const linearSearchFirst = (items, item) => {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      return i
    }
  }

  return -1
}

export const linearSearchAll = (items, item) => {
  const found = []

  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      found.push(i)
    }
  }

  return found
}
