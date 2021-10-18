export const getDigit = (num: number, place: number): number => Math.floor(
  Math.abs(num) / (10 ** place)
) % 10

export const getDigitsCount = (num: number): number => num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1

export const getMostDigits = (nums: number[]): number => getDigitsCount(Math.max(...nums))

/**
 * n - input length
 * k - max digit
 * Time Complexity: O(n * k)
 * Space Complexity: O(n + k)
 */
export const radixSort = (input: number[]): number[] => {
  const largestDigit = getMostDigits(input)

  for (let i = 0; i < largestDigit; i++) {
    const buckets = new Array(10).fill(null).map(() => [])
    input.forEach((item) => buckets[getDigit(item, i)].push(item))
    input = [].concat(...buckets)
  }

  return input
}
