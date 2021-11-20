function searchMatrix(matrix: number[][], target: number): boolean {
  let start: number = 0
  let end: number = matrix.length - 1
  let med: number

  while (start <= end) {
    med = start + Math.floor((end - start) / 2)
    if (matrix[med][0] <= target && matrix[med][matrix[med].length - 1] >= target) {
      const row: number[] = matrix[med]
      start = 0
      end = row.length - 1

      while (start <= end) {
        med = start + Math.floor((end - start) / 2)
        if (row[med] === target) {
          return true
        } else if (row[med] < target) {
          start = med + 1
        } else {
          end = med - 1
        }
      }

      return false
    } else if (matrix[med][0] < target) {
      start = med + 1
    } else if (matrix[med][matrix[med].length - 1] > target) {
      end = med - 1
    }
  }

  return false
}