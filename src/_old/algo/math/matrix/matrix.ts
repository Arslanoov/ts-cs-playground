export type MatrixCell = number
export type Matrix = MatrixCell[][] | MatrixCell[][][]
export type Shape = number[]
export type CellIndices = number[]

/// Validation ///

export const getMatrixShape = (matrix: Matrix): Shape => {
  const shapes: Shape = []
  let dimension: Matrix | number = matrix

  while (dimension && Array.isArray(dimension)) {
    shapes.push(dimension.length)
    dimension = (dimension.length && [...dimension][0]) || null
  }

  return shapes
}

export const validateMatrixType = (matrix: Matrix): void | never => {
  if (!matrix || !Array.isArray(matrix) || !Array.isArray(matrix[0])) {
    throw new Error("Invalid matrix")
  }
}

export const validateMatrix2D = (matrix: Matrix): void | never => {
  validateMatrixType(matrix)

  if (getMatrixShape(matrix).length !== 2) {
    throw new Error("Matrix is not 2D")
  }
}

export const validateMatricesSameShape = (first: Matrix, second: Matrix): void | never => {
  validateMatrixType(first)
  validateMatrixType(second)

  const firstShape = getMatrixShape(first)
  const secondShape = getMatrixShape(second)

  if (firstShape.length !== secondShape.length) {
    throw new Error("Matrices have different dimensions")
  }

  while (firstShape.length && secondShape.length) {
    if (firstShape.pop() !== secondShape.pop()) {
      throw new Error("Matrices have different shapes")
    }
  }
}

/////////////

export const generateMatrix = (shape: Shape, generateCell: (index: number[]) => number): Matrix => {
  // TODO: Fix any
  const generateRecursive = (shapeRecursive: Shape, indicesRecursive: CellIndices): any => {
    if (shapeRecursive.length === 1) {
      return Array(shapeRecursive[0])
        .fill(null)
        .map((_, index: number) => generateCell([...indicesRecursive, index])) as Matrix
    }

    const matrix: Matrix = []

    for (let i = 0; i < shapeRecursive[0]; i++) {
      matrix.push(generateRecursive(shapeRecursive.slice(1), [...indicesRecursive, i]))
    }

    return matrix
  }

  return generateRecursive(shape, [])
}

export const generateMatrixWithZeros = (shape: Shape): Matrix => {
  return generateMatrix(shape, () => 0)
}

export const dotMatrix = (first: Matrix, second: Matrix): Matrix => {
  validateMatrix2D(first)
  validateMatrix2D(second)

  const firstShape = getMatrixShape(first)
  const secondShape = getMatrixShape(second)

  if (firstShape[1] !== secondShape[0]) {
    throw new Error("Incapability shapes")
  }

  const output = [firstShape[0], secondShape[1]]
  const outputMatrix = generateMatrixWithZeros(output)

  for (let secondCol = 0; secondCol < second[0].length; secondCol++) {
    for (let firstRow = 0; firstRow < first.length; firstRow++) {
      let sum = 0
      for (let firstCol = 0; firstCol < first[firstRow].length; firstCol++) {
        sum += first[firstRow][firstCol] * second[firstCol][secondCol]
      }
      outputMatrix[firstRow][secondCol] = sum
    }
  }

  return outputMatrix
}

/////////////

export const transposeMatrix = (matrix: Matrix): Matrix => {
  validateMatrix2D(matrix)

  const shape = getMatrixShape(matrix)
  const output = generateMatrixWithZeros([shape[1], shape[0]])

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      output[col][row] = matrix[row][col]
    }
  }

  return output
}

export const traverseMatrix = (matrix: Matrix, visit: (indices: CellIndices, cell: MatrixCell) => void): void => {
  const recursiveTraverse = (recursiveMatrix: Matrix, indices: CellIndices): void => {
    const shape = getMatrixShape(recursiveMatrix)

    if (shape.length === 1) {
      for (let i = 0; i < recursiveMatrix.length; i++) {
        visit([...indices, i], recursiveMatrix[i])
      }
    }

    for (let i = 0; i < recursiveMatrix.length; i++) {
      recursiveTraverse(recursiveMatrix[i], [...indices, i])
    }
  }

  recursiveTraverse(matrix, [])
}

export const getCellAtIndex = (matrix: Matrix, indices: CellIndices): MatrixCell => {
  let cell = matrix[indices[0]]

  for (let i = 1; i < indices.length - 1; i++) {
    cell = cell[indices[i]]
  }

  return cell[indices[indices.length - 1]]
}

export const updateCellAtIndex = (matrix: Matrix, indices: CellIndices, value: MatrixCell): void => {
  let cell = matrix[indices[0]]

  for (let i = 1; i < indices.length - 1; i++) {
    cell = cell[indices[i]]
  }

  cell[indices[indices.length - 1]] = value
}

/////////////

export const operateMatrices = (
  first: Matrix,
  second: Matrix,
  operate: (cellValue: MatrixCell, value: MatrixCell) => MatrixCell
): Matrix => {
  validateMatricesSameShape(first, second)

  const output = generateMatrixWithZeros(getMatrixShape(first))

  traverseMatrix(first,
    (indices: CellIndices, value: MatrixCell) => updateCellAtIndex(output, indices, value)
  )

  traverseMatrix(second, (indices: CellIndices, value: MatrixCell) => {
    const currentCellValue = getCellAtIndex(output, indices)
    updateCellAtIndex(output, indices, operate(currentCellValue, value))
  })

  return output
}

export const sumMatrices = (first: Matrix, second: Matrix): Matrix =>
  operateMatrices(first, second, (cellValue, value) => cellValue + value)

export const subtractMatrices = (first: Matrix, second: Matrix): Matrix =>
  operateMatrices(first, second, (cellValue, value) => cellValue - value)

export const multiplyMatrices = (first: Matrix, second: Matrix): Matrix =>
  operateMatrices(first, second, (cellValue, value) => cellValue * value)
