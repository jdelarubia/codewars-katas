import { CircularQueue } from './queue';

export const summatory = (digits: number[]): number => {
  let summ: number = 0;
  const cq = new CircularQueue([1, 10, 9, 12, 3, 4]);
  digits.forEach((elem) => {
    summ += +elem * cq.next();
  });
  return summ;
};

export const reverseNumberSquence = (sequence: number): number[] => {
  return sequence
    .toString()
    .split('')
    .reverse()
    .map((n) => parseInt(n));
};

export const thirt = (n: number): number => {
  let previous = n;
  let current = 0;
  while (previous !== current) {
    const reversed = reverseNumberSquence(previous);
    current = previous;
    previous = summatory(reversed);
  }
  return current;
};

/* basic test */
// console.log('*** 1234567 ***');
// console.log(thirt(1234567)); // 178 -> 87
// console.log('*** 321 ***');
// console.log(thirt(321)); // 48
// console.log('*** 48 ***');
// console.log(thirt(48)); // 48
// console.log('*** 85299258 ***');
// console.log(thirt(85299258)); // 31
// console.log('*** 8529 ***');
// console.log(thirt(8529)); // 79
