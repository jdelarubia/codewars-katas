import { asciiEncrypt, asciiDecrypt } from './code';

function doTest(plaintext: string, ciphertext: string) {
  const encryptedString = asciiEncrypt(plaintext);
  const decryptedString = asciiDecrypt(ciphertext);
  expect(encryptedString).toBe(ciphertext);
  expect(decryptedString).toBe(plaintext);
}

describe('Tests suite', () => {
  it('sample tests', () => {
    doTest('PASSWORD', 'PBUV[TXK');
    doTest('password', 'pbuv{txk');
    doTest('', '');
    doTest('zzzzz', 'z{|}~');
    doTest('ZZZZZ', 'Z[\\]^');
    doTest('aaaa', 'abcd');
    doTest('AAAA', 'ABCD');
    doTest('0123456789', '02468:<>@B');
  });
});
