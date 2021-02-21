function reverseWordsInString(string) {
  let arr = [];
  let str = ''
  for (let i = 0; i < string.length + 1; i++) {
    if (string[i] === ' ' || i === string.length) {
      arr.push(str);
      str = '';
    } else {
      str += string[i];
    }
  }
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  let StrRE = newArr.join(' ');
  return StrRE;
}
