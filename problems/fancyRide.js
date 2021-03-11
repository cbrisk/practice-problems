function fancyRide(l, fares) {
  let arr = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];
  for (let i = 0; i < fares.length; i++) {
    if (l * fares[i] > 20) {
      return arr[i - 1];
    }
  }
  return arr[arr.length - 1];
}
