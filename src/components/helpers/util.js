export const isEmpty = (obj) => [Object, Array].includes((obj ?? {}).constructor) && !Object.entries(obj ?? {}).length;
export const isFiniteNumber = (number) => Number.isFinite(number);
