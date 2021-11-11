/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

const solution = function(isBadVersion: any) {
  return function(n: number): number {
    let left: number = 0
    let right: number = n - 1
    let middle: number = 0

    while (left <= right) {
      middle = left + Math.floor((right - left) / 2)
      if (isBadVersion(middle)) {
        right = middle - 1
      } else {
        left = middle + 1
      }
    }

    return left
  };
};