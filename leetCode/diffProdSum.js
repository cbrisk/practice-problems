var subtractProductAndSum = function (n) {
  let arr = Array.from(String(n), Number);
  let sum = arr.reduce((acc, ele) => acc + ele);
  let product = arr.reduce((acc, ele) => acc * ele);
  return product - sum;
};
