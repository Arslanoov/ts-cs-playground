export const bitsCount = (num: number): number => {
  let count: number = 0
  while ((1 << count) <= num) {
    count++
  }
  return count
}
