export const range = (num: number, rangeNum: number = num): number | null => {
  if (rangeNum < 0) return null
  if (rangeNum === 0) return num
  return num + range(num - 1)
}
