import { getEvenNumbers } from "./code";

describe("Fixed tests", () => {
  it("should return an empty array if there are no even numbers", () => {
    expect(getEvenNumbers([1, 2, 3, 6, 8, 10])).toEqual([2, 6, 8, 10]);
    expect(getEvenNumbers([1, 2])).toEqual([2]);
    expect(getEvenNumbers([12, 14, 15])).toEqual([12, 14]);
    expect(getEvenNumbers([13, 15])).toEqual([]);
    expect(getEvenNumbers([1, 3, 9])).toEqual([]);
  });
});

describe("Random tests", function () {
  it("Testing getEvenNumbers", () => {
    const solution = (a: number[]) => a.filter((n) => n % 2 == 0);
    const random = () =>
      Array.from(
        {
          length: (Math.random() * 50) | 0,
        },
        () => (Math.random() * 100) | 0
      );
    for (let i = 0; i < 100; i++) {
      let randA = random();
      let clone = randA.slice();
      let answer = solution(clone);
      expect(getEvenNumbers(randA)).toEqual(answer);
    }
  });
});
