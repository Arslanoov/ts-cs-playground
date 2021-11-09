function combinationSum(candidates: number[], target: number): number[][] {
  const combinations: number[][] = []

  function combinationSumRecursive(arr: number[], remainToTarget: number, index: number = 0) {
    if (remainToTarget < 0) {
      return
    }

    if (remainToTarget === 0) {
      combinations.push([...arr])
      return
    }

    for (let i = index; i < candidates.length; i++) {
      arr.push(candidates[i])
      combinationSumRecursive(
        arr,
        remainToTarget - candidates[i],
        i
      )
      arr.pop()
    }
  }

  combinationSumRecursive([], target, 0)

  return combinations
}