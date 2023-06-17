export const PRIME = 17

export const hash = (string: string, length: number): number => {
  return string
    .split("")
    /*.slice(0, 100)*/
    .reduce((acc: number, char: string) => (PRIME * acc) + char.charCodeAt(0), 0)
    % length;
}