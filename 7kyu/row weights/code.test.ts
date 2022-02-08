import { rowWeights } from "./code";

describe("Basic tests", () => {
  it("Testing for [80]", () => expect(rowWeights([80])).toEqual([80, 0]));
  it("Testing for [100, 50]", () =>
    expect(rowWeights([100, 50])).toEqual([100, 50]));
  it("Testing for [50, 60, 70, 80]", () =>
    expect(rowWeights([50, 60, 70, 80])).toEqual([120, 140]));
  it("Testing for [13, 27, 49]", () =>
    expect(rowWeights([13, 27, 49])).toEqual([62, 27]));
  it("Testing for [70, 58, 75, 34, 91]", () =>
    expect(rowWeights([70, 58, 75, 34, 91])).toEqual([236, 92]));
  it("Testing for [29, 83, 67, 53, 19, 28, 96]", () =>
    expect(rowWeights([29, 83, 67, 53, 19, 28, 96])).toEqual([211, 164]));
  it("Testing for [0]", () => expect(rowWeights([0])).toEqual([0, 0]));
  it("Testing for [100, 51, 50, 100]", () =>
    expect(rowWeights([100, 51, 50, 100])).toEqual([150, 151]));
  it("Testing for [39, 84, 74, 18, 59, 72, 35, 61]", () =>
    expect(rowWeights([39, 84, 74, 18, 59, 72, 35, 61])).toEqual([207, 235]));
  it("Testing for [0, 1, 0]", () =>
    expect(rowWeights([0, 1, 0])).toEqual([0, 1]));
});
