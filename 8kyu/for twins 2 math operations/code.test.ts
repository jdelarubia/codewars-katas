import { iceBrickVolume } from "./code";

describe("Tests", function () {
  it("should pass sample tests", () => {
    expect(iceBrickVolume(1, 10, 2)).toEqual(16);
    expect(iceBrickVolume(5, 30, 7)).toEqual(1150);
  });
});
