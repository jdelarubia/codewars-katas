const digitize = (n: number): number[] => {
  return n
    .toString()
    .split("")
    .reverse()
    .map((elem) => parseInt(elem));
};

export { digitize };
