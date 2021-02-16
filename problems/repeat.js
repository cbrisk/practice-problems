function isTandemRepeat(inputString) {
  let length = inputString.length / 2;
  if (inputString.substring(0, length) === inputString.substring(length)) {
    return true;
  }
  return false;
}
