// O(n)
// fib(1) -> [1]
// fib(2) -> [1, 1] (1 + 0)
// fib(3) -> [1, 1, 2] (1 + 1)
// fib(4) -> [1, 1, 2, 3] (1 + 2)

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
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

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
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

/**
 * Dynamic programming approach (memoization)
 * Time Complexity: O(n) (instead of O(2^n) without DP)
 */
export const fibDP = (pos: number, path: {
  [key: number]: number
} = {}): number => {
  if (path[pos]) return path[pos]
  if (pos < 1) return 0
  if (pos === 1) return 1

  return path[pos] = fibDP(pos - 1, path) + fibDP(pos - 2, path)
}

/**
 * Time Complexity: O(1)
 */
export const fibFormula = (pos: number): number | null => {
  if (pos > 70 || pos < 1) return null
  const sqrt = Math.sqrt(5)
  return Math.floor((((1 + sqrt) / 2) ** pos) / sqrt + 0.5)
}
