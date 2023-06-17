function twoSum(numbers: number[], target: number): [number, number] {
  let start: number = 0
  let end: number = numbers.length - 1
  let tempSum: number

  while (start <= end) {
    tempSum = numbers[start] + numbers[end]
    if (tempSum === target) {
      return [start + 1, end + 1]
    }

    tempSum > target ? end-- : start++
  }

  return [0, 0]
}