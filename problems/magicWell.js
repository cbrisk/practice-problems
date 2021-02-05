function magicalWell(a, b, n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    let multiply = a * b;
    sum += multiply;
    a++;
    b++;
  }
  return sum;
}
