function isCaseInsensitivePalindrome(inputString) {
  let reverse = inputString.split('').reverse().join('').toLowerCase();
  if (reverse === inputString.toLowerCase()) {
    return true;
  }
  return false;
}
