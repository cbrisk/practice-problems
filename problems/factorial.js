function leastFactorial(n) {
  let num = 1;
  let total = 1;
  while (total < n) {
    num++
    total *= num;
  }
  return total;
}
