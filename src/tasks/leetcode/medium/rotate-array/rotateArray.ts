/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const newArr: number[] = []
  for (let i = 0; i < nums.length; i++) {
    newArr[(i + k) % nums.length] = nums[i]
  }

  for (let j = 0; j < nums.length; j++) {
    nums[j] = newArr[j]
  }
}