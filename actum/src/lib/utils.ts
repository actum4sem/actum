// src/lib/utils.ts
const aspectRatios = [
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-square",
  "aspect-[2/3]",
  "aspect-[16/9]",
];

export const getAspectRatio = (id: number) =>
  aspectRatios[id % aspectRatios.length];
