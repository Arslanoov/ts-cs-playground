function intersect(nums1: number[], nums2: number[]): number[] {
  if (nums1.length > nums2.length) {
    return intersect(nums2, nums1)
  }

  const map: {
    [key: number]: number
  } = {}

  nums1.forEach((num) => map[num] = (map[num] ?? 0) + 1)

  const intersection: number[] = []
  nums2.forEach((num) => {
    if (map[num]) {
      intersection.push(num)
      map[num]--
    }
  })

  return intersection
}