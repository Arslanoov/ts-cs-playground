function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  const result: number[][] = []
  const flatMatrix: number[] = mat.toString().split(",").map((item) => Number(item))

  if (r * c !== flatMatrix.length) {
    return mat
  }

  for (let i = 0; i < r; i++) {
    result.push(flatMatrix.slice(i * c, (i + 1) * c))
  }

  return result
}