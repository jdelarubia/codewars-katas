import { digitize } from "./code";

describe("digitize", function () {
  it("Sample test", function () {
    expect(digitize(35231)).toEqual([1, 3, 2, 5, 3]);
    expect(digitize(0)).toEqual([0]);
  });
});
