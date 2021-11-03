function longestPalindrome(s: string): string {
  if (s.length < 1) return ""

  let longestPalindromeStartIndex: number = 0
  let longestPalindromeEndIndex: number = 0
  let maxLength: number = 0
  for (let i = 0; i < s.length; i++) {
    // With center
    let evenPalindromeCandidateLength = findPalindromeLength(s, i, i + 1)
    // Without center
    let oddPalindromeCandidateLength = findPalindromeLength(s, i, i)

    // Find longest palindrome
    const maxCandidate = Math.max(evenPalindromeCandidateLength, oddPalindromeCandidateLength)

    // Set max length palindrome
    if ((longestPalindromeEndIndex - longestPalindromeStartIndex) < maxCandidate) {
      // Set max length
      maxLength = maxCandidate
      // Set start index
      longestPalindromeStartIndex = i - ((maxLength - 1) / 2)
      // Set end index
      longestPalindromeEndIndex = i + (maxLength / 2)
    }
  }

  // Check is palindrome odd and return palindrome
  return s.slice(
    maxLength % 2 === 0 ? longestPalindromeStartIndex + 1: longestPalindromeStartIndex,
    longestPalindromeEndIndex + 1
  )
};

function findPalindromeLength(s: string, startPoint: number, endPoint: number): number {
  let leftPointer: number = startPoint
  let rightPointer: number = endPoint

  while (leftPointer >= 0 && rightPointer < s.length && s[leftPointer] === s[rightPointer]) {
    // Until it's smaller than 0 (string first char)
    leftPointer--
    // Until it's bigger than string length
    rightPointer++
  }

  // Return palindrome length
  return (rightPointer - leftPointer) - 1
}