import { G964 } from "./code";

function testing(arr: number[], newavg: number, expected: number) {
  expect(G964.newAvg(arr, newavg)).toEqual(expected);
}

describe("Fixed Tests newAvg", () => {
  it("Basic tests", function () {
    testing([14, 30, 5, 7, 9, 11, 16], 90, 628);
    testing([14, 30, 5, 7, 9, 11, 15], 92, 645);
    expect(() => {
      G964.newAvg([14, 30, 5, 7, 9, 11, 15], 2);
    }).toThrow("Expected New Average is too low");
  });
});

describe("Empty array", () => {
  it("should return the value of the newavg parameter", () => {
    testing([], 90, 90);
  });
});
