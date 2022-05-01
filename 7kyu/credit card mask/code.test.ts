import { maskify } from './code';

describe('Basic tests', () => {
  it('', () => {
    expect(maskify('4556364607935616')).toEqual('############5616');
    expect(maskify('64607935616')).toEqual('#######5616');
    expect(maskify('Skippy')).toEqual('##ippy');
    expect(maskify('1')).toEqual('1');
    expect(maskify('')).toEqual('');
    expect(maskify('Nananananananananananananananana Batman!')).toEqual(
      '####################################man!'
    );
  });
});
