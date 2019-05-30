export function range(from: number, to: number) {
  const size = to - from

  return [...Array(size).keys()].map(i => i + from)
}
