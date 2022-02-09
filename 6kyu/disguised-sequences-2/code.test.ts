import { v1, u1 } from "./code";

function testing(actual: number, expected: number) {
  expect(actual).toStrictEqual(expected);
}

describe("disguised sequences", () => {
  it("Basic tests u1 v1", () => {
    testing(v1(1, 12), 36);
    testing(v1(2, 138), 690);

    testing(u1(1, 14), 28);
    testing(u1(4, 18), 90);
  });
});
