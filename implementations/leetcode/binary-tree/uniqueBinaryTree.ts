function numTrees(n: number): number {
  return numTreesRecursive(1, n, {})
};

function numTreesRecursive(from: number, to: number, memo): number {
  if (from > to) return 1
  if (memo[`${from}-${to}`]) return memo[`${from}-${to}`]

  let result: number = 0
  for (let i = from; i <= to; i++) {
    let left: number = numTreesRecursive(from, i - 1, memo)
    let right: number = numTreesRecursive(i + 1, to, memo)
    result += left * right
  }

  memo[`${from}-${to}`] = result

  return result
}