export class G964 {
  public static nbYear = (
    initPopulation: number,
    percent: number,
    augment: number,
    targetPopulation: number
  ) => {
    let currentPopulation =
      (initPopulation * percent) / 100 + initPopulation + augment;
    let years = 1;

    while (currentPopulation < targetPopulation) {
      currentPopulation += (currentPopulation * percent) / 100 + augment;
      years++;
    }
    return years;
  };
}

const syntheticTests = [
  {
    actual: G964.nbYear(1000, 0.02, 50, 1200),
    expected: 3,
  },
  { actual: G964.nbYear(1500000, 0.25, 10000, 2000000), expected: 94 },
  { actual: G964.nbYear(1500000, 2.5, 10000, 2000000), expected: 10 },
  { actual: G964.nbYear(1500, 5, 100, 5000), expected: 15 },
];

syntheticTests.forEach((test) => {
  const { actual, expected } = test;
  console.log(`actual: ${actual} | expected: ${expected}`);
});
