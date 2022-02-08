import { G964 } from "./code";

describe("growth population fixed tests", function () {
  it("Basic tests nbYear", () => {
    expect(G964.nbYear(1000, 2, 50, 1200)).toEqual(3);
    expect(G964.nbYear(1500, 5, 100, 5000)).toEqual(15);
    expect(G964.nbYear(1500000, 2.5, 10000, 2000000)).toEqual(10);
    expect(G964.nbYear(1500000, 0.25, 1000, 2000000)).toEqual(94);
    expect(G964.nbYear(1500000, 0.25, -1000, 2000000)).toEqual(151);
  });
});
