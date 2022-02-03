export const iceBrickVolume = (
  radius: number,
  bottleLength: number,
  rimLength: number
): number => {
  const rimHeight = bottleLength - rimLength;
  const squareArea = 2 * Math.pow(radius, 2);
  return rimHeight * squareArea;
};
