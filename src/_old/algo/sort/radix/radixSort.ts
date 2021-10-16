const BASE_CHAR_CODE = 97
const NUMBER_OF_POS_DIGITS = 10
const ENG_ALPHABET_LENGTH = 26

const getCharsLongestElementLength = (array: string[]): number =>
    array.reduce((acc, val) => val.length > acc ? val.length : acc, -Infinity)

const getNumbersLongestElementLength = (arr: number[]): number => Math.floor(Math.log10(Math.max(...arr))) + 1

const createBuckets = (amount: number) => new Array(amount).fill(null).map(() => [])

const getCharCodeOfElementAtIndex = (element: string, index: number, numPasses: number) => {
  if ((numPasses - index) > element.length) return ENG_ALPHABET_LENGTH - 1

  const pos = index > element.length - 1 ? 0 : element.length - index - 1

  return element.toLowerCase().charCodeAt(pos) - BASE_CHAR_CODE
}

const placeElementsInCharBuckets = (arr: string[], index: number, passes: number) => {
  const buckets = createBuckets(ENG_ALPHABET_LENGTH)

  arr.forEach((element) => {
    const currentBucket = getCharCodeOfElementAtIndex(element, index, passes)
    buckets[currentBucket].push(element)
  })

  return buckets
}

const placeElementsInNumberBuckets = (arr: number[], index: number) => {
  const modded = 10 ** (index + 1)
  const divided = 10 ** index
  const buckets = createBuckets(NUMBER_OF_POS_DIGITS)

  arr.forEach((element) => {
    if (element < divided) {
      buckets[0].push(element)
    } else {
      const currentDigit = Math.floor((element % modded) / divided)
      buckets[currentDigit].push(element)
    }
  });

  return buckets
}

export const radixSortChars = (input: string[]): string[] => {
  let arr = [...input]
  const passes = getCharsLongestElementLength(arr)

  for (let i = 0; i < passes; i++) {
    const buckets = placeElementsInCharBuckets(arr, i, passes)
    arr = buckets.reduce((acc, val) => [...acc, ...val], [])
  }

  return arr
}

export const radixSortNumbers = (input: number[]): number[] => {
  let arr = [...input]
  const passes = getNumbersLongestElementLength(arr)

  for (let i = 0; i < passes; i++) {
    const buckets = placeElementsInNumberBuckets(arr, i)
    arr = buckets.reduce((acc, val) => [...acc, ...val], [])
  }

  return arr
}