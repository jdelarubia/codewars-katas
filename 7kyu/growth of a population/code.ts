export class G964 {
  public static nbYear = (
    initPopulation: number,
    percent: number,
    augment: number,
    targetPopulation: number
  ) => {
    let currentPopulation = initPopulation;
    let years = 0;

    while (currentPopulation < targetPopulation) {
      currentPopulation += (currentPopulation * percent) / 100 + augment;
      years++;
    }
    return years;
  };
}
