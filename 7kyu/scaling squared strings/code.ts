// repeat-like helper function
const repeat = (str: string, n: number): string => {
  let repeatedStr = "";
  for (let i = 0; i < n; i++) {
    repeatedStr += str;
  }
  return repeatedStr;
};

export class G964 {
  public static scale = (strng: string, k: number, n: number) => {
    let vertical: string = "";
    strng.split("\n").forEach((line: string) => {
      let horizontal = "";
      line.split("").forEach((character: string) => {
        horizontal += character.repeat(k);
      });
      horizontal += "\n";
      // the following line throws an error: bug???
      // TSError: ⨯ Unable to compile TypeScript
      // solution.ts (22,32): Property 'repeat' does not exist on type 'string'. (2339)
      //vertical += horizontal.repeat(n);
      vertical += repeat(horizontal, n); //getaway!
    });
    return vertical.trim();
  };
}
