function isInfiniteProcess(a, b) {
  if (a < b && (b - a) % 2 === 0 || a === b) {
    return false;
  }
  return true;
}
