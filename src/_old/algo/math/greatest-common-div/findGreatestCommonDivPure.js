export const euclideanAlgoRecursive = (first, second) => {
  const firstPos = Math.abs(first)
  const secondPos = Math.abs(second)

  return secondPos === 0 ? firstPos : euclideanAlgoRecursive(secondPos, firstPos % secondPos)
}

export const euclideanAlgoIterative = (first, second) => {
  let [firstPos, secondPos] = [Math.abs(first), Math.abs(second)]

  while (firstPos && secondPos && firstPos !== secondPos) {
    [firstPos, secondPos] = firstPos > secondPos ?
      [firstPos - secondPos, secondPos] :
      [firstPos, secondPos - firstPos]
  }

  return firstPos || secondPos
}

