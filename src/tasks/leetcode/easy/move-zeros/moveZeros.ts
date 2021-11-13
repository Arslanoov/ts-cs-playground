/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let lastZero: number = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastZero] = nums[i]
      lastZero++
    }
  }

  for (let j = lastZero; j < nums.length; j++) {
    nums[j] = 0
  }
}