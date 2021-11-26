/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let i: number = 0
  let left: number = 0
  let right: number = nums.length - 1

  while (i <= right) {
    if (nums[i] === 0) {
      [nums[left], nums[i]] = [nums[i], nums[left]]
      left++
      i++
    }  else if (nums[i] === 1) {
      i++
    } else if (nums[i] === 2) {
      [nums[i], nums[right]] = [nums[right], nums[i]]
      right--
    }
  }
}