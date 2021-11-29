function searchInsert(nums: number[], target: number): number {
  let middle: number = 0
  let left: number = 0
  let right: number = nums.length - 1

  while (left <= right) {
    middle = left + Math.floor((right - left) / 2)
    if (nums[middle] === target) {
      return middle
    } else if (nums[middle] < target) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }

  return left
}