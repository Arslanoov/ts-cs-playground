// O(n + r)
export const countingSort = (input: number[]): number[] => {
  let min = 0
  let max = 0

  input.forEach((value) => {
    if (value < min) {
      min = value
    }

    if (value > max) {
      max = value
    }
  })

  const buckets = Array(max - min + 1).fill(0)
  input.forEach((value) => buckets[value - min] += 1)

  for (let i = 1; i < buckets.length; i++) {
    buckets[i] += buckets[i - 1]
  }

  buckets.pop()
  buckets.unshift(0)

  const sorted = Array(input.length).fill(null)
  for (let i = 0; i < input.length; i++) {
    const el = input[i]
    const pos = buckets[el - min]
    sorted[pos] = el
    buckets[el - min] += 1
  }

  return sorted
}
