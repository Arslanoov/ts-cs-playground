function climbStairs(n: number): number {
  const map: number[] = []

  function climbStairsRecursive(current: number) {
    if (current > n) return 0
    if (current === n) return 1
    if (map[current] > 0) {
      return map[current];
    }
    map[current] = climbStairsRecursive(current + 1) + climbStairsRecursive(current + 2)
    return map[current]
  }

  return climbStairsRecursive(0)
}