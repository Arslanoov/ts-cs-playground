export const capitalizeFirst = (input: string[], output: string[] = []): string[] => {
  if (input.length === 0) return output

  return capitalizeFirst(
    input.slice(1),
    output.concat([input[0].charAt(0).toUpperCase() + input[0].slice(1)])
  )
}
