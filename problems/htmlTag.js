function htmlEndTagByStartTag(startTag) {
  let arr = startTag.split(' ');
  let newStr = '</';
  for (let i = 1; i < arr[0].length; i++) {
    if (arr[0][i] === '>') {
      break;
    }
    newStr += arr[0][i];
  }
  return newStr + '>';
}
