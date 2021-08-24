import { euclideanAlgoRecursive } from "../greatest-common-div/findGreatestCommonDiv"

export const findLeastCommonMultiple = (first: number, second: number): number => {
  if (first === 0 || second === 0) {
    return 0
  }

  return Math.abs(first * second) / euclideanAlgoRecursive(first, second)
}
