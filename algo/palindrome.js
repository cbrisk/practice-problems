function isPalindrome(string) {
  let reverse = string.split('').reverse().join('');
  if (reverse === string) {
    return true;
  }
  return false;
}
