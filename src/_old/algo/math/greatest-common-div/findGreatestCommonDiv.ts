export const euclideanAlgoRecursive = (first: number, second: number): number => {
  const firstPos = Math.abs(first)
  const secondPos = Math.abs(second)

  return secondPos === 0 ? firstPos : euclideanAlgoRecursive(secondPos, firstPos % secondPos)
}

export const euclideanAlgoIterative = (first: number, second: number): number => {
  let [firstPos, secondPos] = [Math.abs(first), Math.abs(second)]

  while (firstPos && secondPos && firstPos !== secondPos) {
    [firstPos, secondPos] = firstPos > secondPos ?
      [firstPos - secondPos, secondPos] :
      [firstPos, secondPos - firstPos]
  }

  return firstPos || secondPos
}

