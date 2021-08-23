// O(n)
// fib(1) -> [1]
// fib(2) -> [1, 1] (1 + 0)
// fib(3) -> [1, 1, 2] (1 + 1)
// fib(4) -> [1, 1, 2, 3] (1 + 2)
export const fib = (pos: number): number[] => {
  const path: number[] = []
  let current: number = 1
  let prev: number = 0
  let prevCurrent: number = 0

  while (pos > 0) {
    prevCurrent = current
    current = current + prev
    prev = prevCurrent
    path.push(prevCurrent)
    pos--
  }

  return path
}

export const fibValue = (pos: number): number => {
  let current: number = 1
  let prev: number = 0
  let prevCurrent: number = 0

  while (pos > 0) {
    prevCurrent = current
    current = current + prev
    prev = prevCurrent
    pos--
  }

  return prev
}

export const fibRecursionValue = (pos: number, path: {
  [key: number]: number
} = {}): number => {
  if (path[pos]) return path[pos]
  if (pos < 1) return 0
  if (pos === 1) return 1

  return path[pos] = fibRecursionValue(pos - 1, path) + fibRecursionValue(pos - 2, path)
}

export const fibFormula = (pos: number): number => {
  const sqrt = Math.sqrt(5)
  return Math.floor((((1 + sqrt) / 2) ** pos) / sqrt + 0.5)
}
