var largestAltitude = function (gain) {
  let highest = 0;
  let accum = 0
  for (let i = 0; i < gain.length; i++) {
    accum += gain[i]
    if (accum > highest) {
      highest = accum;
    }
  }
  return highest;
};
