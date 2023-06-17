function findJudge(n: number, trust: number[][]): number {
  if (trust.length < (n - 1)) return -1

  const indegree: number[] = new Array(n + 1).fill(0)
  const outdegree: number[] = new Array(n + 1).fill(0)

  for (let rel of trust) {
    outdegree[rel[0]] = (outdegree[rel[0]] ?? 0) + 1
    indegree[rel[1]] = (indegree[rel[1]] ?? 0) + 1
  }

  for (let j = 1; j <= n; j++) {
    if (outdegree[j] === 0 && indegree[j] === (n - 1)) {
      return j
    }
  }

  return -1
}