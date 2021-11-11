function containsDuplicate1(nums: number[]): boolean {
  const map: {
    [key: number]: boolean
  } = {}

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) return true
    map[nums[i]] = true
  }

  return false
}

function containsDuplicate2(nums: number[]): boolean {
  return new Set(nums).size !== nums.length
}