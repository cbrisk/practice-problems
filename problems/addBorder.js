function addBorder(picture) {
  let star = '*'
  for (let i = 0; i < picture.length; i++) {
    picture[i] = star + picture[i] + star;
  }
  picture.unshift(star.repeat(picture[0].length));
  picture.push(star.repeat(picture[0].length));
  return picture;
}
