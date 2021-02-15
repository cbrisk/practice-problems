function isPower(n) {
  for (let i = 1; i <= 20; i++) {
    for (let j = 2; j < 10; j++) {
      if (Math.pow(i, j) === n) {
        return true;
      }
    }
  }
  return false;
}
