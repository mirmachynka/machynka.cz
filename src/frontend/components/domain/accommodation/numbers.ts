export function numbers(count: number): number[] {
  return Array.from({ length: count }, (_, index) => index + 1);
}
