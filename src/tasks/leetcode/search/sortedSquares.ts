function sortedSquares(nums: number[]): number[] {
  const newArr: number[] = []
  let left: number = 0
  let right: number = nums.length - 1
  let temp: number = 0

  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      temp = nums[left++]
    } else {
      temp = nums[right--]
    }
    newArr[nums.length - i - 1] = temp ** 2
  }

  return newArr
}