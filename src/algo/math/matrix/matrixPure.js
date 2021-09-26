/// Validation ///

export const getMatrixShape = (matrix) => {
  const shapes = []
  let dimension = matrix

  while (dimension && Array.isArray(dimension)) {
    shapes.push(dimension.length)
    dimension = (dimension.length && [...dimension][0]) || null
  }

  return shapes
}

export const validateMatrixType = (matrix) => {
  if (!matrix || !Array.isArray(matrix) || !Array.isArray(matrix[0])) {
    throw new Error("Invalid matrix")
  }
}

export const validateMatrix2D = (matrix) => {
  validateMatrixType(matrix)

  if (getMatrixShape(matrix).length !== 2) {
    throw new Error("Matrix is not 2D")
  }
}

export const validateMatricesSameShape = (first, second) => {
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

export const generateMatrix = (shape, generateCell) => {
  const generateRecursive = (shapeRecursive, indicesRecursive) => {
    if (shapeRecursive.length === 1) {
      return Array(shapeRecursive[0])
        .fill(null)
        .map((_, index) => generateCell([...indicesRecursive, index]))
    }

    const matrix = []

    for (let i = 0; i < shapeRecursive[0]; i++) {
      matrix.push(generateRecursive(shapeRecursive.slice(1), [...indicesRecursive, i]))
    }

    return matrix
  }

  return generateRecursive(shape, [])
}

export const generateMatrixWithZeros = (shape) => {
  return generateMatrix(shape, () => 0)
}

export const dotMatrix = (first, second) => {
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

export const transposeMatrix = (matrix) => {
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

export const traverseMatrix = (matrix, visit) => {
  const recursiveTraverse = (recursiveMatrix, indices) => {
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

export const getCellAtIndex = (matrix, indices) => {
  let cell = matrix[indices[0]]

  for (let i = 1; i < indices.length - 1; i++) {
    cell = cell[indices[i]]
  }

  return cell[indices[indices.length - 1]]
}

export const updateCellAtIndex = (matrix, indices, value) => {
  let cell = matrix[indices[0]]

  for (let i = 1; i < indices.length - 1; i++) {
    cell = cell[indices[i]]
  }

  cell[indices[indices.length - 1]] = value
}

/////////////

export const operateMatrices = (first, second, operate) => {
  validateMatricesSameShape(first, second)

  const output = generateMatrixWithZeros(getMatrixShape(first))

  traverseMatrix(first,
    (indices, value) => updateCellAtIndex(output, indices, value)
  )

  traverseMatrix(second, (indices, value) => {
    const currentCellValue = getCellAtIndex(output, indices)
    updateCellAtIndex(output, indices, operate(currentCellValue, value))
  })

  return output
}

export const sumMatrices = (first, second) =>
  operateMatrices(first, second, (cellValue, value) => cellValue + value)

export const subtractMatrices = (first, second) =>
  operateMatrices(first, second, (cellValue, value) => cellValue - value)

export const multiplyMatrices = (first, second) =>
  operateMatrices(first, second, (cellValue, value) => cellValue * value)
