function singleNumber(nums: number[]): number {
  const map = {}

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] ?? 0) + 1
  }

  return Number(Object.keys(map).find((key) => map[key] === 1))
}