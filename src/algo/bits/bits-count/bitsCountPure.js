export const bitsCount = (num) => {
  let count = 0
  while ((1 << count) <= num) {
    count++
  }
  return count
}
