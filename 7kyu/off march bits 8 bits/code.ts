export const zeroFill = (n: number): number[] => {
  const str = ('0'.repeat(8 - n) + '1'.repeat(n)).split('')
  return str.map((bit) => +bit)
}

export const shiftWordByOne = (a: number[]): number[] => {
  if (a[0] === 0) {
    const popped = <number>a.shift()
    a.push(popped)
  }
  return a
}

export const bitMarch = (n: number): any[] => {
  const current = <number[]>zeroFill(n)
  let steps = [[...current]]
  while (current[0] !== 1) {
    // const shifted = <string[]>[...shiftWordByOne(current)]
    // const shifted = <string[]>[].concat(shiftWordByOne(current))
    steps.push([...shiftWordByOne(current)])
  }
  return steps
}

// console.log(zeroFill(1))
// console.log(zeroFill(3))
// console.log(zeroFill(7))

// console.log(shiftWordByOne([0, 0, 0, 0, 0, 0, 0, 1]))
// console.log(shiftWordByOne([0, 1, 0, 0, 0, 0, 0, 0]))

// console.log(bitMarch(7))
