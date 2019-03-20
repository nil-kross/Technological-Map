export const range = function(from: number, to: number): number[] {
  const min = Math.min(from, to);
  const max = Math.max(from, to);
  const array: number[] = [];

  for (let i = min; i <= max; i++) {
    array.push(i);
  }

  return array;
};
