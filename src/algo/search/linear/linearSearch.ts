// O(n)

export const linearSearchFirst = <T>(items: T[], item: T): number => {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      return i
    }
  }

  return -1
}

export const linearSearchAll = <T>(items: T[], item: T): number[] => {
  const found: number[] = []

  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      found.push(i)
    }
  }

  return found
}
