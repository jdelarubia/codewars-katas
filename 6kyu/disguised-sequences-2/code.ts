const factorial = (n: number): number => {
  return n > 1 ? n * factorial(n - 1) : 1;
};
const binomial_coefficient = (n: number, k: number): number => {
  return factorial(n) / (factorial(k) * factorial(n - k));
};

function v1(n: number, p: number): number {
  let summatory = 0;
  for (let k = 0; k <= n; k++) {
    summatory +=
      Math.pow(-1, k) *
      p *
      Math.pow(4, n - k) *
      binomial_coefficient(2 * n - k, k);
  }
  return Math.floor(summatory);
}

function u1(n: number, p: number): number {
  let summatory = 0;
  for (let k = 0; k <= n; k++) {
    summatory +=
      Math.pow(-1, k) *
      p *
      Math.pow(4, n - k) *
      binomial_coefficient(2 * n - k + 1, k);
  }
  return Math.floor(summatory);
}

export { v1, u1 };
