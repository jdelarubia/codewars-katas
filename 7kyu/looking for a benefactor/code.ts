export class G964 {
  public static newAvg(arr: number[], newavg: number): any {
    if (arr.length === 0) return newavg;

    const mean: number =
      arr.reduce((previous, current) => previous + current) / arr.length;
    if (newavg < mean) throw "Expected New Average is too low";
    return Math.ceil((newavg - mean) * arr.length + newavg);
  }
}
