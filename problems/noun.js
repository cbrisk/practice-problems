function properNounCorrection(noun) {
  let newStr = noun[0].toUpperCase();
  for (let i = 1; i < noun.length; i++) {
    newStr += noun[i].toLowerCase();
  }
  return newStr;
}
