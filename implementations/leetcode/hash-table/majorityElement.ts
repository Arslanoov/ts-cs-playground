function majorityElement(nums: number[]): number {
  let count: number = 0
  let candidate: number | null = null

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i]
    }

    nums[i] === candidate ? count++ : count--
  }

  return candidate
}