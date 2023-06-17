function merge(intervals: number[][]): number[][] {
  const result: number[][] = []
  intervals.sort((interval1: number[], interval2: number[]) => interval1[0] - interval2[0])

  for (let i = 0; i < intervals.length; i++) {
    if (result.length === 0 || intervals[i][0] > result[result.length - 1][1]) {
      result.push(intervals[i])
    } else if (result[result.length - 1][1] < intervals[i][1]) {
      result[result.length - 1][1] = intervals[i][1]
    }
  }

  return result
}