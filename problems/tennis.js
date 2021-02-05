function tennisSet(score1, score2) {
  var max = Math.max(score1, score2);
  var min = Math.min(score1, score2);
  if (max === 6 && min < 5 || max === 7 && min === 5 || max === 7 && min === 6) {
    return true;
  }
  return false;
}
