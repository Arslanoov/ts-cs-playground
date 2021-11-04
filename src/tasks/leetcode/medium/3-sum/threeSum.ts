function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) return []
  const sortedNums = nums.sort((a: number, b: number) => a - b)

  const results: number[][] = []

  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] > 0) break
    if (i === 0 || sortedNums[i - 1] !== sortedNums[i]) {
      const set = new Set()
      for (let j = i + 1; j < sortedNums.length; j++) {
        if (set.has(-sortedNums[i] - sortedNums[j])) {
          results.push([sortedNums[i], sortedNums[j], -sortedNums[i] - sortedNums[j]])
          while ((j + 1) < sortedNums.length && sortedNums[j] === sortedNums[j + 1]) {
            j++
          }
        }
        set.add(sortedNums[j])
      }
    }
  }

  return results
}