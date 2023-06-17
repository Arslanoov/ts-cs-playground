
/**
 * @param {number[]} arr
 * @return {number[]}
 */
function findTwo(arr) {
  if (!arr || arr.length === 0) return null;

  const hashTable = {};

  for (let key in arr) {
    hashTable[arr[key]] = key;
  }

  for (let key in arr) {
    if (hashTable[-arr[key]]) {
      return [key, hashTable[-arr[key]]];
    }
  }

  return null;
}