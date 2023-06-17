export const capitalizeWords = (input: string[], output: string[] = []): string[] => {
  if (input.length === 0) return output

  return capitalizeWords(
    input.slice(1),
    output.concat([input[0].toUpperCase()])
  )
}
