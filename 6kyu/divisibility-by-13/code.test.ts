import { thirt } from './code';

describe('test divisibility by 13', function () {
  it('Basic tests', function () {
    expect(thirt(8529)).toStrictEqual(79);
    expect(thirt(85299258)).toStrictEqual(31);
    expect(thirt(1234567)).toStrictEqual(87);
    expect(thirt(321)).toStrictEqual(48);
    expect(thirt(48)).toStrictEqual(48);
    expect(thirt(8529)).toStrictEqual(79);
  });
});
