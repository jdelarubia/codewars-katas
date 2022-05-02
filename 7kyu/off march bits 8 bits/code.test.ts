import { bitMarch, zeroFill, shiftWordByOne } from './code'

describe('Basic tests', () => {
  it('should return a 8-steps array as result', () => {
    const expected = [
      [0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
    ]
    expect(bitMarch(1)).toEqual(expected)
  })
  it('should return a 7-steps array as result', () => {
    const expected = [
      [0, 0, 0, 0, 0, 0, 1, 1],
      [0, 0, 0, 0, 0, 1, 1, 0],
      [0, 0, 0, 0, 1, 1, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 0, 0],
      [0, 1, 1, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 0, 0],
    ]
    expect(bitMarch(2)).toEqual(expected)
  })
  it('should return a 8-steps array as result', () => {
    const expected = [
      [0, 0, 0, 0, 0, 1, 1, 1],
      [0, 0, 0, 0, 1, 1, 1, 0],
      [0, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1, 0, 0, 0],
      [0, 1, 1, 1, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0, 0, 0],
    ]
    expect(bitMarch(3)).toEqual(expected)
  })
})

describe('test zeroFill functionality', () => {
  it('should return an array of 7 zeroes and 1 one', () => {
    const expected = [0, 0, 0, 0, 0, 0, 0, 1]
    expect(zeroFill(1)).toEqual(expected)
  })
  it('should return an array of 5 zeroes and 3 ones', () => {
    const expected = [0, 0, 0, 0, 0, 1, 1, 1]
    expect(zeroFill(3)).toEqual(expected)
  })
  it('should return an array of 1 zero and 7 ones', () => {
    const expected = [0, 1, 1, 1, 1, 1, 1, 1]
    expect(zeroFill(7)).toEqual(expected)
  })
})

describe('test shiftWordByOne functionality', () => {
  it('should shift the word one step to the left', () => {
    const expected = [0, 0, 0, 0, 0, 0, 1, 0]
    expect(shiftWordByOne([0, 0, 0, 0, 0, 0, 0, 1])).toEqual(expected)
  })
  it('should return the exact same word', () => {
    const expected = [1, 0, 0, 0, 0, 0, 0, 0]
    expect(shiftWordByOne([1, 0, 0, 0, 0, 0, 0, 0])).toEqual(expected)
  })
})
