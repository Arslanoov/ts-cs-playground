type Rail = string[]
type Fence = Rail[]
type Direction = 1 | -1

interface NextDirectionParams {
  railCount: number,
  currentRail: number,
  direction: Direction
}

interface FillEncodeFenceParams {
  fence: Fence,
  currentRail: number,
  direction: Direction,
  chars: string[]
}

interface FillDecodeFenceParams {
  strLen: number,
  chars: string[],
  fence: Fence,
  targetRail: number,
  direction: Direction,
  coords: number[]
}

interface DecodeFenceParams {
  strLen: number,
  fence: Fence,
  currentRail: number,
  direction: Direction,
  code: number[]
}

//////////////

const UP: Direction = -1
const DOWN: Direction = 1

const buildFence = (rows: number): Fence => Array(rows).fill(null).map(() => [])

const getNextDirection = ({ railCount, currentRail, direction }: NextDirectionParams): Direction => {
  switch (currentRail) {
    case 0:
      return DOWN
    case railCount - 1:
      return UP
    default:
      return <Direction>direction
  }
}

export const addCharToRail = (index: number, char: string): ((rail: Rail, currentRail: number) => Rail) => {
  return function onRail(rail: Rail, currentRail: number) {
    return currentRail === index ? [...rail, char] : rail
  }
}

export const fillEncodeFence = ({ fence, currentRail, direction, chars }: FillEncodeFenceParams): Fence => {
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
  }: FillDecodeFenceParams
): Fence => {
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
}: DecodeFenceParams): string => {
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
    code: [...code, currentChar as number],
    fence: fence.map((rail: Rail, i: number) => (i === currentRail ? nextRail : rail))
  })
}

export const encodeRailFenceCipher = (string: string, railCount: number): string => {
  const fence = buildFence(railCount)
  const filledFence = fillEncodeFence({
    fence,
    currentRail: 0,
    direction: DOWN,
    chars: string.split("")
  })

  return filledFence.flat().join("")
}

export const decodeRailFenceCipher = (string: string, railCount: number): string => {
  const strLen = string.length
  const fence = buildFence(railCount)
  const filledFence = fillDecodeFence({
    strLen,
    fence,
    targetRail: 0,
    coords: [0, 0],
    direction: DOWN,
    chars: string.split("")
  } as FillDecodeFenceParams)

  return decodeFence({
    strLen,
    fence: filledFence,
    currentRail: 0,
    direction: DOWN,
    code: []
  })
}
