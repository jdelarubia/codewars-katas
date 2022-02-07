import { G964 } from "./code";

function testing(strng: string, k: number, n: number, expected: string) {
  expect(G964.scale(strng, k, n)).toEqual(expected);
}

describe("Fixed Tests", function () {
  it("Basic tests scale", function () {
    var a = "abcd\nefgh\nijkl\nmnop";
    var r =
      "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp";
    testing(a, 2, 3, r);
    testing("Kj\nSH", 1, 2, "Kj\nKj\nSH\nSH");
  });
});
