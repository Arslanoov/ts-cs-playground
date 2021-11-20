function generate(numRows: number): number[][] {
  const result: number[][] = []

  result.push([1])

  for (let i = 1; i < numRows; i++) {
    const row: number[] = []
    row.push(1)

    for (let j = 1; j < i; j++) {
      row.push(result[i - 1][j - 1] + result[i - 1][j])
    }

    row.push(1)
    result.push(row)

  }

  return result
}