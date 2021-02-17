function caesarCipherEncryptor(string, key) {
  let arr = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let str = '';
  for (let i = 0; i < string.length; i++) {
    let index = arr.indexOf(string[i]);
    if (key > 26) {
      key = key % 26;
    }
    if (arr[index + key] === undefined) {
      str += arr[index - 26 + key];
    } else {
      str += arr[index + key];
    }
  }
  return str;
}
