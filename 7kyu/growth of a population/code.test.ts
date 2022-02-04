import { G964 } from "./code";

describe("Fixed Tests", function () {
  it("Basic tests nbYear", function () {
    expect(G964.nbYear(1500, 5, 100, 5000)).toEqual(15);
    expect(G964.nbYear(1500000, 2.5, 10000, 2000000)).toEqual(10);
    expect(G964.nbYear(1500000, 0.25, 1000, 2000000)).toEqual(94);
    expect(G964.nbYear(1500000, 0.25, -1000, 2000000)).toEqual(151);
  });
});
