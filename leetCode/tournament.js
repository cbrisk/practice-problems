var numberOfMatches = function (n) {
  let matches = 0;
  return getMatches(n, matches);

  function getMatches(n, matches) {
    if (n === 1) {
      return matches;
    } else if (n % 2 === 0) {
      matches += n / 2;
      return getMatches(n / 2, matches);
    } else {
      matches += (n - 1) / 2;
      return getMatches((n - 1) / 2 + 1, matches);
    }
  }
};
