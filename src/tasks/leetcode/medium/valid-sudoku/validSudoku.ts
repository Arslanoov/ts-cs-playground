function isValidSudoku(board: string[][]): boolean {
  const rowCounter = [
    new Set(), new Set(), new Set(),
    new Set(), new Set(), new Set(),
    new Set(), new Set(), new Set()
  ]
  const columnCounter = [
    new Set(), new Set(), new Set(),
    new Set(), new Set(), new Set(),
    new Set(), new Set(), new Set()
  ]
  const boxCounter = [
    new Set(), new Set(), new Set(),
    new Set(), new Set(), new Set(),
    new Set(), new Set(), new Set()
  ]

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let value: string = board[i][j]
      if (value === ".") continue

      const boxId: number = (Math.floor(i / 3) * 3) + Math.floor(j / 3)
      if (
        rowCounter[i].has(value) ||
        columnCounter[j].has(value) ||
        boxCounter[boxId].has(value)
      ) {
        return false
      }

      rowCounter[i].add(value)
      columnCounter[j].add(value)
      boxCounter[boxId].add(value)
    }
  }

  return true
}