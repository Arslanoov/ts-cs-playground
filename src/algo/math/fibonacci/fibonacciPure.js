// O(n)
// fib(1) -> [1]
// fib(2) -> [1, 1] (1 + 0)
// fib(3) -> [1, 1, 2] (1 + 1)
// fib(4) -> [1, 1, 2, 3] (1 + 2)
export const fib = (pos) => {
  const path = []
  let current = 1
  let prev = 0
  let prevCurrent = 0

  while (pos > 0) {
    prevCurrent = current
    current = current + prev
    prev = prevCurrent
    path.push(prevCurrent)
    pos--
  }

  return path
}

export const fibValue = (pos) => {
  let current = 1
  let prev = 0
  let prevCurrent = 0

  while (pos > 0) {
    prevCurrent = current
    current = current + prev
    prev = prevCurrent
    pos--
  }

  return prev
}

export const fibRecursionValue = (pos, path = {}) => {
  if (path[pos]) return path[pos]
  if (pos < 1) return 0
  if (pos === 1) return 1

  return path[pos] = fibRecursionValue(pos - 1, path) + fibRecursionValue(pos - 2, path)
}

export const fibFormula = (pos) => {
  const sqrt = Math.sqrt(5)
  return Math.floor((((1 + sqrt) / 2) ** pos) / sqrt + 0.5)
}
