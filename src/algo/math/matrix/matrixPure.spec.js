import * as mtrx from "./matrixPure"

/**
 * @see https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/matrix/__tests__/Matrix.test.js
 */
describe("Math: Matrix with Vanilla JS", () => {
  it("should throw when trying to add matrices of invalid shapes", () => {
    expect(
      () => mtrx.dotMatrix([0], [1]),
    ).toThrowError("Invalid matrix")
    expect(
      () => mtrx.dotMatrix([[0]], [1]),
    ).toThrowError("Invalid matrix")
    expect(
      () => mtrx.dotMatrix([[[0]]], [[1]]),
    ).toThrowError("Matrix is not 2D")
    expect(
      () => mtrx.dotMatrix([[0]], [[1], [2]]),
    ).toThrowError("Incapability shapes")
  })

  it("should calculate matrices dimensions", () => {
    expect(mtrx.getMatrixShape([])).toEqual([0])

    expect(mtrx.getMatrixShape([
      [],
    ])).toEqual([1, 0])

    expect(mtrx.getMatrixShape([
      [0],
    ])).toEqual([1, 1])

    expect(mtrx.getMatrixShape([
      [0, 0],
    ])).toEqual([1, 2])

    expect(mtrx.getMatrixShape([
      [0, 0],
      [0, 0],
    ])).toEqual([2, 2])

    expect(mtrx.getMatrixShape([
      [0, 0, 0],
      [0, 0, 0],
    ])).toEqual([2, 3])

    expect(mtrx.getMatrixShape([
      [0, 0],
      [0, 0],
      [0, 0],
    ])).toEqual([3, 2])

    expect(mtrx.getMatrixShape([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ])).toEqual([3, 3])

    expect(mtrx.getMatrixShape([
      [0],
      [0],
      [0],
    ])).toEqual([3, 1])

    expect(mtrx.getMatrixShape([
      [[0], [0], [0]],
      [[0], [0], [0]],
      [[0], [0], [0]],
    ])).toEqual([3, 3, 1])

    expect(mtrx.getMatrixShape([
      [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    ])).toEqual([3, 3, 3])
  })

  it("should generate the matrix of zeros", () => {
    expect(mtrx.generateMatrixWithZeros([1, 0])).toEqual([
      [],
    ])

    expect(mtrx.generateMatrixWithZeros([1, 1])).toEqual([
      [0],
    ])

    expect(mtrx.generateMatrixWithZeros([1, 3])).toEqual([
      [0, 0, 0],
    ])

    expect(mtrx.generateMatrixWithZeros([3, 3])).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ])

    expect(mtrx.generateMatrixWithZeros([3, 3, 1])).toEqual([
      [[0], [0], [0]],
      [[0], [0], [0]],
      [[0], [0], [0]],
    ])
  })

  it("should generate the matrix with custom values", () => {
    expect(mtrx.generateMatrix([1, 0], () => 1)).toEqual([
      [],
    ])

    expect(mtrx.generateMatrix([1, 1], () => 1)).toEqual([
      [1],
    ])

    expect(mtrx.generateMatrix([1, 3], () => 1)).toEqual([
      [1, 1, 1],
    ])

    expect(mtrx.generateMatrix([3, 3], () => 1)).toEqual([
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ])

    expect(mtrx.generateMatrix([3, 3, 1], () => 1)).toEqual([
      [[1], [1], [1]],
      [[1], [1], [1]],
      [[1], [1], [1]],
    ])
  })

  it("should multiply two matrices", () => {
    let c
    c = mtrx.dotMatrix(
      [
        [1, 2],
        [3, 4],
      ],
      [
        [5, 6],
        [7, 8],
      ],
    )
    expect(mtrx.getMatrixShape(c)).toEqual([2, 2])
    expect(c).toEqual([
      [19, 22],
      [43, 50],
    ])

    c = mtrx.dotMatrix(
      [
        [1, 2],
        [3, 4],
      ],
      [
        [5],
        [6],
      ],
    )
    expect(mtrx.getMatrixShape(c)).toEqual([2, 1])
    expect(c).toEqual([
      [17],
      [39],
    ])

    c = mtrx.dotMatrix(
      [
        [1, 2, 3],
        [4, 5, 6],
      ],
      [
        [7, 8],
        [9, 10],
        [11, 12],
      ],
    )
    expect(mtrx.getMatrixShape(c)).toEqual([2, 2])
    expect(c).toEqual([
      [58, 64],
      [139, 154],
    ])

    c = mtrx.dotMatrix(
      [
        [3, 4, 2],
      ],
      [
        [13, 9, 7, 5],
        [8, 7, 4, 6],
        [6, 4, 0, 3],
      ],
    )
    expect(mtrx.getMatrixShape(c)).toEqual([1, 4])
    expect(c).toEqual([
      [83, 63, 37, 45],
    ])
  })

  it("should transpose matrices", () => {
    expect(mtrx.transposeMatrix([[1, 2, 3]])).toEqual([
      [1],
      [2],
      [3],
    ])

    expect(mtrx.transposeMatrix([
      [1],
      [2],
      [3],
    ])).toEqual([
      [1, 2, 3],
    ])

    expect(mtrx.transposeMatrix([
      [1, 2, 3],
      [4, 5, 6],
    ])).toEqual([
      [1, 4],
      [2, 5],
      [3, 6],
    ])

    expect(mtrx.transposeMatrix([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])).toEqual([
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ])
  })

  it("should throw when trying to transpose non 2D matrix", () => {
    expect(() => {
      mtrx.transposeMatrix([[[1]]])
    }).toThrowError("Matrix is not 2D")
  })

  it("should add two matrices", () => {
    expect(mtrx.sumMatrices([[1]], [[2]])).toEqual([[3]])

    expect(mtrx.sumMatrices(
      [[1, 2, 3]],
      [[4, 5, 6]],
    ))
      .toEqual(
        [[5, 7, 9]],
      )

    expect(mtrx.sumMatrices(
      [[1], [2], [3]],
      [[4], [5], [6]],
    ))
      .toEqual(
        [[5], [7], [9]],
      )

    expect(mtrx.sumMatrices(
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      [
        [10, 11, 12],
        [13, 14, 15],
        [16, 17, 18],
      ],
    ))
      .toEqual(
        [
          [11, 13, 15],
          [17, 19, 21],
          [23, 25, 27],
        ],
      )

    expect(mtrx.sumMatrices(
      [
        [[1], [2], [3]],
        [[4], [5], [6]],
        [[7], [8], [9]],
      ],
      [
        [[10], [11], [12]],
        [[13], [14], [15]],
        [[16], [17], [18]],
      ],
    ))
      .toEqual(
        [
          [[11], [13], [15]],
          [[17], [19], [21]],
          [[23], [25], [27]],
        ],
      )
  })

  it("should throw when trying to add matrices of different shape", () => {
    expect(() => mtrx.sumMatrices([[0]], [[[0]]])).toThrowError(
      "Matrices have different dimensions",
    )

    expect(() => mtrx.sumMatrices([[0]], [[0, 0]])).toThrowError(
      "Matrices have different shapes",
    )
  })

  it("should do element wise multiplication two matrices", () => {
    expect(mtrx.multiplyMatrices([[2]], [[3]])).toEqual([[6]])

    expect(mtrx.multiplyMatrices(
      [[1, 2, 3]],
      [[4, 5, 6]],
    ))
      .toEqual(
        [[4, 10, 18]],
      )

    expect(mtrx.multiplyMatrices(
      [[1], [2], [3]],
      [[4], [5], [6]],
    ))
      .toEqual(
        [[4], [10], [18]],
      )

    expect(mtrx.multiplyMatrices(
      [
        [1, 2],
        [3, 4],
      ],
      [
        [5, 6],
        [7, 8],
      ],
    ))
      .toEqual(
        [
          [5, 12],
          [21, 32],
        ],
      )

    expect(mtrx.multiplyMatrices(
      [
        [[1], [2]],
        [[3], [4]],
      ],
      [
        [[5], [6]],
        [[7], [8]],
      ],
    ))
      .toEqual(
        [
          [[5], [12]],
          [[21], [32]],
        ],
      )
  })

  it("should throw when trying to multiply matrices element-wise of different shape", () => {
    expect(() => mtrx.multiplyMatrices([[0]], [[[0]]])).toThrowError(
      "Matrices have different dimensions",
    )

    expect(() => mtrx.multiplyMatrices([[0]], [[0, 0]])).toThrowError(
      "Matrices have different shapes",
    )
  })

  it("should do element wise subtraction two matrices", () => {
    expect(mtrx.subtractMatrices([[3]], [[2]])).toEqual([[1]])

    expect(mtrx.subtractMatrices(
      [[10, 12, 14]],
      [[4, 5, 6]],
    ))
      .toEqual(
        [[6, 7, 8]],
      )

    expect(mtrx.subtractMatrices(
      [[[10], [12], [14]]],
      [[[4], [5], [6]]],
    ))
      .toEqual(
        [[[6], [7], [8]]],
      )

    expect(mtrx.subtractMatrices(
      [
        [10, 20],
        [30, 40],
      ],
      [
        [5, 6],
        [7, 8],
      ],
    ))
      .toEqual(
        [
          [5, 14],
          [23, 32],
        ],
      )

    expect(mtrx.subtractMatrices(
      [
        [[10], [20]],
        [[30], [40]],
      ],
      [
        [[5], [6]],
        [[7], [8]],
      ],
    ))
      .toEqual(
        [
          [[5], [14]],
          [[23], [32]],
        ],
      )
  })

  it("should throw when trying to subtract matrices element-wise of different shape", () => {
    expect(() => mtrx.subtractMatrices([[0]], [[[0]]])).toThrowError(
      "Matrices have different dimensions",
    )

    expect(() => mtrx.subtractMatrices([[0]], [[0, 0]])).toThrowError(
      "Matrices have different shapes",
    )
  })
})
