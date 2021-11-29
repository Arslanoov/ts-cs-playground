function minCostClimbingStairs(costs: number[]): number {
  const minCosts = new Array(costs.length + 1).fill(0)

  for (let i = 2; i < costs.length + 1; i++) {
    minCosts[i] = Math.min(
      minCosts[i - 1] + costs[i - 1],
      minCosts[i - 2] + costs[i - 2]
    )
  }

  return minCosts[minCosts.length - 1]
}