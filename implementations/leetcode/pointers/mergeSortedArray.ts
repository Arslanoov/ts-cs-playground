// TODO: Refactor

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let first: number = n - 1
  let second: number = m - 1

  for (let i = (m + n) - 1; i >= 0; i--) {
    if (first < 0) break
    if (second >= 0 && nums1[second] > nums2[first]) {
      nums1[i] = nums1[second]
      second--
    } else {
      nums1[i] = nums2[first]
      first--
    }
  }
}