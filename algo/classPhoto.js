function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);
  let larger;
  let smaller;
  if (redShirtHeights[0] > blueShirtHeights[0]) {
    larger = redShirtHeights;
    smaller = blueShirtHeights;
  } else {
    larger = blueShirtHeights;
    smaller = redShirtHeights;
  }
  for (let i = 0; i < redShirtHeights.length; i++) {
    if (larger[i] <= smaller[i]) {
      return false;
    }
  }
  return true;
}
