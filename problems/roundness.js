function increaseNumberRoundness(n) {
  const str = n.toString();
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === '0') {
      continue;
    } else if (str[i] !== '0' && str[i - 1] === '0') {
      return true;
    }
  }
  return false;
}
