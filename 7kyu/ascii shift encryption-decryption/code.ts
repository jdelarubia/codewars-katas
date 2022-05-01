export const asciiEncrypt = (plaintext: string) => {
  let result = '';

  plaintext.split('').forEach((char: string, index: number) => {
    result += String.fromCharCode(char.charCodeAt(0) + index);
  });

  return result;
};

export const asciiDecrypt = (ciphertext: string) => {
  let result = '';

  ciphertext.split('').forEach((char: string, index: number) => {
    result += String.fromCharCode(char.charCodeAt(0) - index);
  });

  return result;
};

// console.log(asciiEncrypt('PASSWORD'));
// console.log(asciiDecrypt('PBUV[TXK'));
