function maxSubArray(nums: number[]): number {
  let sum: number = 0
  let maxSum: number = nums[0]

  for (let i = 0; i < nums.length; i++) {
    sum = Math.max(sum, 0)
    sum += nums[i]
    maxSum = Math.max(maxSum, sum)
  }

  return maxSum
}