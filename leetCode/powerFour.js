var isPowerOfFour = function (n) {
  for (let i = 0; i < Math.sqrt(n); i++) {
    if (n === Math.pow(4, i)) {
      return true;
    }
  }
  return false;
};
