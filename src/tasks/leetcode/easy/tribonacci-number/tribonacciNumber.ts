const path: {
  [key: number]: number
} = {}

function tribonacci(n: number): number {
  if (path[n]) return path[n]
  if (n < 1) return 0
  if (n <= 2) return 1

  return path[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3)
}