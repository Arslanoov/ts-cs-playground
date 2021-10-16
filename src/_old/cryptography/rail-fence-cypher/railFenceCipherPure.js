const UP = -1
const DOWN = 1

const buildFence = (rows) => Array(rows).fill(null).map(() => [])

const getNextDirection = ({ railCount, currentRail, direction }) => {
  switch (currentRail) {
    case 0:
      return DOWN
    case railCount - 1:
      return UP
    default:
      return direction
  }
}

export const addCharToRail = (index, char) => {
  return function onRail(rail, currentRail) {
    return currentRail === index ? [...rail, char] : rail
  }
}

export const fillEncodeFence = ({ fence, currentRail, direction, chars }) => {
  if (chars.length === 0) return fence

  const railCount = fence.length
  const [char, ...nextChars] = chars

  const nextDirection = getNextDirection({
    railCount,
    currentRail,
    direction
  })

  return fillEncodeFence({
    fence: fence.map(addCharToRail(currentRail, char)),
    currentRail: currentRail + nextDirection,
    direction: nextDirection,
    chars: nextChars
  })
}

export const fillDecodeFence = (
  {
    strLen,
    chars,
    fence,
    targetRail,
    direction,
    coords
  }
) => {
  if (chars.length === 0) return fence

  const railCount = fence.length

  const [currentRail, currentCol] = coords
  const shouldGoNextRail = currentCol === strLen - 1

  const nextDirection = shouldGoNextRail ? DOWN : getNextDirection({
    railCount,
    currentRail,
    direction
  })

  const nextRail = shouldGoNextRail ? targetRail + 1 : targetRail
  const nextCoords = [
    shouldGoNextRail ? 0 : currentRail + nextDirection,
    shouldGoNextRail ? 0 : currentCol + 1
  ]

  const shouldAddChar = currentRail === targetRail
  const [currentChar, ...otherChars] = chars
  const nextChars = shouldAddChar ? otherChars : chars
  const nextFence = shouldAddChar ? fence.map(addCharToRail(currentRail, currentChar)) : fence

  return fillDecodeFence({
    strLen,
    chars: nextChars,
    fence: nextFence,
    targetRail: nextRail,
    direction: nextDirection,
    coords: nextCoords
  })
}

export const decodeFence = ({
  strLen,
  fence,
  currentRail,
  direction,
  code
}) => {
  if (code.length === strLen) return code.join("")

  const railCount = fence.length
  const [currentChar, ...nextRail] = fence[currentRail]
  const nextDirection = getNextDirection({
    railCount,
    currentRail,
    direction
  })

  return decodeFence({
    strLen,
    railCount,
    direction: nextDirection,
    currentRail: currentRail + nextDirection,
    code: [...code, currentChar],
    fence: fence.map((rail, i) => (i === currentRail ? nextRail : rail))
  })
}

export const encodeRailFenceCipher = (string, railCount) => {
  const fence = buildFence(railCount)
  const filledFence = fillEncodeFence({
    fence,
    currentRail: 0,
    direction: DOWN,
    chars: string.split("")
  })

  return filledFence.flat().join("")
}

export const decodeRailFenceCipher = (string, railCount) => {
  const strLen = string.length
  const fence = buildFence(railCount)
  const filledFence = fillDecodeFence({
    strLen,
    fence,
    targetRail: 0,
    coords: [0, 0],
    direction: DOWN,
    chars: string.split("")
  })

  return decodeFence({
    strLen,
    fence: filledFence,
    currentRail: 0,
    direction: DOWN,
    code: []
  })
}
