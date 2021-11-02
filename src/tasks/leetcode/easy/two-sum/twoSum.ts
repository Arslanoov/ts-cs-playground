function twoSum(nums: number[], target: number): [number, number] | null {
  const items: {
    [key: number]: number
  } = {}

  nums.forEach((num, index) => items[num] = index)

  for (let i = 0; i < nums.length; i++) {
    if (items[target - nums[i]] && items[target - nums[i]] !== i) {
      return [i, items[target - nums[i]]]
    }
  }

  return null
}