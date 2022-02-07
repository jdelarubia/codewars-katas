export class G964 {
  public static newAvg(arr: number[], newavg: number): any {
    const mean: number =
      arr.reduce((previous, current) => previous + current) / arr.length;
    if (newavg < mean) throw "Expected New Average is too low";
    return (newavg - mean) * arr.length + newavg;
  }
}
