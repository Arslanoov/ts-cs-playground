export const ALPHABET_CODE_SHIFT = 'A'.codePointAt(0)
export const ALPHABET_SIZE = 26

import * as mtrx from "../../math/matrix/matrix"

// Returns matrix
const generateKey = (key: string): mtrx.Matrix => {
  const size = Math.sqrt(key.length)
  if (!Number.isInteger(size)) {
    throw new Error("Invalid key")
  }

  let index = 0
  return mtrx.generateMatrix(
    [size, size],
    () => {
      const shifted = (key.codePointAt(index)) % ALPHABET_CODE_SHIFT
      index++
      return shifted
    }
  )
}

const generateMessageVector = (message: string): mtrx.Matrix => {
  return mtrx.generateMatrix(
    [message.length, 1],
    (indices: number[]) => {
      return message.codePointAt(indices[0]) % ALPHABET_CODE_SHIFT
    }
  )
}

/////////

/**
 * Message and key should contain only cover letter
 * @param message
 * @param key
 */
export const hillCipherEncrypt = (message: string, key: string): string => {
  const testRegExp = /^[a-zA-Z]+$/;
  if (!testRegExp.test(message) || !testRegExp.test(key)) {
    throw new Error("Message and key should contain only cover letter");
  }

  const keyMatrix = generateKey(key)
  const messageVector = generateMessageVector(message)

  if (keyMatrix.length !== messageVector.length) {
    throw new Error("Incorrect key length")
  }

  const cipherVector = mtrx.dotMatrix(keyMatrix, messageVector)

  let output = ""
  for (let row = 0; row < cipherVector.length; row++) {
    // @ts-ignore
    output += String.fromCharCode((cipherVector[row] % ALPHABET_SIZE) + ALPHABET_CODE_SHIFT)
  }

  return output
}

// TODO: Add Decrypt