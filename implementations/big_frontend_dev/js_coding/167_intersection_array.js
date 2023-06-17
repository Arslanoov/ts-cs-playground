/**
 * @param {any[]} arr1
 * @param {any[]} arr2
 * @returns {any[]}
 */
function getIntersection(arr1, arr2) {
  const set1 = new Set(arr1)
  const set2 = new Set(arr2)

  return [...set1].filter((a) => set2.has(a))
}