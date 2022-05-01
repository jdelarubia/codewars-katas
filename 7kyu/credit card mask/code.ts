export const maskify = (cc: string): string => {
  const lastFour = cc.slice(-4);
  const len = cc.length - 4;
  return cc.length > 4 ? '#'.repeat(len) + `${lastFour}` : lastFour;
};

// console.log('4556364607935616', maskify('4556364607935616'));
// console.log('Skippy', maskify('##ippy'));
// console.log('', maskify(''));
// console.log('1', maskify('1'));
