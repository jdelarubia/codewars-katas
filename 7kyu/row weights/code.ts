export function rowWeights(arr: number[]) {
  let weights: number[] = [0, 0];
  arr.forEach((weight, idx) => {
    // team 2
    if (idx % 2 === 0) weights[0] += weight;
    else weights[1] += weight; // team 1
  });
  return weights;
}
