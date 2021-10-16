// a.length === b.length
export const hammingDist = (firstString, secondString) => {
  let dist = 0

  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] !== secondString[i]) {
      dist++
    }
  }

  return dist
}