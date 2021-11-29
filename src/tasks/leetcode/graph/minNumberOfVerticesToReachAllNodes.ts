function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
  const indegree: number[] = new Array(n).fill(0)
  const result: number[] = []

  edges.forEach((edge) => indegree[edge[1]]++)

  for (let i = 0; i < indegree.length; i++) {
    !indegree[i] && result.push(i)
  }

  return result
}