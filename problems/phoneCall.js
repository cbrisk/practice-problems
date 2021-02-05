function phoneCall(min1, min2_10, min11, s) {
  if (min1 > s) { return 0; }
  var mins = 0;
  var cost = 0
  while (cost < s) {
    if (mins === 0) {
      cost += min1;
    } else if (mins > 0 && mins < 10) {
      cost += min2_10;
    } else {
      cost += min11;
    }
    if (cost > s) {
      break;
    }
    mins++;
  }
  return mins;
}
