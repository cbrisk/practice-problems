function metroCard(lastNumberOfDays) {
  var arr;
  if (lastNumberOfDays === 31) {
    arr = [28, 30, 31];
  } else if (lastNumberOfDays === 30) {
    arr = [31];
  } else {
    arr = [31];
  }
  return arr;
}
